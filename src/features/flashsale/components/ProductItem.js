import React from 'react'

export default function ProductItem({ imageUrl, title}) {
  return (
    <div className='bg-white p-3 lg:w-36'>
        <img 
          className='mx-auto'
          src={imageUrl}
          width={77} 
          height={77}
          alt={`${title}_image`}
        />   
        
        <h5 className='text-xs text-center'>
          {title}
        </h5>
    </div>
  )
}
