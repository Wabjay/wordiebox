'use client'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import Hero from '../component/home/hero'
import Games from '../component/home/games'
import Points from '../component/home/points'
import Leaderboard from '../component/home/leaderboard'
import Learn from '../component/home/learn'
import Footer from '../component/home/footer'
import LandingNavbar from '../component/navbars/Landing'

export default function Home() {
const [logged, setLogged] = useState(false)
  if (logged) {
    redirect('/dashboard')
  }
  // redirect('/dashboard')

  return (
    <>
    <LandingNavbar />
    <main className="">
  <div className="">
      <Hero />
      <Games />
      <Points />
      <Leaderboard />
      <Learn />
      <Footer />
    </div>
    </main>
    </>
    
  )
}
