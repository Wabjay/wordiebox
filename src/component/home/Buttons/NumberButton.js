
const NumberButton = ({text, color, style}) => {
  return (
    <div className={` ${style}
    w-8 h-8 text-[12px] leading-[16.181px]
    tablet:text-[20px] tablet:w-[54px] tablet:h-[54px] tablet:leading-[26.783px]
    laptop:text-[16px] laptop:w-11 laptop:h-11 laptop:leading-[21.878px]
    desktop:text-[24px] desktop:w-[64px] desktop:h-[64px] desktop:leading-[31.966px]
    flex items-center justify-center 
    ${color === "green" ? 
  "border-[#1C1C1C] bg-[#EBFFF3]" : "border-[#00A33F] bg-white"} shadow-numberButton border-[1.052px] 
    text-[#1C1C1C] font-bold `}>{text}</div>
  )
}

export default NumberButton
