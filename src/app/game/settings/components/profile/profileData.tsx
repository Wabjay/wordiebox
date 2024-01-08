"use client"
import React, { useState } from 'react'
import { useFormState } from 'react-dom'
type userForm = {
    username: string,
    email: string,
    firstName: string,
    lastName: string,
}
export default function ProfileData() {

    const [formData, setFormData] = useState<userForm>({
        username: "Slimcase3f3c",
        email: "slimcase32@gmail.com",
    firstName: "Slim",
    lastName: "Case",
    })

    const handleChange =(e:any)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
  return (
    <div className='w-full'>
<form action="" className='text-[#1C1C1C] text-14  flex flex-col'>
    <label htmlFor="username">Username</label>
    <input type="text" placeholder={formData.username} className='mt-2 mb-6 w-full tablet:w-[494px] placeholder-[#A6A6A6] px-3 py-2 border border-[#1C1C1C] shadow-darkbox bg-white outline-none' name="username" value={formData.username} onChange={handleChange} />
    <label htmlFor="email">Email</label>
    <input type="text" placeholder={formData.email} className='mt-2 mb-6 w-full tablet:w-[494px] placeholder-[#A6A6A6] px-3 py-2 border border-[#1C1C1C] shadow-darkbox bg-white outline-none' name="email" value={formData.email} onChange={handleChange} />
    <label htmlFor="firstName">FirstName</label>
    <input type="text" placeholder={formData.firstName} className='mt-2 mb-6 w-full tablet:w-[494px] placeholder-[#A6A6A6] px-3 py-2 border border-[#1C1C1C] shadow-darkbox bg-white outline-none' name="firstName" value={formData.firstName} onChange={handleChange} />
    <label htmlFor="lastName">lastName</label>
    <input type="text" placeholder={formData.lastName} className='mt-2 mb-6 w-full tablet:w-[494px] placeholder-[#A6A6A6] px-3 py-2 border border-[#1C1C1C] shadow-darkbox bg-white outline-none' name="lastName" value={formData.lastName} onChange={handleChange} />
   
    <button className="text-[#D7D7D7] border border-[#1C1C1C] bg-[#FFFCEC] shadow-darkbox p-2 px-3 w-full tablet:w-[494px] relative" >
        <input type="file" name="profile picture" className="opacity-0 w-full absolute left-0"/>
        <p className="text-12 font-medium">Upload Image</p>
        </button>
</form>
    </div>
  )
}


