import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Game App',
  description: 'PixelGum Studio',
  keywords: 'Game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`"w-full mx-auto mt-[60px] bg-[#F8F7F1] ${inter.className}`}>{children}</body>
    
      </html>
  )
}
