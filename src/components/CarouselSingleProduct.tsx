"use client"

import { Products, SingleProductImages } from '@/constants'
import Image from 'next/image'
import React from 'react'

export default function CarouselSingleProduct({ productId }: { productId: number }) {

    
    
    
    const productImgBasedOnId = Products[ productId - 1 ].img
    const id = productId
    return (
        <div className='h-[45%] md:h-full w-full sm:w-[90%] md:w-[70%] flex flex-col gap-4  '>

            <div className='  aspect-square w-full h-[70%] relative'>
                <Image
                    fill
                    src={productImgBasedOnId}
                    alt={`product ${id}`}
                    className='object-fill w-full h-full' />
            </div>

            <div className='  w-full h-[30%] flex gap-4 items-center justify-start overflow-x-scroll'>

                {SingleProductImages.map((product) => (
                    <div className=' bg-[#DBDBDB]  w-[calc(25%-12px)] h-full flex-shrink-0 cursor-pointer flex items-center justify-center'
                        key={product.id}>
                        <Image
                            width={826}
                            height={587}
                            src={product.img}
                            alt={`product ${id}`}
                            className='object-fill w-full h-full' />
                    </div>
                ))}

            </div>

        </div>
    )
}



