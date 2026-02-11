"use client";

import { createContext, useContext, ReactNode, useEffect } from "react";
import { User } from "@/types";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (
    email: string,
    password?: string,
  ) => Promise<{ mustChangePassword: boolean } | undefined>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const isLoading = status === "loading";

  // Map session user to app User type
  const user: User | null = session?.user
    ? {
        id: session.user.id,
        name: session.user.name || "",
        email: session.user.email || "",
        role: session.user.role as "student" | "admin",
        avatar: session.user.image || undefined,
        mustChangePassword: session.user.mustChangePassword,
      }
    : null;

  const login = async (email: string, password?: string) => {
    const res = await signIn("credentials", {
      email,
      password: password || "password123",
      redirect: false,
    });

    if (res?.error) {
      throw new Error(res.error);
    }

    if (res?.ok) {
      // Force session update
      const updatedSession = await getSession();

      // Check if password change is needed
      if (updatedSession?.user?.mustChangePassword) {
        // Return status to component so it can handle the UI
        // DO NOT redirect here
        return { mustChangePassword: true };
      }

      // Normal redirect logic if no password change needed
      if (updatedSession?.user?.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
      router.refresh();
      return { mustChangePassword: false };
    }
  };

  const logout = () => {
    signOut({ callbackUrl: "/" });
  };

  // Removed global useEffect for redirect to avoid conflict with Modal logic
  // User is "technically" logged in but restricted by UI until password change

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
