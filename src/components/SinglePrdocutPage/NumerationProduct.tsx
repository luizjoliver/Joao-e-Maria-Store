import React from 'react'

type ProductNumerationsProps = {
  numerations: number[] | string[];
  selectedSize: number | string | null
  handleSelectSize: (size: number | string) => void
}

export default function ProductNumerationsComponent({ numerations, selectedSize, handleSelectSize }: ProductNumerationsProps) {
  console.log(numerations.length);

  return (
    <article className='w-full h-full flex flex-col items-center justify-center gap-2'>
      <h3 className='font-semibold'>Escolha o seu tamanho</h3>
      <div className='w-full flex items-center justify-center gap-4  '>

        {numerations.length > 4 ? (<div className=' grid grid-cols-4 gap-4 p-2 '>
          {numerations.map((size) => (
            <div
              key={size}
              className={`bg-[#F7F7F7] rounded-md min-h-10 flex items-center justify-center hover:ring-1 hover:ring-black cursor-pointer px-4 py-2
      ${size === selectedSize && 'ring-1 ring-black'}`}
              onClick={() => handleSelectSize(size)}
            >
              <span>{size}</span>
            </div>
          ))}
        </div>) : (

          numerations.map((size, index) => (
            <span key={index} className={`bg-[#F7F7F7] rounded-md min-h-10 flex items-center justify-center hover:ring-1 hover:ring-black cursor-pointer px-4 py-2
      ${size === selectedSize && 'ring-1 ring-black'}`}
              onClick={() => handleSelectSize(size)}
            >
              {size}
            </span>
          ))
        )}


      </div>
    </article>
  )
}  