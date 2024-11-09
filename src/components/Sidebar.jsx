import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='bg-red-700 h-screen w-[200px] fixed top-0  p-10'>
      <div>
       <Link to='/'>Home  </Link> 
      </div>

      <div className='py-10'>
        <Link to='/contact'> Contact </Link> 
      </div>

     
     
      
      </div>
  )
}
