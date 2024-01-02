import Dashboard from '@/src/component/navbars/Dashboard'
import { Metadata } from 'next'


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
        }
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
        site: "Wordiebox",
        images: "https://wordiebox.com/icon.png",
        title: "Wordiebox - Guess words puzzles from numbers",
        description: "Wordiebox is a puzzle word game to guess new words from its meaning, Fill in words based on number representation from the number index before  the time runs down. Compete with your friends to earn points and move top of the leaderboard in no time."
      }
  }
  
export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Dashboard />
            <main className='w-full laptop:max-w-[1152px] mx-auto h-[100vh]'>
                {children}
            </main>
        </>
    )
}