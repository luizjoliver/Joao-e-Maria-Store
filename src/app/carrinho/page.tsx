// import Image from 'next/image'
import Image from 'next/image'
import React from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
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

        <div className=' w-full flex-1 flex flex-col justify-between items-center gap-10 p-2 '>
          
          <div className='w-full h-auto flex flex-col lg:flex-row items-center justify-center  '>
            <div className='h-full flex lg:w-2/3 w-full flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0'>
              <div className=' h-full lg:w-1/2 w-full flex flex-col items-center justify-center lg:flex-row gap-2'>
                <div className='h-[45dvh] sm:h-[70dvh] lg:h-full w-full sm:full lg:w-1/5  flex items-center justify-center  '>
                  <Image src={'/nike1.png'} className='w-full sm:w-[90%] h-full lg:h-16 ' width={827} height={560} alt='' />
                </div>

                <div className='h-full lg:w-4/5 w-full  flex flex-col flex-1  text-base lg:text-sm'>
                  <p>Modelo: Nike</p>
                  <p>Cor: Preto</p>
                  <p>Tamanho: Preto</p>
                  <p className='lg:hidden'>Valor: R$ 1.800</p>
                </div>
              </div>
              <div className='h-full lg:w-1/2 w-full flex lg:items-start lg:justify-center items-center justify-end lg:pt-5 mb-5'>
                <div className='w-24 h-10  flex '>
                  <button className='ring-1 ring-slate w-1/3 h-full flex items-center justify-center'>
                    <BiMinus />
                  </button>
                  <div className='ring-1 ring-slate w-1/3 h-full flex items-center justify-center'><span>1</span></div>
                  <button className='ring-1 ring-slate w-1/3 h-full flex items-center justify-center'>
                    <BiPlus />
                  </button>
                </div>
              </div>
            </div>

            <div className='h-full flex lg:w-1/3 w-full '>
              <div className=' h-full w-1/2 hidden lg:flex items-start justify-center pt-5'>
                <span>1.800</span>
              </div>
              <div className=' h-full w-full lg:w-1/2 flex items-center lg:items-start justify-between lg:justify-center lg:pt-5'>
                <span className='lg:hidden text-xl font-semibold'>Total a pagar </span>
                <span className=' font-semibold'>3.600</span>
              </div>
            </div>
          </div>

          <div className='w-full h-auto flex flex-col lg:flex-row items-center justify-center  '>
            <div className='h-full flex lg:w-2/3 w-full flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0'>
              <div className=' h-full lg:w-1/2 w-full flex flex-col items-center justify-center lg:flex-row gap-2'>
                <div className='h-[45dvh] sm:h-[70dvh] lg:h-full w-full sm:full lg:w-1/5  flex items-center justify-center  '>
                  <Image src={'/nike2.png'} className='w-full sm:w-[90%] h-full lg:h-16 ' width={827} height={560} alt='' />
                </div>

                <div className='h-full lg:w-4/5 w-full  flex flex-col flex-1  text-base lg:text-sm'>
                  <p>Modelo: Nike</p>
                  <p>Cor: Preto</p>
                  <p>Tamanho: Preto</p>
                  <p className='lg:hidden'>Valor: R$ 1.800</p>
                </div>
              </div>
              <div className='h-full lg:w-1/2 w-full flex lg:items-start lg:justify-center items-center justify-end lg:pt-5 mb-5'>
                <div className='w-24 h-10  flex '>
                  <button className='ring-1 ring-slate w-1/3 h-full flex items-center justify-center'>
                    <BiMinus />
                  </button>
                  <div className='ring-1 ring-slate w-1/3 h-full flex items-center justify-center'><span>1</span></div>
                  <button className='ring-1 ring-slate w-1/3 h-full flex items-center justify-center'>
                    <BiPlus />
                  </button>
                </div>
              </div>
            </div>

            <div className='h-full flex lg:w-1/3 w-full '>
              <div className=' h-full w-1/2 hidden lg:flex items-start justify-center pt-5'>
                <span>1.800</span>
              </div>
              <div className=' h-full w-full lg:w-1/2 flex items-center lg:items-start justify-between lg:justify-center lg:pt-5'>
                <span className='lg:hidden text-xl font-semibold'>Total a pagar </span>
                <span className=' font-semibold'>3.600</span>
              </div>
            </div>
          </div>

          <div className='w-full h-auto flex flex-col lg:flex-row items-center justify-center  '>
            <div className='h-full flex lg:w-2/3 w-full flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0'>
              <div className=' h-full lg:w-1/2 w-full flex flex-col items-center justify-center lg:flex-row gap-2'>
                <div className='h-[45dvh] sm:h-[70dvh] lg:h-full w-full sm:full lg:w-1/5  flex items-center justify-center  '>
                  <Image src={'/nike3.png'} className='w-full sm:w-[90%] h-full lg:h-16 ' width={827} height={560} alt='' />
                </div>

                <div className='h-full lg:w-4/5 w-full  flex flex-col flex-1  text-base lg:text-sm'>
                  <p>Modelo: Nike</p>
                  <p>Cor: Preto</p>
                  <p>Tamanho: Preto</p>
                  <p className='lg:hidden'>Valor: R$ 1.800</p>
                </div>
              </div>
              <div className='h-full lg:w-1/2 w-full flex lg:items-start lg:justify-center items-center justify-end lg:pt-5 mb-5'>
                <div className='w-24 h-10  flex '>
                  <button className='ring-1 ring-slate w-1/3 h-full flex items-center justify-center'>
                    <BiMinus />
                  </button>
                  <div className='ring-1 ring-slate w-1/3 h-full flex items-center justify-center'><span>1</span></div>
                  <button className='ring-1 ring-slate w-1/3 h-full flex items-center justify-center'>
                    <BiPlus />
                  </button>
                </div>
              </div>
            </div>

            <div className='h-full flex lg:w-1/3 w-full '>
              <div className=' h-full w-1/2 hidden lg:flex items-start justify-center pt-5'>
                <span>1.800</span>
              </div>
              <div className=' h-full w-full lg:w-1/2 flex items-center lg:items-start justify-between lg:justify-center lg:pt-5'>
                <span className='lg:hidden text-xl font-semibold'>Total a pagar </span>
                <span className=' font-semibold'>3.600</span>
              </div>
            </div>
          </div>

          <div className='w-full h-auto flex flex-col lg:flex-row items-center justify-center  '>
            <div className='h-full flex lg:w-2/3 w-full flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0'>
              <div className=' h-full lg:w-1/2 w-full flex flex-col items-center justify-center lg:flex-row gap-2'>
                <div className='h-[45dvh] sm:h-[70dvh] lg:h-full w-full sm:full lg:w-1/5  flex items-center justify-center  '>
                  <Image src={'/nike1.png'} className='w-full sm:w-[90%] h-full lg:h-16 ' width={827} height={560} alt='' />
                </div>

                <div className='h-full lg:w-4/5 w-full  flex flex-col flex-1  text-base lg:text-sm'>
                  <p>Modelo: Nike</p>
                  <p>Cor: Preto</p>
                  <p>Tamanho: Preto</p>
                  <p className='lg:hidden'>Valor: R$ 1.800</p>
                </div>
              </div>
              <div className='h-full lg:w-1/2 w-full flex lg:items-start lg:justify-center items-center justify-end lg:pt-5 mb-5'>
                <div className='w-24 h-10  flex '>
                  <button className='ring-1 ring-slate w-1/3 h-full flex items-center justify-center'>
                    <BiMinus />
                  </button>
                  <div className='ring-1 ring-slate w-1/3 h-full flex items-center justify-center'><span>1</span></div>
                  <button className='ring-1 ring-slate w-1/3 h-full flex items-center justify-center'>
                    <BiPlus />
                  </button>
                </div>
              </div>
            </div>

            <div className='h-full flex lg:w-1/3 w-full '>
              <div className=' h-full w-1/2 hidden lg:flex items-start justify-center pt-5'>
                <span>1.800</span>
              </div>
              <div className=' h-full w-full lg:w-1/2 flex items-center lg:items-start justify-between lg:justify-center lg:pt-5'>
                <span className='lg:hidden text-xl font-semibold'>Total a pagar </span>
                <span className=' font-semibold'>3.600</span>
              </div>
            </div>
          </div>

          

          {/* seção confimar compra */}
          <div className='w-full h-72 flex flex-col lg:flex-row '>

            <div className='lg:w-2/3 w-full h-full flex flex-col lg:flex-row gap-4 p-4'>

              <div className='h-full w-full lg:w-1/2 flex '>
                <div className='w-full h-2/3 flex flex-col items-start justify-center  gap-6 p-4'>
                  <h3 className='font-semibold text-xl'>Prazo de entrega</h3>
                  <div className='h-full lg:h-auto w-full ring-1 ring-black flex gap-2 items-center justify-between p-2 rounded-md'>
                    <input
                      placeholder='Ex:71980360'
                      className='bg-transparent outline-none px-2 w-[70%] flex-grow'
                      name='cep'
                      maxLength={8}
                    />
                    <button className='ring ring-slate-100 rounded-full  p-2 text-sm whitespace-nowrap flex-shrink-0 hover:ring-opacity-65 '>
                      Calcular
                    </button>
                  </div>
                </div>
              </div>

              <div className='h-full w-full lg:w-1/2 flex '>
                <div className='w-full h-2/3 flex flex-col items-start justify-center  gap-6 p-4'>
                  <h3 className='font-semibold text-xl'>Cupom de desconto</h3>
                  <div className='h-full lg:h-auto w-full ring-1 ring-black flex gap-2 items-center justify-between p-2 rounded-md'>
                    <input
                      className='bg-transparent outline-none px-2 w-[70%] flex-grow'
                      name='cupon'
                    />
                    <button className='ring ring-slate-100 rounded-full  p-2 text-sm whitespace-nowrap flex-shrink-0 hover:ring-opacity-65 '>
                      Aplicar
                    </button>
                  </div>
                </div>
              </div>

            </div>

            <div className='lg:w-1/3 w-full h-full  flex flex-col justify-between p-4 gap-4'>
              <div className='flex flex-col gap-6'>
                <p className='text-3xl font-semibold'>Resumo</p>
                <div className='flex items-center justify-between border-b-slate-300 border-b'>
                  <p>Valor dos produtos</p>
                  <p className='font-semibold'>R$3.000</p>
                </div>
                <div className='flex items-center justify-between border-b-slate-300 border-b'>
                  <p>Frete</p>
                  <p className='font-semibold'>R$30</p>
                </div>
                <div className='flex items-center justify-between border-b-slate-300 border-b'>
                  <p>Total da Compra</p>
                  <p className='font-semibold'>R$3.030</p>
                </div>
              </div>
              <button className='bg-black text-white rounded-lg p-2 hover:bg-opacity-80'>Continuar</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
