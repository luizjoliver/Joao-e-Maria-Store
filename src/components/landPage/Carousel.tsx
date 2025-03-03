"use client"

import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { ProductsFeatured } from '@/constants'
import ProductCard, { FeaturedProductCardType } from '../ProductCard';



type CarouselProps = {
  products: FeaturedProductCardType[] 
  homePage:boolean;
};


export default function Carousel({ products, homePage }: CarouselProps) {


  const [index, setIndex] = useState<number>(0)
  const [itensPerPage,setItemsPerPage] = useState<number>(0)

  function handleNextIndex() {


    setIndex((prevIndex) => (prevIndex + itensPerPage) % ProductsFeatured.length);
  }

  function handlePrevIndex() {

    setIndex((prevIndex) => (prevIndex - itensPerPage + ProductsFeatured.length) % ProductsFeatured.length);
  }

  useEffect(() => {

    function updateItemsPerPage() {
        
        if(homePage){

            switch(true){
                case  window.innerWidth <= 425:
                    setItemsPerPage(1)
                    break  
                case  window.innerWidth > 425 && window.innerWidth < 768:
                  setItemsPerPage(2)
                   break
                case  window.innerWidth >=  768:
                    setItemsPerPage(4)  
                    break
              }

        }else{

            switch(true){
                case  window.innerWidth <= 425:
                    setItemsPerPage(4)
                    break  
                case  window.innerWidth > 425 && window.innerWidth < 768:
                  setItemsPerPage(2)
                   break
                case  window.innerWidth >=  768:
                    setItemsPerPage(1)  
                    break
              }
        }
      
    }

    updateItemsPerPage();
 

  }, [homePage]);



  return (


    <div className=' w-full h-full  flex  items-center gap-2 justify-center  '>

      <div className=' h-16 w-[15%] sm:w-[5%] flex items-center justify-center '>
        <IoIosArrowBack className='size-1/2 cursor-pointer transition-opacity hover:opacity-60'
          onClick={handlePrevIndex} />
      </div>

      <div className=' size-[70%] sm:size-[90%]  flex  justify-center items-center overflow-hidden gap-4'>
        {
          products.slice(index, index + itensPerPage).map((product) => (
            <div
              key={product.id}
              className={`h-full  md:h-[70%]   w-full sm:w-[calc(50%-16px)]  md:w-[calc(25%-16px)]  hover:scale-105`}
            >
              
              <ProductCard product={product} />
            </div>
          ))
        }
      </div>
      <div  className='  h-16 w-[15%] sm:w-[5%] flex items-center justify-center'>
        <IoIosArrowForward className='size-1/2 cursor-pointer transition-opacity hover:opacity-60'
          onClick={handleNextIndex} />
      </div>

    </div>


  )
}
