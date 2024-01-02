import React from 'react'
import LeaderboardImage from '@/public/assets/Leaderboard.png'
import Image from 'next/image'

const Leaderboard = () => {
  return (
    <div className='w-full bg-[#FBF4EE]' id='leaderboard'>
    <div className='w-full laptop:max-w-[1152px] px-4 tablet:px-6 laptop:px-8 desktop:px-0 mx-auto py-[50px] tablet:py-[80px] laptop:py-[100px]'>
    <div className="flex flex-col gap-[50px] tablet:gap-20 laptop:flex-row  laptop:justify-between laptop:items-center">
   

         <div className="laptop:w-[490px]">
           <div className="flex flex-col gap-4 tablet:gap-6">
           <p className="text-[#1C1C1C] font-bold text-20 tablet:text-24 laptop:text-32 whitespace-nowrap">Leaderboard system</p>
           <p className="text-[#1C1C1C] font-normal text-16 tablet:text-20 ">Compete with your friends from around the world learning more vocabularies, increase your reputation and win wonderful prizes.</p>
           </div>
         </div>
         <div className=" w-full laptop:w-[387px] desktop:w-[440px] relative">
           <Image src={LeaderboardImage}  alt='Leaderboard' />
         </div>
       
       </div>
       
  </div>
        </div>
  )
}

export default Leaderboard