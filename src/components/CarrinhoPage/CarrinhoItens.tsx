"use client"

import Image from 'next/image';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { CartTypeItens } from './CarrinhoSection';
import { FaShoppingCart } from 'react-icons/fa';
import { FaTrashCan } from 'react-icons/fa6';

type CarrinhoItemsProps = {
  cartItems: CartTypeItens;
  setCartItems: (newCartItens: CartTypeItens) => void;
};

export default function CarrinhoItens({ cartItems, setCartItems }: CarrinhoItemsProps) {
  
  function handleDeleteProductFromCart(index: number) {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
    localStorage.setItem('products', JSON.stringify(newCartItems));
  }

  function handleIncreaseQuantity(index: number) {
    const updatedCart = cartItems.map((item, i) => 
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('products', JSON.stringify(updatedCart));
  }

  function handleDecreaseQuantity(index: number) {
    const updatedCart = cartItems.map((item, i) => 
      i === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('products', JSON.stringify(updatedCart));
  }

  return (
    cartItems.length === 0 ? ( 
      <div className='w-full h-full '>
        <div className='flex gap-2 size-full items-center justify-start'>
          <FaShoppingCart/> <span>Carrinho Vazio</span>
        </div>
      </div>
    ) : (
      cartItems.map((item, index) => (
        <div className='w-full h-auto flex flex-col lg:flex-row items-center justify-center' key={index}>
          <div className='h-full flex lg:w-2/3 w-full flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0'>
            <div className='h-full lg:w-1/2 w-full flex flex-col items-center justify-center lg:flex-row gap-2'>
              <div className='h-[45dvh] sm:h-[70dvh] lg:h-full w-full sm:full lg:w-1/5 flex items-center justify-center'>
                <Image src={item.img[0].url[0]} className='w-full sm:w-[90%] h-full lg:h-16' width={827} height={560} alt={item.name} />
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
                <button className='ring-1 ring-slate w-1/3 h-full flex items-center justify-center' onClick={() => handleDecreaseQuantity(index)}>
                  <BiMinus />
                </button>
                <div className='ring-1 ring-slate w-1/3 h-full flex items-center justify-center'>
                  <span>{item.quantity}</span>
                </div>
                <button className='ring-1 ring-slate w-1/3 h-full flex items-center justify-center' onClick={() => handleIncreaseQuantity(index)}>
                  <BiPlus />
                </button>
              </div>
            </div>
          </div>

          <div className='h-full flex lg:w-1/3 w-full'>
            <div className='h-full w-1/2 hidden lg:flex items-start justify-center pt-5'>
              <span>R$ {item.price}</span>
            </div>
            <div className='h-full w-full lg:w-1/2 flex items-center lg:items-center justify-between lg:justify-center lg:pt-5 gap-4 '>
              <span className='lg:hidden text-xl font-semibold'>Total: R$ {item.price * item.quantity}</span>
              <span className='font-semibold'>{item.price * item.quantity}</span>
              <button className='hover:text-red-500 cursor-pointer' onClick={() => handleDeleteProductFromCart(index)}>
                <FaTrashCan />
              </button>
            </div>
          </div>
        </div>
      ))
    )
  );
}