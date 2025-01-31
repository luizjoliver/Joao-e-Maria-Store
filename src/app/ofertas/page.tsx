import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { Products} from '@/constants'
import React from 'react'

export default function OfertasPage() {
  return (
    <main className="h-screen w-screen pt-28 bg-slate-100 flex flex-col   ">

      <section className='w-full h-full flex  items-center justify-center'>
        <div className='w-[90%] h-[95%]  flex items-center justify-center gap-2'>
          <div className='bg-white w-[20%] h-full'>

          </div>
          <div className='w-full h-full  flex flex-col items-center justify-center '>
            <h2 className=' self-start text-2xl'>Ofertas JM</h2>

            <div className="  w-[80%] h-full grid  grid-cols-2 lg:grid-cols-3 lg:grid-rows-2  gap-4 p-4">

            {Products.map((product) => <ProductCard key={product.id} img={product.img} name={product.name} price={product.price} category={product.category}/>)}


            </div>

            <div className='bg-white w-full h-9'>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
