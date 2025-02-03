import React from 'react'
import Carousel from './Carousel'
import { ProductsFeatured, ProductsFeatured2 } from '@/constants'




export default function CarouselSection() {
    return (
        <div className="w-full h-[100vh]  flex flex-col gap-10 items-center justify-center p-10">
            
            <h2 className='text-3xl sm:text-4xl font-bold '>Produtos em Ofertas</h2>
            <Carousel products={ProductsFeatured} homePage />
            
            <h2 className='text-3xl sm:text-4xl font-bold '>Produtos Mais vendidos</h2>
            <Carousel products={ProductsFeatured2} homePage />

        </div>
    )
}
