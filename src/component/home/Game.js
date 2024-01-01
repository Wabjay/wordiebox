import Image from 'next/image'

const Game = ({image, title, description, resize}) => {
    return (
      <div className='flex flex-col items-center justify-center laptop:basis-1/3 max-w-[368px] tablet:max-w-[528px]'>
          <Image src={image} className={`${resize ? "w-[133px]" :"w-[63px]"} h-[70px] mb-6`} alt="Pesentation Icon"/>
          <p className='font-semibold leading-[22px] text-[16px] text-[#2E2E27] mb-2 tablet:text-[20px] tablet:font-bold tablet:leading-[28px] tablet:tracking-[-0.8px] laptop:text-[24px] laptop:leading-8 '>{title}</p>
          <p className='text-[16px] leading-[22px] text-[#64645F] laptop:text-[20px] laptop:leading-[28px]'>{description}</p>
      </div>
    )
  }
  
  export default Game