import Image from 'next/image';
import Link from 'next/link';
import { CiHeart } from 'react-icons/ci';
import ProductColorsComponent from './SinglePrdocutPage/ProductColorsComponent';

export type ProductTypeProps = {
    id: number;
    name: string;
    price: number;
    img: string;
    sizes:number[] | string [];
    category: string;
    colors?: string[];
    featured: boolean;
}

export type ProductCardProps = {
    product: ProductTypeProps;
}
export default function ProductsCard({ product }: ProductCardProps) {

    const { id, name, price, category, img, colors } = product;

    return (
        <Link className=" bg-slate-50 flex flex-col  items-center justify-center gap-4 pb-2 h-full w-full hover:scale-105 hover:cursor-pointer relative" href={`produto/${id}`}>
            <div className='bg-[#DBDBDB] aspect-auto relative  w-full xl:h-full  h-[80%]'>
                <Image src={img}
                    fill
                    className='  lg:object-cover object-contain '
                    alt=''
                    priority
                />
            </div>

            <div className='   w-full h-[25%] flex flex-col  '>
                <div className='w-full h-1/2  flex'>

                    <div className='w-3/4  h-full flex items-center justify-start px-2'>
                        <span>{name}</span>
                    </div>

                    <ProductColorsComponent className='  w-1/4 h-full flex flex-wrap  items-center justify-around' card={false} colors={colors}  />
                </div>

                <div className=' w-full h-1/2 flex'>
                    <div className='text-slate-300 w-1/4 h-full flex items-center justify-start px-2'>
                        <span>{category}</span>
                    </div>

                    <div className=' w-3/4 h-full flex items-center justify-end px-2'>
                        <span>R${price}</span>
                    </div>
                </div>
            </div>

            <span className='absolute top-2 right-2 p-2 rounded-full bg-white hover:bg-black hover:bg-opacity-15'><CiHeart className='size-6' /></span>

        </Link>
    )
}


