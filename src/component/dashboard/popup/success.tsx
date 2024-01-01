import { text } from "stream/consumers"
import CtaButton from '../ctaButton';
import { store } from "@/src/stores/store";
import { State } from "@/src/stores/states";


export default function Success() {
  const { data} = store();
  const { setShowSuccess} = State();

  const display =()=>{
    setShowSuccess(false)
  }
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-overlay fixed top-0 left-0 z-20">
    <div className="mx-4 p-6 bg-[#F8F7F1] border text-center border-[#1C1C1C] w-full max-w-[398px]">
    <div className="flex flex-col gap-6 text-[#1C1C1C] text-center">
    <p className="text-[#007A2F] text-24 font-bold"><span className="text-32 font-comic pr-2">+1</span>Point</p>
      
    <div className="px-[10px] py-4 bg-[#C2FFD9] border border-[#1C1C1C] shadow-darkbox w-full max-w-[462px] mx-auto ">
        <p className="capitalize font-medium text-[#007A2F] text-12 tablet:text-14 laptop:text-16 mb-1 flex justify-center gap-2">
          <span className="">{data.number}</span>
        ---> <span className="">{data.scrambled}</span></p>
      </div>
    <div className="px-[10px] py-4 bg-white border border-[#1C1C1C] shadow-darkbox w-full max-w-[462px] mx-auto min-h-[100px]">
        <p className="font-medium text-12 tablet:text-14 laptop:text-16 mb-1">
          Word meaning{" "}
        </p>
        <p className="text-10 tablet:text-12 laptop:text-14">{data.meaning}</p>
      </div>

      <div 
          onClick={display}
          className={`w-full cursor-pointer flex justify-center items-center border-[#1C1C1C] border shadow-darkbox py-2 px-2 text-sm font-medium focus:outline-none bg-[#FC0] hover:bg-[#EDBA00]`}>
          Play a new game </div>
      <CtaButton text=''/>
    </div>
    </div>
    </div>
    )
}
