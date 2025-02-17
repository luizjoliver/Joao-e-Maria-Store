import CarouselSingleProduct from '@/components/CarouselSingleProduct';
import NumerationProductComponent from '@/components/SinglePrdocutPage/NumerationProduct';
import RecomendadedProducts from '@/components/SinglePrdocutPage/RecomendadedProducts';
import { Products } from '@/constants';
import { CiHeart } from 'react-icons/ci';


export default async function ProdutoPage({
  params

}: {
  params: Promise<{ id: number }>

}) {

  const productId = (await params).id

  const productBasedOnId = Products[ productId  - 1 ]
   
  console.log(productBasedOnId);

  
  return (
    <div className=' w-full h-auto pt-28 flex gap-20 flex-col items-center justify-center '>

      <div className=' w-full md:h-[calc(100vh-112px)] h-[180vh]   flex flex-col  items-center py-4   justify-center '>

        <div className='  h-full w-full xl:w-[70%] lg:w-[90%] flex flex-col md:flex-row items-center justify-center gap-6 p-2 '>

          <CarouselSingleProduct productId={productId} />

          <div className='h-full w-full md:w-[30%]  flex flex-col items-center justify-center  gap-2'>

            <div className='w-full p-2 h-1/3 flex flex-col '>
              <h1 className='text-2xl font-semibold'>{productBasedOnId.name}</h1>
              <span className='text-opacity-70 text-black'>{productBasedOnId.category}</span>
              <span className='text-lg font-normal'>R$ {productBasedOnId.price}  no Pix</span>
              <span>ou</span>
              <span>R$ {productBasedOnId.price} em até 5x sem juros</span>

            </div>

            <div className='w-full h-1/2   '>

             <NumerationProductComponent/>

            </div>

            <div className='w-full p-2 h-1/3  flex flex-col  gap-4 items-center justify-start md:justify-end  '>
              <button className='px-4 py-2 bg-black  text-white rounded-full hover:bg-opacity-80 w-full'>Comprar</button>
              <div className='w-full flex items-center bg-[#F7F7F7] justify-center gap-2 px-4 py-2   text-black rounded-full  hover:ring-1 hover:ring-black'>
                <button className=' w-full'> Favoritar </button>
                <CiHeart />
              </div>
            </div>

          </div>
        </div>


      </div>

    <RecomendadedProducts/>

      {/* <Footer /> */}

    </div>
  )
}
