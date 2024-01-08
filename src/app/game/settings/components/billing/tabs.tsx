"use client"
import React, { useState } from 'react'

export default function Tabs({selectTab}:{selectTab: any}) {

  const [active, setActive]= useState('payment')
  const tab =(tab: string)=>{
    selectTab(tab)
    setActive(tab)
  }

  return (
    <div className='mb-4'>
    <div className='flex'>
    <div onClick={()=>tab('payment')} className={`text-black border border-[#1C1C1C] ${active === "payment" ? "bg-[#FFED9D]" : "bg-white"} shadow-darkbox p-4 w-fit`}>
      <h2 className='text-16 font-medium'>Payment History</h2>
    </div>
    <div onClick={()=>tab('credit')} className={`text-black border border-[#1C1C1C] ${active === "credit" ? "bg-[#FFED9D]" : "bg-white"}  shadow-darkbox p-4 w-fit`}>
      <h2 className='text-16 font-medium'>Credit History</h2>
    </div>
    </div>
  </div>  )
}
