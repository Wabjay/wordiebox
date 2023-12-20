"use client"
import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Logo from '@/public/Logo.svg'
import Hambugger from '@/public/assets/hambugger.png'
import Close from '@/public/assets/cancel.svg'

const LandingNavbar = () => {
    const [visibility, setVisibility] = useState(false)
    const isSmallScreen = useMediaQuery({ query: '(max-width: 1023px)' })


    const toggleNavbar = () => {
        visibility ? setVisibility(false) : setVisibility(true)
    }

    return (
        <header className=" w-full bg-[#F8F7F1] border-b border-b-[#8B8B8B] px-4 tablet:px-6 laptop:px-8 xl:px-0 fixed top-0 z-20">
            <nav className="sticky top-0 z-10  block items-center  h-[40px] my-[10px]">
                <div
                    className="flex flex-wrap place-self-center items-center justify-between  w-full laptop:max-w-[1152px] mx-auto">
                    <Link href='/home' className="flex items-center" onClick={() => setVisibility(false)}>
                        <Image src={Logo} width="119" height="37" className="w-[119px] h-[37px] mr-3"
                            alt="Game Logo" />
                    </Link>
                    <div className="flex items-center laptop:order-1">
                        {
                            isSmallScreen ? <>
                                {!visibility && <Image src={Hambugger} width="24" height="24" className="w-6" alt="Hambugger Icon" onClick={toggleNavbar} />}

                                {visibility &&
                                    <div className='fixed top-[60px] left-0 h-full max-h-[550px] bg-[#F8F7F1] w-[256px] p-4 border-t border-t-[#8B8B8B]'>
                                        <Image src={Close} width="24" height="24" className="w-6 mr-0 ml-auto fixed left-[208px] top-4" alt="Hambugger Icon" onClick={toggleNavbar} />


                                        <ul className="flex flex-col font-medium gap-2">
                                            <Link smooth href="/auth/signIn" onClick={toggleNavbar}
                                                className="hover:bg-white hover:border-[#1C1C1C] hover:border hover:shadow-darkbox py-2 px-2 text-sm font-medium focus:outline-none ">
                                                Sign In</Link>
                                            <Link smooth href="/#pricing" onClick={toggleNavbar}
                                                className="hover:bg-[#FC0] hover:border-[#1C1C1C] hover:border hover:shadow-darkbox py-2 px-2 text-sm font-medium focus:outline-none ">
                                                Create Account</Link>
                                        </ul>

                                    </div>}
                            </>
                                :
                                <div className="flex font-medium flex-row items-center gap-[50px] desktop:gap-[134px]">

                                    <ul className="flex font-medium flex-row items-center gap-6 desktop:gap-9">
                                        <li className=""> <Link smooth href='/home#game' className="text-[##636363] text-[14px] font-medium">How our game works</Link> </li>
                                        <li className=""> <Link smooth href='/home#points' className="text-[##636363] text-[14px] font-medium">Point and credit Rewards</Link> </li>
                                        <li className="">  <Link href='/home#leaderboard' className="text-[##636363] text-[14px] font-medium">Leaderboard System</Link> </li>
                                    </ul>
                                    <div className="flex font-medium flex-row items-center gap-4">
                                        <Link smooth href="/auth/signIn"
                                            className="bg-white border-[#1C1C1C] border shadow-darkbox py-2 px-4 text-sm font-medium focus:outline-none ">
                                            Sign In</Link>
                                        <Link smooth href="/#pricing"
                                            className="bg-[#FC0] border-[#1C1C1C] border shadow-darkbox py-2 px-4 text-sm font-medium focus:outline-none ">
                                            Create Account</Link>
                                    </div>


                                </div>
                        }
                    </div>
                </div>
            </nav>
        </header>


    )
}

export default LandingNavbar