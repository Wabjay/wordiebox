import React from 'react'

export default function LetterAndNumber() {


    const letters = [
        {letter: "A", number: 1},
        {letter: "B", number: 2},
        {letter: "C", number: 3},
        {letter: "D", number: 4},
        {letter: "E", number: 5},
        {letter: "F", number: 6},
        {letter: "G", number: 7},
        {letter: "H", number: 8},
        {letter: "I", number: 9},
        {letter: "J", number: 10},
        {letter: "K", number: 11},
        {letter: "L", number: 12},
        {letter: "M", number: 13},
        {letter: "N", number: 14},
        {letter: "O", number: 15},
        {letter: "P", number: 16},
        {letter: "Q", number: 17},
        {letter: "R", number: 18},
        {letter: "S", number: 19},
        {letter: "T", number: 20},
        {letter: "U", number: 21},
        {letter: "V", number: 22},
        {letter: "W", number: 23},
        {letter: "X", number: 24},
        {letter: "Y", number: 25},
        {letter: "Z", number: 26}
    ]
  return (
    <div className='mx-auto px-8 py-6 laptop:mx-0 laptop:border-l laptop:border-l-[#8B8B8B] h-[100vh] '>
        <p className='text-16 font-semibold laptop:text-24 lapop:font-bold mb-4'>Word-Number Index</p>
         <div className='grid grid-cols-4 gap-6 laptop:gap-4 w-fit'>
        {letters.map(letter =>(
             <div key={letter.number} className='flex w-fit bg-white border-[#1C1C1C] border shadow-darkbox'>
            <p className='w-6 h-6 laptop:w-8 laptop:h-8 flex items-center justify-center text-12 laptop:text-[14px] laptop:leading-5 font-semibold'>{letter.letter}</p>
            <p className='w-6 h-6 laptop:w-8 laptop:h-8 border-l-[#1C1C1C] border-l flex items-center justify-center text-12 laptop:text-[14px] laptop:leading-5 font-semibold'>{letter.number}</p>
        </div>
        ))}
       
    </div>
    </div>
   
  )
}
