"use client"
import React, { useState } from 'react'
import Summary from './summary'
import Tabs from './tabs'
import Payments from './payments'
import Credit from './credit'

export default function Billing() {

  const [tab, setTab] = useState<string>('payment')

const selectTab=(tab: string)=>{
  setTab(tab)
}

  return (
    <div className='w-full'>
      <Summary credit={543} points={76} />
      <Tabs selectTab={selectTab} />

      {tab === "payment" ? <Payments /> : <Credit />}
    </div>
  )
}
