import { RecomendedProducts } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function RecommendedProducts() {

    //Mexer no 35vh para responsividade
    return (
        <div className='w-full  h-[25vh]   lg:h-[30vh] xl:h-[35vh]  flex items-center justify-center flex-col  gap-4'>
            <span className='text-2xl font-thin'>Veja também</span>
            <div className=' flex flex-wrap sm:flex-nowrap items-center justify-center h-full w-full  gap-4 p-2'>
                {RecomendedProducts.map((product) => (
                    <Link className=' h-full w-1/2  relative' key={product.id} href={`/produto/${product.id}`}>
                        <Image src={product.img} alt='product' fill />
                    </Link>
                ))}
            </div>
        </div>
    )
}
