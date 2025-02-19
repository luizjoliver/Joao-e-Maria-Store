import Image from 'next/image'
import React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { GoTrash } from 'react-icons/go'

export default function page() {
  return (
    <main className='pt-28 w-full h-screen flex items-center justify-center'>

      <div className='  h-[90%]   w-[1100px]  p-2 '>

        <ol className='w-full font-thin h-16  flex  rounded-md '>

          <li className='bg-slate-100 w-1/3 flex gap-2 items-center justify-center rounded-l-md' >
            <div className='bg-black rounded-full size-5 flex items-center justify-center text-white'>
              <span>1</span>
            </div>
            <span>Carrinho</span>
          </li>

          <li className='bg-black bg-opacity-15 w-1/3 flex gap-2 items-center justify-center'>
            <div className='bg-black rounded-full size-5 flex items-center justify-center text-white'>
              <span>2</span>
            </div>
            Indentificação
          </li>

          <li className='bg-black bg-opacity-15 w-1/3 gap-2 flex items-center justify-center rounded-r-md' >
            <div className='bg-black rounded-full size-5 flex items-center justify-center text-white'>
              <span>3</span>
            </div>
            Pagamento
          </li>

        </ol>

        <div className=' w-full flex flex-col h-1/3 border-b border-slate-300 '>

          <ul className='w-full h-1/3 flex '>

            <li className=' w-2/3 h-full flex '>

              <span className='h-full w-1/2  flex items-center justify-start'>
                Produto
              </span>

              <span className='h-full w-1/2  flex items-center justify-center'>
                Quantidade
              </span>

            </li>

            <li className='w-1/3 h-full flex'>
              <span className='h-full w-1/2  flex items-center justify-center'>
                Valor unitário
              </span>

              <span className='h-full w-1/2  flex items-center justify-center'>
                Valor total
              </span>
            </li>

          </ul>

          <div className='w-full h-2/3 flex '>

            <div className=' w-2/3 h-full flex '>

              <div className=' w-1/2 h-full flex'>

                <div className='h-full w-24  flex items-start'>

                  <div className='size-14  relative'>
                    <Image src={'/nike1.png'} alt='produto no carrinho' fill />
                  </div>

                </div>

                <div className='h-full w-full  flex flex-col '>
                  <span >
                    Air Max Md Runner 2024
                  </span>

                  <span className='text-sm'>
                    Cor : Branco
                  </span>
                  <span className='text-sm'>
                    Tamanho : 38
                  </span>

                  <span className='text-sm'>
                    Estilo : DZ5485-106
                  </span>

                </div>

              </div>

              <div className=' w-1/2 h-full flex items-start justify-center'>

                <div className='w-36 h-10  flex  ring-slate-200 ring-opacity-60 ring-1'>

                  <button className='h-full w-1/3 flex items-center justify-center ring-slate-200 ring-opacity-60 ring-1'>
                    <FiPlus className='text-slate-500' />
                  </button>
                  <div className='h-full w-1/3 flex items-center justify-center ring-slate-200 ring-opacity-60 ring-1'>
                    1
                  </div>
                  <button className='h-full w-1/3 ring-slate-200 ring-opacity-60 ring-1 flex items-center justify-center'>
                    <FiMinus className='text-slate-500' />
                  </button>


                </div>

              </div>

            </div>

            <div className=' w-1/3 h-full flex'>

              <div className=' w-1/2 h-full flex items-start justify-center '>
                <span>R$ 1.599,99</span>
              </div>

              <div className=' w-1/2 h-full relative gap-2 flex items-start justify-center font-semibold'>
                <span className='font-semibold'>R$ 3.199,99</span>

                <button className='absolute top-0 right-0 p-2'>
                  <GoTrash className='size-5 hover:text-opacity-50 text-black' />
                </button>
              </div>

            </div>





          </div>

        </div>

        <div className='w-full h-[calc(60%-16px)]   flex gap-6 '>

          <form className=' w-1/3 h-full  flex flex-col  gap-4 items-start justify-center'>

            <label className='text-xl font-normal ' htmlFor='delivery'>Prazo de Entrega</label>
            <div className=' bg-white outline-none ring-1 ring-black focus:ring-blue-900 rounded-md py-3 px-4 flex gap-2'>
              <input id='cupom' className='outline-none  w-2/3' placeholder='00000-000' maxLength={8} />
              <button className='w-1/3 py-1  rounded-full ring-1 ring-slate-300 hover:ring-black '>Calcular</button>
            </div>

          </form>

          <form className=' w-1/3 h-full flex flex-col gap-4 items-start justify-center'>

            <label className='text-xl font-normal ' htmlFor='cupom'>Cupom de desconto</label>
            <div className=' bg-white outline-none ring-1 ring-black focus:ring-blue-900 rounded-md py-3 px-4 flex gap-2'>
              <input id='cupom' className='outline-none  w-2/3' />
              <button className='w-1/3 py-1  rounded-full ring-1 ring-slate-300 hover:ring-black '>Aplicar</button>
            </div>

          </form>

          <div className=' w-1/3 h-full flex items-end justify-center'>

            <div className='w-full h-2/3 flex flex-col gap-4 '>

            <div className='w-full h-1/5 flex items-center border-b border-slate-300'>
            <span className='text-2xl font-medium'>Resumo</span>
            </div>

            <div className='w-full h-1/5 flex items-center justify-between border-b border-slate-300'>
            <span>Valor dos produtos</span>
            <span>R$ 1.599,99</span>
            </div>

            <div className='w-full h-1/5 flex items-center justify-between border-b border-slate-300'>
            <span>Frete</span>
            <span>A Calcular</span>
            </div>

            <div className='w-full h-1/5 flex items-center justify-between border-b border-slate-300'>
            <span>Total da compra</span>
            <span>R$ 3.199,99</span>
            </div>

            <div className='w-full h-1/5  '>
              <button className='w-full h-full bg-black text-white p-2 rounded-full flex items-center justify-center hover:text-opacity-85'>
                <span>Continuar</span>
              </button>
            </div>

            </div>

          </div>

        </div>



      </div>

    </main>
  )
}
