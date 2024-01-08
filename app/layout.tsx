import React from "react";
import type { Metadata } from "next";
import "./ui/reset.css";
import "./ui/globals.css";
import Header from "../app/components/header/pages";
import Footer from "../app/components/footer/pages";
import NextAuthSessionProvider from "./src/providers/SessionProvider";
import ThemeProvider from "./src/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Dactap",
  description: "Site d'aide à la frappe au clavier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="blue:bg-100 blue:text-blue-900 green:bg-100 green:text-green-900 red:bg-100 red:text-red-900 dark:bg-900 dark:text-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextAuthSessionProvider>
            <Header />
            {children}
            <Footer />
          </NextAuthSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
