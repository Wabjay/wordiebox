"use client"
import React from 'react'
import Hero from "@/src/component/home/hero"
import Games from "@/src/component/home/games"
import Points from "@/src/component/home/points"
import Leaderboard from "@/src/component/home/leaderboard"
import Learn from "@/src/component/home/learn"
import Footer from "@/src/component/home/footer"


const LandingPage = () => {
  return (
    <div className="">
      <Hero />
      <Games />
      <Points />
      <Leaderboard />
      <Learn />
      <Footer />
    </div>
  )
}

export default LandingPage