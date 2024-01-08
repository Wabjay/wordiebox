import React from "react";
import HistoryRow from "./components/historyRow";
import Icon from "@/public/icon.png";
import Fail from "./components/fail";
import Success from "./components/success";

export default function page() {
  const games: Game[] = [
    {
      number: [2, 15, 25],
      scrambled: "ybo",
      correct: "boy",
      date: "20th Apr,2023",
      status: true,
      point: 4,
      meaning:
        "A male gender",
    },
    {
      number: [4, 1, 14, 8],
      scrambled: "danh",
      correct: "hane",
      date: "20th Apr,2023",
      status: false,
      point: 0,
      meaning:
        "an illness, injury, or condition that makes it difficult for someone to do some things that other people do, and that is usually permanent or lasts for a long time.",
    },
    {
      number: [4, 1, 14, 8],
      scrambled: "danh",
      correct: "hand",
      date: "20th Apr,2023",
      status: true,
      point: 4,
      meaning:
        "an illness, injury, or condition that makes it difficult for someone to do some things that other people do, and that is usually permanent or lasts for a long time.",
    },
  ];

  return (
    <div className="flex justify-center pt-6 px-4 tablet:px-6">
      <div className="w-full laptop:w-fit">
        <h3 className="hidden laptop:block mb-6 text-32 font-bold text-[ #1C1C1C]">
          Word History
        </h3>
        <div className="border border-[#2D2D2D] bg-white">
          {games.map((game: Game, index) => (
            <HistoryRow key={index} dp={Icon} game={game} />
          ))}
        </div>

      
      </div>
    </div>
  );
}
