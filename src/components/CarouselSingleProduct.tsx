import Image from 'next/image'
import React from 'react'

export default function CarouselSingleProduct({ productId }: { productId: number }) {

    const id = productId
    return (
        <div className='h-full w-[70%] flex flex-col gap-4'>

            <div className='  aspect-square w-full h-[70%] relative'>
                <Image 
                    fill
                    src={'/airmax.png'}
                    alt={`product ${id}`} 
                    className='object-fill w-full h-full'/>
            </div>

            <div className=' w-full h-[30%] flex gap-4 items-center justify-center overflow-hidden'>

                <div className=' bg-[#DBDBDB]  w-[calc(25%-12px)] h-full flex-shrink-0 flex items-center justify-center'>
                <Image 
                    width={826}
                    height={587}
                    src={'/airmax.png'}
                    alt={`product ${id}`} 
                    className='object-contain w-full h-full'/>
                </div>
                <div className=' bg-[#DBDBDB] w-[calc(25%-12px)] h-full flex-shrink-0  flex items-center justify-center'>
                <Image 
                    width={826}
                    height={587}
                    src={'/airmax.png'}
                    alt={`product ${id}`} 
                    className='object-contain w-full h-full'/>
                </div>
                <div className='bg-[#DBDBDB]  w-[calc(25%-12px)] flex-shrink-0 h-full flex items-center justify-center'>
                <Image 
                    width={826}
                    height={587}
                    src={'/airmax.png'}
                    alt={`product ${id}`} 
                    className='object-contain w-full h-full'/>
                </div>
                <div className=' bg-[#DBDBDB]  w-[calc(25%-12px)] h-full flex-shrink-0 flex items-center justify-center'>
                <Image 
                    width={826}
                    height={587}
                    src={'/airmax.png'}
                    alt={`product ${id}`} 
                    className='object-contain w-full h-full'/>
                </div>
                <div className=' bg-[#DBDBDB] w-[calc(25%-12px)] h-full flex-shrink-0  flex items-center justify-center'>
                <Image 
                    width={826}
                    height={587}
                    src={'/airmax.png'}
                    alt={`product ${id}`} 
                    className='object-contain w-full h-full'/>
                </div>
                <div className='bg-[#DBDBDB]  w-[calc(25%-12px)] flex-shrink-0 h-full flex items-center justify-center'>
                <Image 
                    width={826}
                    height={587}
                    src={'/airmax.png'}
                    alt={`product ${id}`} 
                    className='object-contain w-full h-full'/>
                </div>
                
            </div>

        </div>
    )
}



