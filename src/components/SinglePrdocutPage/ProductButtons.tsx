"use client"

import { CiHeart } from 'react-icons/ci';
import { ProductTypeProps } from '../ProductsCard';

type ProductButtonsTypeProps = {
    selectedColor: string | string[] | undefined
    selectedSize: string | string[] | undefined
    product: ProductCartType
}

type ProductCartType = ProductTypeProps

export default function ProductButtons({ selectedColor, selectedSize, product }: ProductButtonsTypeProps) {

    



    function handleAddToCart() {
 
    const allProductsFromLocalStorage = localStorage.getItem('products');

    const productsArray :ProductCartType[] | [] = allProductsFromLocalStorage ? JSON.parse(allProductsFromLocalStorage) : [];

    const productToAdd = {
        quantity:1,
        color: selectedColor,
        size: selectedSize,
        ...product
    };




    localStorage.setItem('products', JSON.stringify([...productsArray, productToAdd]));
    }

    return (
        <div className='w-full p-2 h-1/3  flex flex-col  gap-4 items-center justify-start md:justify-end  '>
            <button
                className="px-4 py-2 bg-black text-white rounded-full hover:bg-opacity-80 w-full"
                onClick={handleAddToCart}
           
            >
                Comprar
            </button>

            <div className='w-full flex items-center bg-[#F7F7F7] justify-center gap-2 px-4 py-2   text-black rounded-full  hover:ring-1 hover:ring-black '>
                <button className=' w-full '

                > Favoritar </button>
                <CiHeart />
            </div>
        </div>
    )
}
