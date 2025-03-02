import { RecomendedProducts } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function RecommendedProducts() {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <h2 className='text-3xl font-light text-center mb-8'>Veja também</h2>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {RecomendedProducts.map((product) => (
          <Link 
            key={product.id} 
            href={`/produto/${product.id}`}
            className='group relative block w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
          >
        
            <div className='relative pt-[70.5%]'> {/* 662/930 = 0.7118 -> 71.18% */}
              <Image 
                src={product.img} 
                alt="produtos"
                fill
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                className='object-cover group-hover:scale-105 transition-transform duration-300'
                quality={85}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}