"use client"
import React, { useState } from 'react'
import Tabs from './components/tabs'
import Profile from './components/profile/profile'
import Billing from './components/billing/billing'

export default function page() {
// eslint-disable-next-line react-hooks/rules-of-hooks
const [tab, setTab] = useState<string>('profile')

const selectTab=(tab: string)=>{
  setTab(tab)
}

  return (
    <div className="flex justify-center pt-6 px-4 tablet:px-6">
      <div className='w-full'>
      <Tabs selectTab={selectTab}/>
      {tab === "profile" ? 
    <Profile /> : <Billing />}
    </div>
    </div>
  )
}