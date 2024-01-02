import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wordiebox - Guess words puzzles from numbers',
  description: 'Wordiebox is a puzzle word game to guess new words from its meaning, Fill in words based on number representation from the number index before  the time runs down. Compete with your friends to earn points and move top of the leaderboard in no time.',
  keywords: 'Game, Wordle Game, Guess Word,Guessing',
  icons: {
    icon: [
      {
        rel: 'icon',
        media: '(prefers-color-scheme: light)',
        url: '/icon.png',
        href: '/icon.png',
      },
      {
        rel: 'icon',
        media: '(prefers-color-scheme: dark)',
        url: '/icon.png',
        href: '/icon.png',
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://wordiebox.com",
    title: "Wordiebox - Guess words puzzles from numbers",
    description: "Wordiebox is a puzzle word game to guess new words from its meaning, Fill in words based on number representation from the number index before  the time runs down. Compete with your friends to earn points and move top of the leaderboard in no time.",
    siteName: "Wordiebox",
    images: [{
      url: "https://wordiebox.com/icon.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://wordiebox.com",
    images: "https://wordiebox.com/icon.png",
    title: "Wordiebox - Guess words puzzles from numbers",
    description: "Wordiebox is a puzzle word game to guess new words from its meaning, Fill in words based on number representation from the number index before  the time runs down. Compete with your friends to earn points and move top of the leaderboard in no time."
  }
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
