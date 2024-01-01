import React from 'react'

export default function Timer() {
  return (
    <div className='absolute right-0 top-0 laptop:top-48 laptop:right-[-50px] desktop:right-[-100px]'>
        <p className='font-semibold text-14 mb-2'>Timer</p>
        <p className='bg-[#FC0] border-[3px] border-[#1C1C1C] rounded-full w-[67px] h-[67px] flex justify-center items-center font-bold text-24'>20</p>
    </div>
  )
}
