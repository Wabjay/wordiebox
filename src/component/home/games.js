import React from 'react'
import Game  from "./Game"
import Guess from "/public/guess_words.png"
import Rewards from "/public/get_reward.png"
import Random from "/public/random_number.png"
const Games = () => {
  return (
    <div className='w-full'>
       <div id='game' className='w-full laptop:max-w-[1152px] mx-auto px-4 tablet:px-6 laptop:px-8 desktop:px-0 text-center  py-[40px] tablet:py-[80px] laptop:py-[100px]'>
<p className='text-24 mb-6 tablet:text-32 tablet:mb-[40px] laptop:mb-[70px] font-bold w-[288px] tablet:w-[441px] laptop:w-[690px] mx-auto'>How our game works</p>

      <div className='flex flex-col gap-5 tablet:gap-[40px] items-center laptop:flex-row laptop:items-start laptop:gap-8 text-center'>
      <Game image={Random} title='Generate random numbers' description='Click on the learn new word  button to get started on generating numbers' />
      <Game image={Guess} title='Guess words from numbers' description='use the word-number index to generate what you think the word will mean before the timer runs out' />
      <Game image={Rewards} resize={true} title='Submit and get rewarded' description='Submit your word and get results of your word guess. You either get points added for correct word guess...' />
      </div>
    </div>
  
        </div>
  )
}

export default Games