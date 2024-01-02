import Landing from '@/src/component/navbars/Landing'
import { Metadata } from 'next'
import {tags} from "@/src/lib/tags"

export const metadata: Metadata = {
    title: 'Wordiebox - Guess words puzzles from numbers',
    description: 'Wordiebox is a puzzle word game to guess new words from its meaning, Fill in words based on number representation from the number index before  the time runs down. Compete with your friends to earn points and move top of the leaderboard in no time.',
    keywords: tags,
    icons: {
      icon: [
        {
          rel: 'icon',
          media: '(prefers-color-scheme: light)',
          url: './../../../public/Logo.svg',
          href: './../../../public/Logo.svg',
        },
        {
          rel: 'icon',
          media: '(prefers-color-scheme: dark)',
          url: './../../../public/Logo.svg',
          href: './../../../public/Logo.svg',
        },
      ],
    },
  }

  
export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Landing />
            <main>
                {children}
            </main>
        </>
    )
}