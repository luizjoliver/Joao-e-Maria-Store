import Image from 'next/image'
import Link from 'next/link'

export type FeaturedProductCardType = {
    id: number;
    name: string;
    price: number;
    img: string;
    category: string;
    colors?: string[];
    featured: boolean;
}

export type FeaturedProductCardProps = {
  product: FeaturedProductCardType;
}


export default function ProductCard({product} : FeaturedProductCardProps ) {

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
