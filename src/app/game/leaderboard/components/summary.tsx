import Image from 'next/image'
import React from 'react'

export default function Summary({points, leaderboard}:{points:number, leaderboard:string}) {
  return (
    <div className='mb-11'>
    <h3 className='hidden laptop:block mb-6 text-32 font-bold text-[#1C1C1C]'>Leaderboard</h3>

    <div className='flex flex-col gap-6 tablet:flex-row tablet:gap-8'>
    <div className='text-black border border-[#1C1C1C] bg-[#FFED9D] shadow-darkbox p-4 tablet:w-[252px] laptop:w-[294px]'>
      <h2 className='text-48 font-bold'>{points}</h2>
      <p className='text-12 laptop:text-14 leading-5 font-medium'>Number of Points</p>
    </div>
    <div className='text-black border border-[#1C1C1C] bg-[#C2FFD9] shadow-darkbox p-4 tablet:w-[252px] laptop:w-[294px]'>
      <h2 className='text-48 font-bold'>{leaderboard}</h2>
      <p className='text-12 laptop:text-14 leading-5 font-medium'>On the leaderboard</p>
    </div>
    </div>

  </div>  )
}
