import type { Metadata } from 'next';
import { signika } from '@/app/ui/fonts';
import ThemeProvider from './src/theme/ThemeProvider';
import ThemeToggler from './src/theme/ThemeToggler';
import clsx from 'clsx';
import './ui/reset.css';
import './ui/globals.css';

import Header from "@/app/components/header/pages";
import Footer from "@/app/components/footer/pages";


export const metadata: Metadata = {
  title: 'Dactap',
  description: 'Site d\'aide à la frappe au clavier',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className=" container bg-blue-bg text-blue-at">
          <Header />
        <ThemeProvider attribute="class">
          <ThemeToggler />
          {children}
        </ThemeProvider>
          <Footer />
      </body>
    </html>
  );
};