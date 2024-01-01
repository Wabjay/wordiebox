import { State } from '@/src/stores/states'
import React from 'react'

interface request {
    text: string, color?:string, style?:{}
}
export default function CtaButton ({text, color, style}:request ) {

    const {setVisibility, visible} = State()

    const display =()=>{
        setVisibility(false)
        console.log(visible)
        // how(true)
      }
        return (
          <div 
          onClick={display}
          className={`${style} w-full cursor-pointer flex justify-center items-center border-[#1C1C1C] border shadow-darkbox py-2 px-2 text-sm font-medium focus:outline-none w-fit ${color === "white" ? "hover:bg-white" : "bg-[#FC0] hover:bg-[#EDBA00]"}`}>
          {text} </div>
        )
      }
