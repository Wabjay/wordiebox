"use client"
import { useState } from 'react'
import Image from 'next/image'
import Button from './Buttons/Button'
import HeroImage from '@/public/assets/Hero.png'
import axios from '@/lib/axios'
const Hero = () => {

  const [email, setEmail] = useState('')

  const send = () => {
    email !== "" &&
    axios.post('https://word-game-dic.cyclic.app/api/waitlist/join', {email})
  .then(response => {
    // Handle the successful response
    console.log('Response:', response.data);
    setEmail("")
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
    setEmail("")
  });
  }
  // 
  return (
    <div className='w-full bg-[#F8F7F1]' id='hero'>
      <div className='w-full laptop:max-w-[1152px] px-4 tablet:px-6 laptop:px-8 desktop:px-0 mx-auto py-[50px] tablet:py-[80px] laptop:py-[100px]'>
        <div className="flex flex-col gap-[50px] tablet:gap-20 laptop:flex-row laptop:items-center laptop:gap-6 desktop:gap-11">
         
          <div className="laptop:w-[560px]">
            <div className="flex flex-col gap-4 tablet:gap-6">
            <p className="text-[#1C1C1C] font-bold text-32 tablet:text-48">Improve your word vocabulary by guessing words</p>
            <p className="text-[#1C1C1C] font-normal text-16 tablet:text-24">Compete with your friends, guess word from numbers before the timer runs out.</p>
            </div>

            <div className="mt-10 flex flex-col gap-4 tablet:flex-row tablet:h-12 text-sm tablet:text-[16px] leading-5 tablet:leading-[22px]">
              <Button text={<input type="text" name="email" placeholder='Enter email address' value={email} onChange={(e)=> setEmail(e.target.value)} className="outline-none h-fit w-full"/>} color="white" style={'bg-white w-full justify-start'} />
              <p onClick={send}><Button text='Join our waitlist' style='w-full tablet:w-fit whitespace-nowrap tablet:py-3 tablet:px-4' /></p>
            </div>
          </div>

          <div className="">
            <Image src={HeroImage} alt='Hero' className='w-full laptop:w-[390px] desktop:w-[569px]'/>
          </div>
        </div>
        
      </div>
    </div>)
}

export default Hero

