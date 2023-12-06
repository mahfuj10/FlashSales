import React from 'react'
import '../style/index.css'
import { GiSelfLove } from "react-icons/gi";


export default function ProductDetails(props) {

  const { discount, description, title, offerPrice, price, imageUrl } = props.product
  
  return (
    <div style={{minHeight:238, maxHeight:238}} className='w-44 bg-white relative p-4'>
      
      <button className=' absolute  shadow-lg w-8 h-8 rounded-full flex justify-center items-center left-3/4'>
        <GiSelfLove className='text-gray-400' /> 
      </button>

        <img 
          className='mx-auto'
          src={imageUrl}
          width={100}
          height={100}
          alt={`${title}_image`}
        />

        <button className='discount-btn text-xs p-1 bg-orange-400 text-white px-3 mb-2'>{discount}% Off</button>

        <h5 className='text-xs text-justify'>
          {description}
        </h5>
        
        <div className='flex gap-x-3'>
           <h5 className='text-xs text-orange-600 font-bold mt-2'>
               ৳ {offerPrice}
           </h5>
           <del className='text-xs text-gray-400 font-bold mt-2'>
               ৳ {price}
           </del>
        </div>


    </div>
  )
}

