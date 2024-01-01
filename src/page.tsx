'use client'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useState } from 'react'

export default function Home() {
const [logged, setLogged] = useState(false)
  if (!logged) {
    redirect('/home')
  }
  redirect('/dashboard')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
 
    </main>
  )
}
