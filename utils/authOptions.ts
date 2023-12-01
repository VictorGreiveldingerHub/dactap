import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from '@/prisma/client';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username" },
        password: { label: "Password" },
      },
      async authorize(credentials, req) {
        
        const people = await prisma.utilisateur_test.findFirst({
          where: {
            Mail: credentials?.username,
            Mot_De_Passe: credentials?.password, // You should hash the password and compare it here
          }
        });

        console.log(people?.Mail)

        if (people?.Mail !== credentials?.username || people?.Mot_De_Passe !== credentials?.password) {
          throw new Error('invalid credentials');
        }

        return {
          email: people?.Mail
        } as any;
      }
      /*authorize(credentials, req) {

        if (credentials?.username === "admin@example.com" && credentials.password === "admin") {
          return {
            id: "1",
            email: "admin@example.com",
          };
        }

        return null;
      },*/
    }),
  ],
};