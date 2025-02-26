import Link from 'next/link';
import React from 'react'

type ProductNumerationsProps = {
  numerations: number[] | string[];
  selectedSize:  string | undefined | string[]
  selectedColor: string | undefined | string[]
  selectedImgIndex:string | undefined | string[]
}

export default function ProductNumerationsComponent({ numerations, selectedSize ,selectedColor,selectedImgIndex }: ProductNumerationsProps) {
  return (
    <article className='w-full h-full flex flex-col items-center justify-center gap-2'>
      <h3 className='font-semibold'>Escolha o seu tamanho</h3>
      <div className='w-full flex justify-center'>
        <div className='flex flex-wrap justify-center gap-2 max-h-[200px] overflow-y-auto w-full p-2'>
          {numerations.map((size, index) => (
           <Link 
           href={`?imgIndex=${selectedImgIndex}&color=${selectedColor}&size=${size}`}
             key={index}
             className={`bg-[#F7F7F7] rounded-md min-h-10 flex items-center justify-center 
               hover:ring-1 hover:ring-black cursor-pointer px-4 py-2 min-w-[80px]
              ${String(selectedSize) === String(size) ? 'ring-1 ring-black' : ''}`}
            
           >
             <span>{size}</span>
           </Link >
          ))}
        </div>
      </div>
    </article>
  )
} 