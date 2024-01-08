"use client"
import React, { useState } from 'react'

export default function Tabs({selectTab}:{selectTab: any}) {

  const [active, setActive]= useState('profile')
  const tab =(tab: string)=>{
    selectTab(tab)
    setActive(tab)
  }

  return (
    <div className='mb-4'>
    <h3 className='hidden laptop:block mb-6 text-32 font-bold text-[#1C1C1C]'>Settings</h3>

    <div className='flex'>
    <div onClick={()=>tab('profile')} className={`text-black border border-[#1C1C1C] ${active === "profile" ? "bg-[#FFED9D]" : "bg-white"} shadow-darkbox p-4 px-7 w-fit`}>
      <h2 className='text-16 font-medium'>Profile</h2>
    </div>
    <div onClick={()=>tab('billing')} className={`text-black border border-[#1C1C1C] ${active === "billing" ? "bg-[#FFED9D]" : "bg-white"}  shadow-darkbox p-4 px-7 w-fit`}>
      <h2 className='text-16 font-medium'>Billing</h2>
    </div>
    </div>

  </div>  )
}
