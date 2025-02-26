"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { FaShoppingCart } from "react-icons/fa";

type CartType = {
  id: number;
  name: string;
  price: number;
  img: string;
  size: number | string;
  category: string;
  color?: string;
};

type CartTypeItens = CartType[];

export default function CarrinhoItens() {
  const [cartItems, setCartItems] = useState<CartTypeItens>([]); 

  useEffect(() => {
    const itemsFromLocalStorage: CartTypeItens = JSON.parse(localStorage.getItem('products') || '[]');
    setCartItems(itemsFromLocalStorage); 
  }, []);

  return (
    cartItems.length === 0 ? ( 
      <div className='w-full h-full '>
        <div className='flex gap-2 size-full  items-center justify-start'>
          <FaShoppingCart /> <span>Carrinho Vazio</span>
        </div>
      </div>
    ) : (
      cartItems.map((item) => (
        <div className='w-full h-auto flex flex-col lg:flex-row items-center justify-center' key={item.id}>
          <div className='h-full flex lg:w-2/3 w-full flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0'>
            <div className='h-full lg:w-1/2 w-full flex flex-col items-center justify-center lg:flex-row gap-2'>
              <div className='h-[45dvh] sm:h-[70dvh] lg:h-full w-full sm:full lg:w-1/5 flex items-center justify-center'>
                <Image src={item.img} className='w-full sm:w-[90%] h-full lg:h-16' width={827} height={560} alt={item.name} />
              </div>

              <div className='h-full lg:w-4/5 w-full flex flex-col flex-1 text-base lg:text-sm'>
                <p>Modelo: {item.name}</p>
                <p>Estilo: {item.category}</p>
                <p>Cor: {item.color ?? 'N/A'}</p>
                <p>Tamanho: {item.size}</p>
                <p className='lg:hidden'>Valor: R$ {item.price}</p>
              </div>
            </div>
            <div className='h-full lg:w-1/2 w-full flex lg:items-start lg:justify-center items-center justify-end lg:pt-5 mb-5'>
              <div className='w-24 h-10 flex'>
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

          <div className='h-full flex lg:w-1/3 w-full'>
            <div className='h-full w-1/2 hidden lg:flex items-start justify-center pt-5'>
              <span>1.800</span>
            </div>
            <div className='h-full w-full lg:w-1/2 flex items-center lg:items-start justify-between lg:justify-center lg:pt-5'>
              <span className='lg:hidden text-xl font-semibold'>Total a pagar </span>
              <span className='font-semibold'>3.600</span>
            </div>
          </div>
        </div>
      ))
    )
  );
}