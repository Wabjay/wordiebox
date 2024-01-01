'use client'
import LetterAndNumber from "@/src/component/dashboard/letterAndNumber";
import { ReactElement, useRef, useState } from "react";
import Starter from "../../component/dashboard/starter";
import Howto from "../../component/dashboard/popup/howto";

import Meta from "@/src/component/Metadata";
import { store } from "@/src/stores/store";
import Game from "@/src/component/dashboard/game/game";
import { State } from "@/src/stores/states";

export default function Dashboard() {
const [start, setStart] = useState(false)

Meta({title: "Dashboard", description: "Dashboard"})

  const startgame =(res: boolean)=>{
    setStart(res)
console.log(res)
  }
  // const howto =(res: boolean)=>{
  //  setHow(res)
  //   console.log(res)
  // }
  const {visible} = State()

  //throw new Error('Not today!')
  return (
    <div className="flex flex-col laptop:flex-row justify-between">
{!start && <Starter play={startgame}/>}
{start && <Game/>}

{/* {!start && <Starter play={startgame} how={howto}/>} */}
      <LetterAndNumber />

      <Howto visible={visible}/>
    </div>
  );
}
