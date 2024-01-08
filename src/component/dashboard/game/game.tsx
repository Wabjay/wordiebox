"use client";
import { store } from "@/src/stores/store";
import { ReactElement, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Answer from "./answer";
import Timer from "../timer";
import BottomSection from "./bottomSection";
import { State } from "@/src/stores/states";
import Success from "../popup/success";
import Fail from "../popup/fail";
export default function Game() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1023px)" });

  const { data} = store();
  const { showFail, showSuccess} = State();

 

  const word = Array.from(data.number);

  const numbers: ReactElement = (
    <div className="mx-auto text-center w-fit flex gap-3 tablet:gap-4">
      {word.map((letter, index) => (
        <p
          key={index}
          className="capitalize p-2 flex-1 h-fit  max-h-8 my-4 laptop:max-w-11 laptop:max-h-11 border-[#1C1C1C] border shadow-darkbox flex items-center justify-center text-12 tablet:text-16 font-semibold"
        >
          {letter}
        </p>
      ))}
    </div>
  );

  return (
    <div className="relative text-center mt-[60px] tablet:mt-20 laptop:mt-[120px] desktop:mt-20 mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0">
      <h1 className="text-14 tablet:text-16 laptop:text-20 font-bold mb-4 mx-auto w-[250px] tablet:w-[300px] laptop:[320px]">
        Guess word for this number before timer runs out
      </h1>
      {numbers}
      <div className="px-[10px] py-4 bg-white border border-[#1C1C1C] shadow-darkbox w-full max-w-[462px] mx-auto min-h-[100px]">
        <h4 className="font-medium text-12 tablet:text-14 laptop:text-16 mb-1">
          Word meaning{" "}
        </h4>
        <p className="text-10 tablet:text-12 laptop:text-14">{data.meaning}</p>
      </div>
      <Answer length={word.length} />

{/* Button section */}
<div className={`relative  `}>
  
    <BottomSection />
{isSmallScreen && <Timer/>}
</div>
{!isSmallScreen && <Timer/>}
  
    {showSuccess && <Success />}
    {showFail && <Fail />}
    </div>
  );
}
