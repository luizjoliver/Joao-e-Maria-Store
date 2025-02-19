import React from 'react'

export default function ProductNumerationsComponent({ numerations }: { numerations: number[] | string[] }) {
  return (
    <article className='w-full h-full flex flex-col items-center justify-center gap-2'>
      <h3 className='font-semibold'>Escolha o seu tamanho</h3>
      <div className='w-full grid grid-cols-4 gap-4 p-2'>
        {numerations.map((size, index) => (
          <div
            key={index}
            className='bg-[#F7F7F7] rounded-md min-h-10 flex items-center justify-center hover:ring-1 hover:ring-black cursor-pointer px-4 py-2'
          >
            <span>{size}</span>
          </div>
        ))}
      </div>
    </article>
  )
}