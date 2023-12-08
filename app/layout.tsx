import type { Metadata } from 'next'
import { signika } from '@/app/ui/fonts'
import ThemeProvider from './src/theme/ThemeProvider'
import ThemeToggler from './src/theme/ThemeToggler'
import clsx from 'clsx'
import './ui/reset.css'
import './ui/globals.css'

import Header from '@/app/components/header/pages'
import Footer from '@/app/components/footer/pages'

export const metadata: Metadata = {
  title: 'Dactap',
  description: "Site d'aide à la frappe au clavier",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let ezr = 'hello' // Voir pour inclure les pallettes de couleurs selon le theme voulu ! === state
  return (
    <html lang="en" className="h-full">
      <body
        className={clsx('dark:bg-gray-900 dark:text-gray-100', {
          'bg-blue-100 text-blue-900': ezr === 'hello',
          'bg-red-100 text-red-900': ezr === 'pend',
          'bg-violet-100 text-violet-900': ezr === 'violet',
        })}
      >
        <Header />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeToggler />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
