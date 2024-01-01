"use client"
import { State } from '@/src/stores/states';
import { store } from '@/src/stores/store'
import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive';

export default function BottomSection() {

    const {  correctWord, status, setStatus } = store()
    const { setVisibility, setShowText, setShowSuccess, setShowFail } = State()
    const isSmallScreen = useMediaQuery({ query: "(max-width: 1023px)" });

    const submit = () => {
      setStatus(false)
      status ? setShowSuccess(true) : setShowFail(true)
      };
  return (
    <div>
      <div
        onClick={submit}
        className={`mx-auto w-fit cursor-pointer flex justify-center items-center border-[#1C1C1C] border shadow-darkbox py-3 px-4 text-16 font-medium focus:outline-none bg-[#FC0] hover:bg-[#EDBA00]`}
      >
        Submit my answer
      </div>

      {isSmallScreen && (
        <div className="px-6 py-4 bg-white border border-[#1C1C1C] shadow-darkbox w-fit max-w-[462px] mx-auto mt-6">
          <p className="font-medium text-12 tablet:text-16 mb-2">
           Word-Number Index
          </p>
          <div
        onClick={()=> setShowText(true)}
        className={`mx-auto w-fit cursor-pointer flex justify-center items-center border-[#1C1C1C] border shadow-darkbox p-2 text-12 font-medium focus:outline-none bg-[#FFF5C4] `}
      >
       Check word number
      </div>
        </div>
      )}

      <p
        onClick={() => setVisibility(true)}
        className="my-[100px] text-[#636363] w-fit mx-auto text-12 font-medium"
      >
        How to play the game
      </p>
  </div>
  )
}
