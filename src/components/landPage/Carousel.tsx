"use client"

import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import ProductCard from '../ProductCard'
import { ProductsFeatured } from '@/constants'
import { ProductTypeProps } from '../ProductsCard'


type CarouselProps = {
  products: ProductTypeProps[];
};


export default function Carousel({ products }: CarouselProps) {


  const [index, setIndex] = useState<number>(0)

  function handleNextIndex() {


    setIndex((prevIndex) => (prevIndex + 4) % ProductsFeatured.length);
  }

  function handlePrevIndex() {

    setIndex((prevIndex) => (prevIndex - 4 + ProductsFeatured.length) % ProductsFeatured.length);
  }
  return (


    <div className=' w-full h-full flex items-center gap-2 justify-center '>

      <div className=' h-16 w-[5%] flex items-center justify-center '>
        <IoIosArrowBack className='size-1/2 cursor-pointer  '
          onClick={handlePrevIndex} />
      </div>

      <div className=' size-[90%]  flex justify-center items-center overflow-hidden gap-4'>
        {
          products.slice(index, index + 4).map((product) => (
            <div
              key={product.id}
              className="h-[70%] w-[calc(25%-16px)] flex-none hover:scale-105"
            >
              
              <ProductCard product={product} />
            </div>
          ))
        }
      </div>
      <div  className='  h-16 w-[5%] flex items-center justify-center'>
        <IoIosArrowForward className='size-1/2 cursor-pointer '
          onClick={handleNextIndex} />
      </div>

    </div>


  )
}
