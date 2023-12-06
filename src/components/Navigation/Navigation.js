import React from 'react'
import { RiSearchLine } from 'react-icons/ri';
import { BsCart2 } from "react-icons/bs";

export default function Navigation() {
  return (
    <div className='flex gap-x-3 justify-center pt-3'>
        
    <div className="relative">  {/* search box */}
      <input
        type="text"
        placeholder="Search Product"
        className="bg-black rounded-full bg-opacity-50 text-white pl-10 py-2 pr-4 focus:outline-none"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
        <RiSearchLine />
      </div>
    </div>

    <button className='bg-black rounded-full bg-opacity-50 text-white border-none p-2'>
        <BsCart2 className='text-2xl' />
    </button>

    </div>
  )
}
