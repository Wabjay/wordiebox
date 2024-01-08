"use client"
import CtaButton from '@/src/component/dashboard/ctaButton';
import { store } from "@/src/stores/store";
import { State } from "@/src/stores/states";

export default function Fail({data, closePopup}: {data:Game, closePopup: any}) {

  // const { setShowSuccess} = State();

  const display =()=>{
    closePopup(true)
  }
 
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-overlay fixed top-0 left-0 z-20">
    <div className="mx-4 p-6 bg-[#F8F7F1] border text-center border-[#1C1C1C] w-full max-w-[398px]">
    <div className="flex flex-col gap-6 text-[#1C1C1C]">
      <div>
        <h1 className="text-[#F64300] text-16 font-bold"><span className="text-32 font-comic">{data.point}</span> Points</h1>

    <p className='text-16 font-medium text-[#1C1C1C] text-center'>-1 of your Credit has been removed.</p>
      </div>
    

    <div className="px-[10px] py-4 bg-[#FFD2C2] border border-[#1C1C1C] shadow-darkbox w-fit max-w-[462px] mx-auto ">
        <p className="capitalize font-medium text-[#E03C00] text-12 tablet:text-14 laptop:text-16 mb-1 flex justify-center gap-2">
          <span className="">{data?.number.join(",")}</span>
       {' ---> '} <span className="">{data?.scrambled}</span></p>
      </div><div className="px-[10px] py-4 bg-[#C2FFD9] border border-[#1C1C1C] shadow-darkbox w-fit max-w-[462px] mx-auto ">
        <p className="font-medium text-[#007A2F] text-12 tablet:text-14 laptop:text-16 mb-1 flex justify-center gap-2">
          <span className="">{data?.number.join(",")}</span>
          {' ---> '} <span className="">{data.correct}</span></p>
      </div>
    <div className="px-[10px] py-4 bg-white border border-[#1C1C1C] shadow-darkbox w-full max-w-[462px] mx-auto min-h-[100px]">
        <h4 className="font-medium text-12 tablet:text-14 laptop:text-16 mb-1">
          Word meaning{" "}
        </h4>
        <p className="text-10 tablet:text-12 laptop:text-14">{data?.meaning}</p>
      </div>
      <p className='text-16 font-medium text-[#1C1C1C] text-center'>Played on {data.date}</p>

      {/* <CtaButton text='Play a new game'/> */}
      <button 
          onClick={display}
          className={`w-full cursor-pointer flex justify-center items-center text-[#1C1C1C] bg-[#FC0] border-[#1C1C1C] border shadow-darkbox py-2 px-2 text-sm font-medium focus:outline-none white hover:bg-[#EDBA00]}`}>
          Share with your friends </button>
    </div>
    </div>
    </div>
    )
  }