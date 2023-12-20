import { ReactElement } from "react";

export default function Starter({play, how} : any) {


    const content : ReactElement = (
        <div className="text-center mt-[60px] tablet:mt-20 laptop:mt-[120px] desktop:mt-20">
          <p className="text-14 tablet:text-32 font-bold mb-4">Improve your word vocabulary</p>
          <p className="text-14 tablet:text-20 w-[85%] mx-auto text-[#636363] mb-10">Compete with your friends, guess word from numbers before the timer runs out.</p>
          <p  onClick={()=>play(true)} className="w-fit mx-auto bg-[#FC0] border-[#1C1C1C] border shadow-darkbox py-3 px-4 text-16 font-medium focus:outline-none mb-6">Learn a new word</p>
          <p  onClick={()=>how(true)} className="w-fit mx-auto bg-[#FFF5C4] border-[#1C1C1C] border shadow-darkbox py-3 px-4 text-16 font-medium focus:outline-none">How to play the game</p>
        </div>
      );
  return content
}
