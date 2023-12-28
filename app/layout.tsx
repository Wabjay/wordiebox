import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wordiebox',
  description: 'PixelGum Studio',
  keywords: 'Game, Word Game',
  icons: {
    icon: [
      {
        rel: 'icon',
        media: '(prefers-color-scheme: light)',
        url: '/public/Logo.svg',
        href: '/public/Logo.svg',
      },
      {
        rel: 'icon',
        media: '(prefers-color-scheme: dark)',
        url: '/public/Logo.svg',
        href: '/public/Logo.svg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`"w-full mx-auto mt-[60px] bg-[#F8F7F1] ${inter.className}`}>{children}</body>
      <GoogleAnalytics />
      </html>
  )
}
