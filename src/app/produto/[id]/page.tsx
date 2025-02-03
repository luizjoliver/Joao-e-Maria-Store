
import CarouselSingleProduct from '@/components/CarouselSingleProduct'
import Footer from '@/components/landPage/Footer'



export default async function ProdutoPage({
  params

}: {
  params: Promise<{ id: number }>

}) {

  const id = (await params).id

  return (
    <div className=' w-full h-auto pt-28 flex flex-col items-center justify-center'>
      
      <div className=' w-full h-[calc(100vh-112px)] flex items-center py-4 justify-center'>

        <div className='  h-[80%] w-[65%] flex gap-2'>

          <CarouselSingleProduct productId={id} />

          <div className='h-full w-[30%] bg-black '>

          </div>
        </div>


      </div>

      <div className='w-full  h-[30vh] flex items-center justify-center flex-col  gap-4'>
        <span>Veja também</span>
          <div className=' flex size-full gap-4 p-2'>
              <div className='bg-slate-600 size-full'>1</div>
              <div className='bg-slate-600 size-full'>2</div>
              <div className='bg-slate-600 size-full'>3</div>
              <div className='bg-slate-600 size-full'>4</div>
          </div>
      </div>

      <Footer/>

    </div>
  )
}
