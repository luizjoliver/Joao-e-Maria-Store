"use client"

import { useEffect, useState } from 'react';
import CarrinhoItens from './CarrinhoItens';
import { ImgType } from '../ProductsCard';

export type CartType = {
  quantity:number;
  id: number;
  name: string;
  price: number;
  img: ImgType[];
  size: number | string;
  category: string;
  color?: string;
};

export type CartTypeItens = CartType[];

export default function CarrinhoSection() {

  const [cartItems, setCartItems] = useState<CartTypeItens>([]);

  useEffect(() => {
    const itemsFromLocalStorage = JSON.parse(localStorage.getItem('products') || '[]');
    setCartItems(itemsFromLocalStorage);
  }, []);

  // const totalCompra = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className=' w-full flex-1 flex flex-col justify-between items-center gap-10 p-2 '>
          
    <CarrinhoItens cartItems={cartItems} setCartItems={setCartItems}/>  

      
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
  )
}




