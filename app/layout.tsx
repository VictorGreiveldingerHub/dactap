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
  let ezr = "pend"; // Voir pour inclure les pallettes de couleurs selon le theme voulu ! === state
  return (
    <html lang="en" className="h-full">
      <body className={clsx("container dark:bg-gray-900 dark:text-gray-100", {
        "bg-blue-50 text-blue-950" : ezr === "hello", 
        "bg-red-100 text-red-900" : ezr === "pend",
        "bg-violet-100 text-violet-900": ezr === "violet"
        })}>
        <svg width="762" height="270" viewBox="0 0 762 270" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M762 0H0V227.5C0 227.5 53.9172 203.5 199 203.5C344.083 203.5 510.805 269.5 586.5 269.5C662.195 269.5 762 165.5 762 165.5V0Z" fill="transparent" className={clsx("container dark:bg-gray-900 dark:text-gray-100", {
        "bg-blue-50 text-blue-950" : ezr === "hello", 
        "bg-red-100 text-red-900" : ezr === "pend",
        "bg-violet-100 text-violet-900": ezr === "violet"
        })}/>
          <path d="M762 0H0V227.5C0 227.5 109.672 178.584 227 182.5C344.328 186.416 431.5 232.5 543 227.5C654.5 222.5 762 165.554 762 165.554V0Z" fill="transparent" className={clsx("container dark:bg-gray-900 dark:text-gray-100", {
        "bg-blue-50 text-blue-950" : ezr === "hello", 
        "bg-red-100 text-red-900" : ezr === "pend",
        "bg-violet-100 text-violet-900": ezr === "violet"
        })}/>
        </svg>
        <Header />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeToggler />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
};