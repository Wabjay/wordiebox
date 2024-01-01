"use client"
import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { usePathname } from "next/navigation"
import Logo from '/public/Logo.svg'
import Hambugger from '/public/hambugger.svg'
import Close from '@/public/assets/cancel.svg'

import Dash from '/public/assets/dash/dash.svg'
import Referrals from '/public/assets/dash/referrals.svg'
import History from '/public/assets/dash/history.svg'
import Leaderboard from '/public/assets/dash/leaderboard.svg'
import Settings from '/public/assets/dash/settings.svg'
import Profile from '/public/assets/dash/profile.svg'
import Open from '/public/assets/dash/open.svg'
import Dots from '/public/assets/dash/dot.svg'
import Logout from '/public/assets/dash/logout.svg'
import User from '/public/assets/dash/user-icon.svg'
const DashboardNavbar = () => {
    const [visibility, setVisibility] = useState(false)
    const [pop, setPop] = useState(false)
    const isSmallScreen = useMediaQuery({ query: '(max-width: 1023px)' })
const pathname = usePathname().split('/').pop()
// console.log(pathname)
    const toggleNavbar = () => {
        visibility ? setVisibility(false) : setVisibility(true)
    }
    const togglePopup = () => {
        pop ? setPop(false) : setPop(true)
        
    }
    const Menus = [
        { title: "Dashboard", src: Dash, link: '/game' },
        { title: "Referrals", src: Referrals, link: '/game/referrals'},
        { title: "Word history", src: History, link: '/game/word-history' },
        { title: "Leaderboard", src: Leaderboard, link: '/game/leaderboard' },
        { title: "Settings", src: Settings, link: '/game/settings' },
      ];

      const balance = (
        <div className="flex font-medium flex-row items-center gap-3">
        <Link smooth href="/#pricing"
            className="bg-white border-[#1C1C1C] border shadow-darkbox p-2 text-12 font-semibold focus:outline-none flex gap-1">50
            <span className="font-normal">credits</span></Link>
        <Link smooth href="/#pricing"
            className="bg-white border-[#1C1C1C] border shadow-darkbox p-2 text-12 font-semibold focus:outline-none flex gap-1">2000
            <span className="font-normal">pts</span></Link>

    </div>
    )

    const profile = (
        <div className="flex flex-row font-medium items-center justify-between laptop:justify-normal laptop:gap-2">
            <div className="flex flex-row font-medium items-center gap-2">
               <Image src={Profile} alt="" className="w-9 h-9 laptop:order-1" />
        <p className="py-2 px-0 text-12 font-semibold">Awo bangalee</p> 
            </div>
            <Image src={isSmallScreen ? Dots : Open} alt="" className="w-5 h-5 " onClick={togglePopup}/>


    </div>
    )


    const popup = (
        pop &&
             <div className={`mb-4 tablet:ml-[150px] w-[205px] laptop:absolute laptop:ml-[-48px] laptop:mb-0 laptop:top-[60px] flex flex-col gap-2 text-[##636363] px-4 py-2 bg-white border-[#1C1C1C] border shadow-darkbox focus:outline-none`}>
            <Link smooth href='/' onClick={toggleNavbar} className="flex items-center gap-2 py-1">
                <Image src={User} alt="" className="w-4 h-4 desktop:w-5 desktop:h-5" />
                <span>Profile</span></Link>
                <Link smooth href='/' onClick={toggleNavbar} className="flex items-center gap-2 py-1">
                <Image src={Logout} alt="" className="w-4 h-4 desktop:w-5 desktop:h-5" />
                <span>Logout</span></Link>
        </div>
       
    )
    return (
        <header className=" w-full bg-[#F8F7F1] border-b border-b-[#8B8B8B] px-4 tablet:px-6 laptop:px-8 xl:px-0 fixed top-0 z-20">
            <nav className="sticky top-0 z-10  flex items-center  h-[60px]">
            <div
                    className="flex flex-wrap place-self-center items-center justify-between  w-full laptop:max-w-[1152px] mx-auto">
                {isSmallScreen && <div className="flex gap-4 tablet:w-[256px]">
                <Image src={Hambugger} width="24" height="24" className="w-6" alt="Hambugger Icon" onClick={toggleNavbar} />
                <Link href='/' className="flex items-center" onClick={() => setVisibility(false)}>
            <p className="text-14 font-semibold tablet:text-20 tablet:font-bold capitalize">{pathname}</p>
                    </Link>
                </div>  }
                {!isSmallScreen &&
                <Link href='/home' className="flex items-center" onClick={() => setVisibility(false)}>
                        <Image src={Logo} width="119" height="37" className="w-[119px] h-[37px] mr-3"
                            alt="Game Logo" />
                    </Link>}
                
                         <div className="flex items-center laptop:order-1">
                        {
                            isSmallScreen ? <>
                              
                                {visibility &&
                                    <div className='fixed top-0 left-0 h-full max-h-[610px] bg-[#F8F7F1] w-[256px]'>
                                        <div className=' h-[61px] bg-[#F8F7F1] w-[256px] px-4 mb-3 border-b border-b-[#8B8B8B] flex justify-between items-center'>
                                            <p className="text-14 font-semibold tablet:text-20 tablet:font-bold capitalize">{pathname}</p>
                                            <Image src={Close} width="24" height="24" className="w-6 mr-0 ml-auto fixed left-[208px] top-4" alt="Hambugger Icon" onClick={toggleNavbar} />

                                        </div>
                                        <div className="flex flex-col justify-between h-[528px] px-4">
                                            <ul className="flex flex-col font-medium gap-2">
                                        {Menus.map((menu, index) =>(
                                                <li key={index}>
                                            <Link smooth href={menu.link}  onClick={toggleNavbar} className={`text-[##636363] flex items-center p-2 desktop:p-2 gap-1 hover:bg-white hover:border hover:border-[#1C1C1C] hover:shadow-darkbox focus:outline-none ${pathname === menu.title.toLowerCase() && "bg-white border-[#1C1C1C] border shadow-darkbox"}`}>
                                                <Image src={menu.src} alt="" className="w-4 h-4 desktop:w-5 desktop:h-5" />
                                                <span>{menu.title}</span></Link>
                                        </li>
                                            ))}
                                        </ul>
<div>
    {popup}
    {profile}
</div>
                                        
                                        </div>
                                        

                                    </div>}
                                   
                            </>
                                :
                                <div className="flex font-medium flex-row items-center gap-3 desktop:gap-6">

                                    <ul className="flex flex-row items-center gap-2 font-medium text-12 desktop:text-sm">
                                       
                                            {Menus.map((menu, index) =>(
                                                <li key={index}>
                                            <Link smooth href={menu.link} className={`text-[##636363] flex items-center py-2 px-1 desktop:p-2 gap-1 hover:bg-[#FFF5C4] hover:border-[#1C1C1C] hover:border hover:shadow-darkbox focus:outline-none ${pathname === menu.title.toLowerCase() && "bg-[#FFF5C4] border-[#1C1C1C] border shadow-darkbox"}`}>
                                                <Image src={menu.src} alt="" className="w-4 h-4 desktop:w-5 desktop:h-5" />
                                                <span>{menu.title}</span></Link>
                                        </li>
                                            ))}
                                    </ul>

                                  {balance}

                                    <div className=" ">
                                    {profile}
                                        {popup}
                                    </div>


                                </div>
                        }
                    </div>
                   
                   
                </div>
               {isSmallScreen && balance}
            </nav>
        </header>


    )
}

export default DashboardNavbar