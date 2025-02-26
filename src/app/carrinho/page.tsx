// import Image from 'next/image'
import CarrinhoSection from '@/components/CarrinhoPage/CarrinhoSection';
// import { FiMinus, FiPlus } from 'react-icons/fi'
// import { GoTrash } from 'react-icons/go'

export default function CarrinhoPage() {

  

  return (
    <main className='pt-28 w-full min-h-screen flex items-center justify-center '>
      <div className='w-full lg:w-[1100px] min-h-[80dvh]  flex items-center flex-col '>

        <nav className='bg-slate-200 lg:rounded-r-md lg:rounded-l-md w-full h-14 flex  text-sm gap-1 mt-2' >
          <div className='bg-slate-600 w-1/3 h-full lg:rounded-l-md flex items-center justify-center gap-2'>
            <span>Carrinho</span>
            <div className='size-5 rounded-full bg-black flex items-center justify-center'>
              <span className='text-white text-xs sm:text-sm'>1</span>
            </div>
          </div>

          <div className='w-1/3 h-full flex items-center justify-center gap-2'>
            <span>Identificação</span>
            <div className='size-5 rounded-full bg-black flex items-center justify-center'>
              <span className='text-white text-xs sm:text-sm'>2</span>
            </div>
          </div>

          <div className='w-1/3 h-full flex items-center justify-center gap-2'>
            <span>Pagamento</span>
            <div className='size-5 rounded-full bg-black flex items-center justify-center'>
              <span className='text-white text-xs sm:text-sm'>3</span>
            </div>
          </div>
        </nav>

        <div className='w-full h-20  hidden lg:flex '>
          <div className='w-2/3 h-full  flex items-center justify-between'>
            <div className='h-full w-1/2 flex justify-start items-center'>
              <span>Produto</span>
            </div>
            <div className='h-full w-1/2 flex justify-center items-center'>
              <span>Quantidade</span>
            </div>
          </div>

          <div className='w-1/3 h-full  flex'>
            <div className='h-full w-1/2 flex justify-center items-center'>
              <span>Valor Unitário</span>
            </div>
            <div className='h-full w-1/2 flex justify-center items-center'>
              <span>Valor Total</span>
            </div>
          </div>
        </div>

       <CarrinhoSection/>
       
      </div>
    </main>
  );
}
