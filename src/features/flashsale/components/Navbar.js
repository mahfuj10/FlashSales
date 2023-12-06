import React from 'react'
import CountdownTimer from './CountdownTimer'
import { IoIosArrowForward } from "react-icons/io";

export default function Navbar() {
  return (
    
    <div className='flex items-center justify-around w-full bg-white py-3 mb-1'>
        
        <h5 className='text-lg text-orange-500'>FlashSale</h5>
        
        <CountdownTimer />
        
        <h5 className='text-lg text-orange-500 cursor-pointer flex items-center'>
            See More <IoIosArrowForward />
        </h5>
    </div>
  )
}
