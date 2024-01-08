// import { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import PrismaAdapter from "@next-auth/prisma-adapter";
// // import { PrismaClient } from "./prisma/client";

// const prisma = new PrismaClient();

// export const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         username: { label: "Username" },
//         password: { label: "Password" },
//       },
//       async authorize(credentials, req) {
//         const people = await prisma.utilisateur_test.findFirst({
//           where: {
//             Mail: credentials?.username,
//             Mot_De_Passe: credentials?.password, // You should hash the password and compare it here
//           },
//         });

//         if (
//           people?.Mail !== credentials?.username ||
//           people?.Mot_De_Passe !== credentials?.password
//         ) {
//           throw new Error("invalid credentials");
//         }

//         return {
//           email: people?.Mail,
//         } as any;
//       },
//     }),
//   ],
//   adapter: PrismaAdapter({ prisma }),
// };
