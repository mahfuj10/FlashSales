import React from 'react'
import FlashSale from '../../features/flashsale'
import Header from '../../components/Header/Header'
import Features from '../../components/Features/Features'

export default function Home() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <div className='md:order-last lg:order-1'></div>

      <div className='md:order-first lg:order-2 lg:mt-2'>
        <Header />
        <div className='p-2 md:p-0'>
          <Features />
          <FlashSale />
        </div>
      </div>
      
      <div className='lg:order-3'></div>
    </div>
  )
}


