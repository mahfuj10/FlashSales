import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../hooks/useProducts';
import ProductItem from './ProductItem';
import ProductDetails from './ProductDetails';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Products() {
    
    const [products, setProducts] = useState([])
    const [startIndex, setStartIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false)
    const productsPerPage = 4;
    
    useEffect(() => {
        async function fetchData() {
          setIsLoading(true)

          const res = await fetchProducts();
          setProducts(res)
          
          setIsLoading(false)
        }
        fetchData();
    }, []);

    const nextPage = () => {
      setStartIndex((prevStartIndex) => {
        const nextIndex = (prevStartIndex + 1) % products.length;
        return nextIndex;
      });
    };

    const prevPage = () => {
        setStartIndex((prevStartIndex) => {
          const prevIndex = (prevStartIndex === 0 ? products.length - 1 : prevStartIndex - 1);
          return prevIndex;
        });
      };
  
    const displayedProducts = products.slice(startIndex, startIndex + productsPerPage);
    const disablePrev = startIndex === 0;
    const disableNext = displayedProducts.length < 2;
  
    if(isLoading){
      return 'Loading...'
    }

  return (

<div className='flex gap-1 justify-center relative items-center'>

  {!disablePrev && <button onClick={prevPage} className='z-10 shadow-lg w-8 h-8 rounded-full flex justify-center items-center absolute bg-white -left-1'>
    <IoIosArrowBack className='text-gray-400' /> 
  </button>}

  <div>
    {
        displayedProducts[0] && <ProductDetails
            product={displayedProducts[0]}
        />
    }
  </div>

  <div className="grid grid-cols-2 gap-y-1 gap-x-1">
   {
      displayedProducts.map((product, index) =>  
        <ProductItem 
           key={index}
           imageUrl={product.imageUrl}
           title={product.title}
        />)
   }
  </div>

  {!disableNext && <button onClick={nextPage} className='shadow-lg w-8 h-8 rounded-full flex justify-center items-center absolute bg-white -right-1'> 
    <IoIosArrowForward className='text-gray-400' /> 
  </button>}

</div>
)
}
