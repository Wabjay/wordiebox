"use client"
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Share from "@/public/share.svg";
import View from "@/public/view.svg";
import Fail from "./fail";
import Success from "./success";
export default function HistoryRow({
  dp,
  game,
}: {
  dp: StaticImageData;
 game:Game;
}) {
    const [status, setStatus] = useState('')

const open = (status:boolean) => void(
!status &&  setStatus('fail'),
status && setStatus('pass')
)
const close = (res: boolean) => void(
    res && setStatus('')
    )

  return (
    <div className="W-full flex justify-between items-center tablet:w-[528px] laptop:w-[727px] py-3 px-4 border-b border-b-[#2D2D2D] ">
      <div className="flex gap-3 w-fit">
        <Image
          src={dp}
          alt="profie picture / Avatar"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="text-12 tablet:text-14 font-medium text-[#1C1C1C]">
            <span>{game.number}</span>
            {" --> "}
            <span>{game.correct}</span>
          </p>
          <p className="text-[#636363] text-10 tablet:text-12">{game.date}</p>
        </div>
      </div>

      <div className="flex gap-2 w-fit items-center">
        <p
          className={`text-14 tablet:text-16 font-medium ${
            game.status ? "text-[#00A33F]" : "text-[#B83100]"
          }`}
        >
          {game.status && "+"}
          {game.point} points
        </p>
        <div className="flex gap-3 w-fit">
          <Image
            src={Share}
            alt="profie picture / Avatar"
            className="w-[30px] h-[30px] rounded-full"
          />
        
          <Image
            src={View}
            alt="profie picture / Avatar"
            className="w-[30px] h-[30px] rounded-full cursor-pointer"
            onClick={()=> open(game.status)}
            suppressHydrationWarning
          />

{status === "fail" &&  <Fail data={game} closePopup={close}/>}
 {status === "pass" && <Success data={game} closePopup={close}/>}

        </div>
      </div>
    </div>
  );
}
