import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.password) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!isPasswordValid) {
          return null;
        }

        console.log(
          "Authorize - User fetched:",
          user.email,
          "MustChange:",
          user.mustChangePassword,
        );

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.avatar,
          role: user.role,
          mustChangePassword: user.mustChangePassword,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      console.log("Session Callback - Token:", token.mustChangePassword);
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.mustChangePassword = token.mustChangePassword as boolean;
      }
      return session;
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        console.log("JWT Callback - User:", user.mustChangePassword);
        token.id = user.id;
        token.role = user.role;
        token.mustChangePassword = user.mustChangePassword;
      }

      // Refresh data on update trigger (e.g. after password change)
      if (trigger === "update" && token.email) {
        const freshUser = await prisma.user.findUnique({
          where: { email: token.email },
        });
        if (freshUser) {
          token.mustChangePassword = freshUser.mustChangePassword;
          token.role = freshUser.role; // Sync role if changed
        }
      }

      return token;
    },
  },
  pages: {
    signIn: "/login", // Assuming logic page is at /login
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "supersecret", // Fallback for dev
};
