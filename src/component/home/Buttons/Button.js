import React from 'react'

const Button = ({text, color, style}) => {
  return (
    <button 
    className={`${style} cursor-pointer flex justify-center items-center border-[#1C1C1C] border shadow-darkbox py-2 px-2 text-sm font-medium focus:outline-none w-fit ${color === "white" ? "hover:bg-white" : color === "green" ? "" : "bg-[#FC0] hover:bg-[#EDBA00]"}`}>
    {text} </button>
  )
}

export default Button