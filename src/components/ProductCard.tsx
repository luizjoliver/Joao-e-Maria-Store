import Image from 'next/image'
import Link from 'next/link'
import { ImgType } from './ProductsCard';

export type FeaturedProductCardType = {
    id: number;
    name: string;
    price: number;
    img:ImgType[];
    category: string;
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
                src={product.img[0].url[0]}
                fill
                className="object-cover"
                alt=''
                priority
              />

          </Link>

        ) :(
          <div className='bg-[#D6D6D6]  w-full h-full  '>

                <Image
                src={product.img[0].url[0]}
                fill
                className="object-cover"
                alt=''
                priority
              />

          </div>
        )}

    </div>
  )
}
