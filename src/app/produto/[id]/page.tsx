import React from 'react'

export default function ProdutoPage({ params }: { params: { id: string } }) {
    const id = params.id

  return (
    <div className='w-full h-full pt-28'>Produto {id}</div>
  )
}
