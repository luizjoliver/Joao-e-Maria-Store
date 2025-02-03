import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ProductCardProps} from './ProductsCard'




export default function ProductCard({product} :ProductCardProps ) {

  const productId = product.id

  const isFeatured = product.featured

  return (
    <div className='w-full h-full flex flex-col  '>

        {isFeatured ? (
          
            <Link className='bg-[#D6D6D6]  w-full h-full  relative ' href={`produto/${productId}`}>
               
                <Image
                src={product.img}
                fill
                className=''
                alt=''
              />

          </Link>

        ) :(
          <div className='bg-[#D6D6D6]  w-full h-full  '>

                <Image
                src={product.img}
                fill
                className=''
                alt=''
              />

          </div>
        )}

    </div>
  )
}
