import ProductCard from '@/components/ProductCard'
import React from 'react'

export default function ProdutoPage({ params }: { params: { id: string } }) {
    //const id = params.id

  return (
    <div className='w-full h-full pt-28 flex items-center justify-center'>

      <div className=' h-[70%] w-[46%]'>
        <ProductCard/>
      </div>

    </div>

  )
}
