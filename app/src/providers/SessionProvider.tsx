"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function NextAuthSessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
