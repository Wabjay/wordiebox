"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from './Buttons/Button'
import Popup from './Popup'
import HeroImage from '@/public/assets/Hero.png'
import axios from '@/src/lib/axios'
const Hero = () => {

  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const send = () => {
    if (email.match(emailRegex)){
   ( email !== "" && !error) &&
      axios.post('https://word-game-dic.cyclic.app/api/waitlist/join', { email })
        .then(response => {
          // Handle the successful response
          setStatus("success"),
          setShow(true)

        })
        .catch(error => {
          // Handle errors
          // console.log('Error:', error.response.data.message);
          if (error.response.data.message.includes("exists")){
          setStatus("used"),
          setShow(true)
          }
          if (error.response.data.message.includes("Failed")){
            setStatus("fail"),
            setShow(true)
            }
        });
  } else{
    setError(true)
  }
  }

  useEffect(()=>{

    if(email === ""){
      setError(false)
    } 
    else if (email.match(emailRegex)){
      setError(false)
    }
      else if(!email.match(emailRegex)) {
        setError(true)
      } else {
        setError(false)
      }
  }, [email, error])


  const close = (res) => {
    setShow(res)
    setEmail("")
  }


  return (
    <div className='w-full bg-[#F8F7F1]' id='hero'>
      <div className='w-full laptop:max-w-[1152px] px-4 tablet:px-6 laptop:px-8 desktop:px-0 mx-auto py-[50px] tablet:py-[80px] laptop:py-[100px]'>
        <div className="flex flex-col gap-[50px] tablet:gap-20 laptop:flex-row laptop:items-center laptop:gap-6 desktop:gap-11">

          <div className="laptop:w-[560px]">
            <div className="flex flex-col gap-4 tablet:gap-6">
              <h1 className="text-[#1C1C1C] font-bold text-32 tablet:text-48">Improve your word vocabulary by guessing words</h1>
              <p className="text-[#1C1C1C] font-normal text-16 tablet:text-24">Compete with your friends, guess word from numbers before the timer runs out.</p>
            </div>

            <div className="mt-10 flex flex-col gap-4 tablet:flex-row tablet:h-12 text-sm tablet:text-[16px] leading-5 tablet:leading-[22px]">
              <Button text={<input type="email" name="email" placeholder='Enter email address' value={email} onChange={(e) => setEmail(e.target.value)} className={`outline-none h-fit w-full bg-transparent `} />} color="white" style={`bg-white w-full justify-start ${error &&  'border-[#E03C00] "'}`} />
              <p onClick={send}><Button text='Join our waitlist' style='w-full tablet:w-fit whitespace-nowrap tablet:py-3 tablet:px-4' /></p>
            </div>
          </div>

          <div className="w-full laptop:w-[390px] desktop:w-[569px] relative">
            <Image src={HeroImage} alt='Hero' className='' />
          </div>
        </div>
        <Popup visible={show} updateView={close} status={status} email={email} />
      </div>
    </div>)
}

export default Hero

