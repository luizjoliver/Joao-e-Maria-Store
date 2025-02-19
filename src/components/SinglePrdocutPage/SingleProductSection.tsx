import React from 'react'
import CarouselSingleProduct from '../CarouselSingleProduct'
import { CiHeart } from 'react-icons/ci'
import { Products } from '@/constants'
import ProductColorsComponent from './ProductColorsComponent'
import ProductNumerationsComponent from './NumerationProduct'

export default function SingleProductSection({productId} :{productId:number}) {

  

    const productBasedOnId = Products[ productId  - 1 ]
     const productNumerations = productBasedOnId.sizes
     const productColors = productBasedOnId.colors
   
 

    


  return (
    <div className='  h-full w-full xl:w-[70%] lg:w-[90%] flex flex-col md:flex-row items-center justify-center gap-6 p-2 '>

          <CarouselSingleProduct productId={productId} />

          <div className='h-full w-full md:w-[30%]  flex flex-col items-center justify-center  gap-6 '>

            <div className='w-full p-2 h-1/3 flex flex-col '>
              <h1 className='text-2xl font-semibold'>{productBasedOnId.name}</h1>
              <span className='text-opacity-70 text-black'>{productBasedOnId.category}</span>
              <span className='text-lg font-normal'>R$ {productBasedOnId.price}  no Pix</span>
              <span>ou</span>
              <span>R$ {productBasedOnId.price} em até 5x sem juros</span>

            </div>

            <div className='w-full h-1/2 flex flex-col gap-4  '>

             <div className='h-4/5 w-full '> 
              <ProductNumerationsComponent numerations={productNumerations}/>
             </div>

             <div className='h-1/5 w-full '> 
              <ProductColorsComponent className='w-full h-full flex flex-col items-center justify-center gap-4' colors={productColors}  card/>
             </div>

            </div>

            <div className='w-full p-2 h-1/3  flex flex-col  gap-4 items-center justify-start md:justify-end  '>
              <button className='px-4 py-2 bg-black  text-white rounded-full hover:bg-opacity-80 w-full'>Comprar</button>
              <div className='w-full flex items-center bg-[#F7F7F7] justify-center gap-2 px-4 py-2   text-black rounded-full  hover:ring-1 hover:ring-black'>
                <button className=' w-full'> Favoritar </button>
                <CiHeart />
              </div>
            </div>

          </div>
        </div>
  )
}
