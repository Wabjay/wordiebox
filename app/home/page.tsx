"use client"
import React from 'react'
import Hero from "./components/hero"
import Games from "./components/games"
import Points from "./components/points"
import Leaderboard from "./components/leaderboard"
import Learn from "./components/learn"
import Footer from "./components/footer"


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