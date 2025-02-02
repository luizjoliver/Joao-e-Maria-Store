"use client"


import { ProductsFeatured, ProductsFeatured2 } from '@/constants'
import Carousel from './Carousel'

export default function CarouselSection() {



  return (
    <section className="  w-full  h-[100vh]   flex flex-col items-center justify-center gap-10">


        <h3 className=" text-center  text-4xl  w-full h-auto">Destaques</h3>
        <div className="w-full h-full flex items-center justify-center">
          {/* Carrosell 2 linhas */}

          <div  className="   w-full h-[80%] lg:w-[90%] xl:w-[70%]  flex flex-col gap-8  ">

              {/* Carrosell 1 */}
              <h2 className='text-center'>Mais vendidos </h2>
              <Carousel products={ProductsFeatured} />
            {/* Carrosell 2  */}
            <h2 className='text-center'>Promoção </h2>
              <Carousel products={ProductsFeatured2}/> 

          </div>

        </div>


      </section>
  )
}
