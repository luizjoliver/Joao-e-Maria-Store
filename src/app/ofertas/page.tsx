import Footer from '@/components/landPage/Footer'
import PaginationProducts from '@/components/PaginationProducts'
import ProductCard from '@/components/ProductsCard'
import { Products } from '@/constants'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

export default function OfertasPage() {
  return (
    <main className="   h-[300vh] lg:h-screen w-screen pt-28  flex flex-col items-center justify-center   ">

      <section className='w-screen h-full flex  sm:items-start items-center justify-center '>
        <div className=' w-screen lg:[90%] h-[95%]  flex items-center justify-center  p-4'>
          <div className='hidden lg:block  bg-[#DBDBDB] w-[20%] h-full'>

          </div>
          <div className=' w-full h-full  flex flex-col items-center justify-center ml-2'>

            <div className="w-full xl:w-[80%] lg:w-[95%]">
              <div className="w-full h-12 bg-white flex items-center rounded-full shadow-md  relative">
                <BiSearch className="absolute left-4 text-gray-500 cursor-pointer" size={24} />
                <input
                  type="text"
                  className="w-full pl-12  py-2 bg-transparent outline-none text-gray-700 text-lg placeholder-gray-400"
                  placeholder="Pesquisar produto..."
                />
              </div>
            </div>

            <div className="   w-full xl:w-[80%] lg:w-[95%] h-full lg:h-full grid  grid-cols-1 sm:grid-cols-2 auto-rows-auto lg:grid-cols-3 lg:grid-rows-2  gap-4 p-4">

              {Products.slice(0,6).map((product) => (

                <ProductCard key={product.id} product={product} />

              ))}


            </div>

            <PaginationProducts />

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
