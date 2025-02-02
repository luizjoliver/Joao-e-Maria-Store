import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { CiHeart } from 'react-icons/ci';

export type ProductTypeProps = {
    id: number;
    name: string;
    price: number;
    img: string;
    category: string;
    colors?: string[];
    featured:boolean;
}

export type ProductCardProps = {
    product: ProductTypeProps;
}
export default function ProductsCard({ product }: ProductCardProps) {

    const { id, name, price, category, img } = product;

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

            <div className='   w-full h-[25%] flex'>
                <div className='  pl-3 w-[65%] h-full flex flex-col items-center justify-center gap-1'>
                    <p className=' w-full h-[60%] '>
                        {name}
                    </p>
                    <span className=' w-full h-[40%] text-black text-opacity-40 opacity-90 '>
                        {category}
                    </span>
                    <span className=' w-full h-[40%] '>
                        R$ {price}
                    </span>

                </div>
                <div className='  w-[35%] h-full'>
                    <div className=' w-full h-[35%] flex items-center justify-center gap-2 p-1'>
                        <span className='bg-red-950 rounded-full size-4'></span>
                        <span className='bg-white rounded-full size-4'></span>
                        <span className='bg-blue-950 rounded-full size-4'></span>

                    </div>
                </div>
            </div>

        <span className='absolute top-2 right-2 p-2 rounded-full bg-white hover:bg-black hover:bg-opacity-15'><CiHeart className='size-6'/></span>
            
        </Link>
    )
}
