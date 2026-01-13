"use client";

import { AuthProvider } from "@/lib/context/AuthContext";
import { ProgressProvider } from "@/lib/context/ProgressContext";
import { ThemeProvider } from "@/lib/context/ThemeContext";
import { ReactNode } from "react";

import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <AuthProvider>
        <ThemeProvider>
          <ProgressProvider>{children}</ProgressProvider>
        </ThemeProvider>
      </AuthProvider>
    </SessionProvider>
  );
}
