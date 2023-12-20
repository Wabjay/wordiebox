import React from 'react'
import Link from "next/link"

const Learn = () => {
    return (
        <div className='bg-[#1C1C1C] ' id='learn'>
            <div className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 xl:px-0 text-center py-[50px] tablet:py-[100px] laptop:pt-[100px]'>
                <div className='w-[288px] tablet:w-[524px] laptop:w-[815px] mx-auto'>
                    <p className=' text-[24px] leading-8 tracking-[0.96px] tablet:w-[380px] mx-auto tablet:text-[32px] font-bold  tablet:leading-[39px]  tablet:tracking-[-1px] text-[#FFF] mb-4'>Start improving your
                        vocabularies</p>
                    <p className=' w-[90%] mx-auto text-[16px] leading-[22px] text-[#FFF] mb-[40px] tablet:w-[500px] laptop:w-[620px] tablet:text-[20px] tablet:leading-[28px]'>Get started to learn more, improve your word history and start making big waves</p>
                    <Link smooth href='/#pricing'
                        className="bg-[#FC0] border-[#1C1C1C] border shadow-darkbox inline-flex items-center justify-center px-2 laptop:px-4 h-9 laptop:h-12 text-[#1C1C1C]  text-14 font-medium laptop:text-[16px] laptop:leading-[22px] focus:outline-none ">
                        Learn a new word with their meaning</Link>
                </div>
            </div>` `
        </div>
    )
}

export default Learn