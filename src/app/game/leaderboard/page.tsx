import React from 'react'
import LeaderBoardRow from './components/leaderBoardRow'
import Icon from "@/public/icon.png";
import Summary from './components/summary';

export default function page() {

  const users: User[] = [
    {  payload:{
      _id: 'string',
      userName: 'adiolatayo',
      email: 'omoniyi.success@gmail.com',
      karmaCredit: 3,
      gamePoint: 300,
      role: 'user',
      referral: 'gameapp.com/refferal-link',
      attempts: 39,
      history: [],
      createdAt: '20th Apr,2023',
      updatedAt: '20th Apr,2023',
      __v: 0
    } },
    {  payload:{
      _id: 'string',
      userName: 'adiolatayo',
      email: 'omoniyi.success@gmail.com',
      karmaCredit: 3,
      gamePoint: 300,
      role: 'user',
      referral: 'gameapp.com/refferal-link',
      attempts: 39,
      history: [],
      createdAt: '20th Apr,2023',
      updatedAt: '20th Apr,2023',
      __v: 0
    } },
    {  payload:{
      _id: 'string',
      userName: 'adiolatayo',
      email: 'omoniyi.success@gmail.com',
      karmaCredit: 3,
      gamePoint: 300,
      role: 'user',
      referral: 'gameapp.com/refferal-link',
      attempts: 39,
      history: [],
      createdAt: '20th Apr,2023',
      updatedAt: '20th Apr,2023',
      __v: 0
    } },
   
  ];

  return (
    <div className="flex justify-center pt-6">
      <div>
          <Summary points={72} leaderboard='24th' />
      <div>
        <h5 className="hidden laptop:block mb-6 text-20 font-bold text-[ #1C1C1C]">
        Players leaderboard
      </h5>
      <div className="border border-[#2D2D2D] bg-white w-fit">
        {users.map((user: User, index) => (
          <LeaderBoardRow key={index} dp={Icon} user={user} index={index} />
        ))}
      </div>
    </div>
      </div>
  </div>
  )
}

