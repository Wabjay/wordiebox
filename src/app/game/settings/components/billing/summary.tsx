import Image from 'next/image'
import React from 'react'

export default function Summary({credit, points}:{credit:number, points:number}) {

  const buymore =()=>{

  }

  return (
    <div className='mb-11'>
    <div className='flex flex-col gap-6 tablet:flex-row tablet:gap-8'>
    <div className='flex justify-between tablet:gap-25 text-black border border-[#1C1C1C] bg-white shadow-darkbox p-4 tablet:w-fit'>
      <div>
        <h2 className='text-48 font-bold'>{credit}</h2>
      <p className='text-12 laptop:text-14 leading-5 font-medium'>No of Credits</p> 
      </div>
     
      <div onClick={buymore} className={`text-black border border-[#1C1C1C] bg-[#FFDA34] shadow-darkbox p-2 w-fit h-fit`}>
      <h2 className='text-12 font-medium'>Buy more credits</h2>
    </div>
    </div>
    <div className='text-black border border-[#1C1C1C] bg-[#DFC3FF] shadow-darkbox p-4 tablet:w-[252px] laptop:w-[294px]'>
      <h2 className='text-48 font-bold'>{points}</h2>
      <p className='text-12 laptop:text-14 leading-5 font-medium'>Number of Points</p>
    </div>
    </div>

  </div>  )
}
