import React from "react";
import Image from "next/image";
import Avatar from '@/public/assets/ProfileImg.svg'
import ProfileData from "./profileData";
export default function Profile() {

  return (
    <div className="border border-[#1C1C1C] p-2 tablet:px-4 tablet:py-6 laptop:px-8 laptop:py-20 w-full tablet:w-fit flex flex-col gap-10 laptop:flex-row laptop:gap-20">
      <div>
        <Image src={Avatar} alt="" className="w-25 h-25 rounded-full mb-4" />
        <button className="text-black border border-[#1C1C1C] bg-[#C2FFD9] shadow-darkbox p-2 px-3 w-fit relative" >
        <input type="file" name="profile picture" className="opacity-0 w-full absolute left-0"/>
        <p className="text-12 font-medium whitespace-nowrap">Upload Image</p>
        </button>
      </div>
      <ProfileData />
    </div>
  );
}
