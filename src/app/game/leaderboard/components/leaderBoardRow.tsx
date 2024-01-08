import React from "react";
import Image, { StaticImageData } from "next/image";
export default function LeaderBoardRow({
  dp,
  user,
  index
}: {
  dp: StaticImageData;
 user:User;
 index: number
}) {



  return (
    <div className="W-full flex justify-between items-center tablet:w-[528px] laptop:w-[727px] py-3 px-4 border-b border-b-[#2D2D2D]">
      <div className="flex items-center gap-3 w-fit">
<p className="text-12 font-semibold text-[#1C1C1C]">{index}</p>
        <Image
          src={dp}
          alt="profie picture / Avatar"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="text-12 tablet:text-14 font-medium text-[#1C1C1C]">@adiolatayo</p>
          <p className="text-[#636363] text-10 tablet:text-12">Adio olatayo</p>
        </div>
      </div>

      <div className="flex gap-2 w-fit items-center">
        <p
          className={`text-14 tablet:text-16 font-medium`}
        >
          
          {user.payload.gamePoint} points
        </p>
      
      </div>
    </div>
  );
}
