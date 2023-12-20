'use client'
import LetterAndNumber from "../component/letterAndNumber";
import { ReactElement, useRef, useState } from "react";
import Starter from "./components/starter";
import Howto from "./components/howto";

import Meta from "../component/Metadata";

export default function Dashboard() {
const [start, setStart] = useState(false)
const [how, setHow] = useState(false)

Meta({title: "Dashboard", description: "Dashboard"})

  const startgame =(res: boolean)=>{
    setStart(res)
console.log(res)
  }
  const howto =(res: boolean)=>{
   setHow(res)
    console.log(res)
  }

  //throw new Error('Not today!')
  return (
    <div className="flex flex-col laptop:flex-row justify-between">
{!start && <Starter play={startgame} how={howto}/>}
      <LetterAndNumber />
<Howto />
    </div>
  );
}
