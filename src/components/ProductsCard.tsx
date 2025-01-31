import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export type ProductTypeProps = {
    id: number;
    name: string;
    price: number;
    img: string;
    category: string;
    colors?: string[];
}

type ProductCardProps = {
    product: ProductTypeProps;
}
export default function ProductCard( {product} :ProductCardProps) {
    
    const { id, name, price, category, img } = product;

  return (
     <Link className=" bg-white flex flex-col  items-center justify-center gap-4 pb-2 hover:scale-105 hover:cursor-pointer" href={`produto/${id}`}>
                    <div className=' aspect-auto relative w-full h-full'>
                       <Image  src={ img } 
                       fill
                       className='object-cover'
                       alt=''
                       priority
                       /> 
                    </div>
                    
                          <div className= '   w-full h-[25%] flex'>
                              <div className='  pl-3 w-[65%] h-full flex flex-col items-center justify-center gap-1'>
                                    <p className=' w-full h-[60%] '>
                                          {name}
                                    </p>
                                    <span className=' w-full h-[40%] text-slate-400 opacity-90 '>
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
                   
                  </Link>
  )
}
