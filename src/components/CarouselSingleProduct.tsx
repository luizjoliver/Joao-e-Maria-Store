"use client"

import { Products } from '@/constants'
import Image from 'next/image'

export default function CarouselSingleProduct({ productId }: { productId: number }) {

    
    
    
    const productImgBasedOnId = Products[ productId - 1 ].img[0].url[0]
    const SingleProductImages2 =  Products[ productId - 1 ].img
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

            {SingleProductImages2.map((imageGroup) =>
                    imageGroup.url.map((imageUrl, subIndex) => (
                        <div
                            key={`${imageGroup.colorImg}-${subIndex}`}
                            className="bg-[#DBDBDB] w-[calc(25%-12px)] h-full flex-shrink-0 cursor-pointer flex items-center justify-center"
                        >
                            <Image
                                width={826}
                                height={587}
                                src={imageUrl}
                                alt={`Produto  - Cor ${imageGroup.colorImg}`}
                                className="object-fill w-full h-full"
                            />
                        </div>
                    ))
                )}

            </div>

        </div>
    )
}



