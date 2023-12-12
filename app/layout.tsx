import React from "react";
import type { Metadata } from "next";
import "./ui/reset.css";
import "./ui/globals.css";
import Header from "../app/components/header/pages";
import Footer from "../app/components/footer/pages";
import NextAuthSessionProvider from "./providers/SessionProvider";
import ThemeProvider from "@/app/src/theme/ThemeProvider";

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
      <body className="blue:bg-primary text-secondary green:bg-primary text-secondary red:bg-primary text-secondary dark:bg-primary">
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