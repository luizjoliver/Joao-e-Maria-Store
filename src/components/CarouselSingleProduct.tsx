import { SingleProductImages } from '@/constants'
import Image from 'next/image'
import React from 'react'

export default function CarouselSingleProduct({ productId }: { productId: number }) {

    const id = productId
    return (
        <div className='h-full w-[70%] flex flex-col gap-4 '>

            <div className='  aspect-square w-full h-[70%] relative'>
                <Image
                    fill
                    src={'/nike2.png'}
                    alt={`product ${id}`}
                    className='object-fill w-full h-full' />
            </div>

            <div className='  w-full h-[30%] flex gap-4 items-center justify-start overflow-x-scroll'>

                {SingleProductImages.map((product) => (
                    <div className=' bg-[#DBDBDB]  w-[calc(25%-12px)] h-full flex-shrink-0 flex items-center justify-center'
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



