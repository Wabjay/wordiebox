import { text } from "stream/consumers"
import CtaButton from '../ctaButton';


export default function Howto({visible}: {visible:boolean}) {


  const numbers = (texts: any[])=>(
    <div className='flex w-fit bg-white border-[#1C1C1C] border-l-0 border shadow-darkbox'>
      {texts.map((text:string|number) =>
  // <p key={text} className='w-6 h-6 laptop:w-8 laptop:h-8 flex items-center justify-center text-12 laptop:text-[14px] laptop:leading-5 font-semibold'>{text}</p>)}
<p key={text} className='w-6 h-6 laptop:w-8 laptop:h-8 border-l-[#1C1C1C] border-l flex items-center justify-center text-12 laptop:text-[14px] laptop:leading-5 font-semibold'>{text}</p>)}
</div>)
  return (
    visible && (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-overlay fixed top-0 left-0 z-20">
    <div className="mx-4 p-6 bg-[#F8F7F1] border text-center border-[#1C1C1C] w-full max-w-[398px]">
    <div className="flex flex-col gap-6 text-[#1C1C1C] justify-start text-left">
      <p className="text-16 font-semibold tablet:text-20">How to play the game</p>
      <div className="flex flex-col gap-2">
      {numbers([19,12,2,10])}
<p className="text-14 font-semibold tablet:text-16">Generate random numbers</p>
<p className="text-12 text-[#484848] tablet:text-14">Click on the learn new word  button to get started on generating numbers</p>
      </div>
      <div className="flex flex-col gap-2">
      {numbers(['T', 'R','A','Y'])}
<p className="text-14 font-semibold tablet:text-16">Guess words from numbers</p>
<p className="text-12 text-[#484848] tablet:text-14">use the word-number index to generate what you think the word will mean before the timer runs out</p>
      </div>
      <div className="flex flex-col gap-2">
      <p className="text-[#007A2F] text-24 font-bold"><span className="text-32 font-comic pr-2">+1</span>Point</p>
<p className="text-14 font-semibold tablet:text-16">Submit and get rewarded</p>
<p className="text-12 text-[#484848] tablet:text-14">Submit your word and get results of your word guess. You either get points added for correct word guess...</p>
      </div>

      <CtaButton text='Learn a new word'/>
    </div>
    </div>
    </div>
    )
  )
}
