/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useState } from 'react'
import copyIcon from '@/public/assets/copy.svg'
import Image from 'next/image'
export default function page() {
const [email, setEmail] = useState<string>('wordiebox.com/refferal-link')


  const copy =()=>{

  }

  return (
    <div className='flex justify-center pt-6'>
      <div>
        <h3 className='hidden laptop:block mb-6 text-32 font-bold text-[#1C1C1C]'>Referrals</h3>

        <div className='flex flex-col gap-6 tablet:flex-row tablet:gap-8'>
        <div className='text-black border border-[#1C1C1C] bg-[#FFED9D] shadow-darkbox p-4 tablet:w-[252px] laptop:w-[294px]'>
          <h2 className='text-48 font-bold'>21</h2>
          <p className='text-12 laptop:text-14 leading-5 font-medium'>Number of Referrals</p>
        </div>
        <div className='text-black border border-[#1C1C1C] bg-[#C2FFD9] shadow-darkbox p-4 tablet:w-[252px] laptop:w-[294px]'>
          <h2 className='text-48 font-bold'>11</h2>
          <p className='text-12 laptop:text-14 leading-5 font-medium'>Number of Referrals that signed up</p>
        </div>
        </div>
      <p className='mt-10 text-14 font-normal text-[#1C1C1C] mb-2'>Your referral link</p>
        <div className="flex flex-col gap-2 tablet:flex-row tablet:h-12 text-sm tablet:text-[16px] leading-5 tablet:leading-[22px]">
              <input disabled type="text" name="email" placeholder='Enter email address' value={email} onChange={(e) => setEmail(e.target.value)} className={`px-3 py-2 outline-none h-fit w-full max-w-[350px] bg-transparent border-[#1C1C1C] border shadow-darkbox`} />
              <button onClick={copy} className='flex items-center justify-center px-3 py-2 outline-none h-10 w-[138px] whitespace-nowrap bg-transparent border-[#1C1C1C] border shadow-darkbox'>
                <Image src={copyIcon} alt='Copy button Icon' className='w-[11.267px] h-[10.933px]'/>
                <p className='text-12 font-medium text-[#1C1C1C] '>Copy referral link</p>
                </button>
            </div>
      </div>
    </div>
  )
}
