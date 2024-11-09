import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className='w-full justify-center flex flex-col items-center h-screen'>

        <p className='text-[20px] uppercase'>Welcome to homepage</p>
        
        <Outlet />
    </div>
  )
}
