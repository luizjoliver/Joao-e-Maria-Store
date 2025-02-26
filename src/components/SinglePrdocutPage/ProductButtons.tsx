"use client"

import { CiHeart } from 'react-icons/ci';
import { ImgType } from '../ProductsCard';

type ProductButtonsTypeProps = {
    selectedColor: string | string[] | undefined
    selectedSize: string | string[] | undefined
    product: ProductCartType
}

type ProductCartType = {
    id: number;
    name: string;
    price: number;
    img: ImgType[];
    category: string;
    featured: boolean;
}

export default function ProductButtons({ selectedColor, selectedSize, product }: ProductButtonsTypeProps) {

    console.log(selectedColor, selectedSize);



    function handleAddToCart() {
        // Impede a execução caso a cor ou o tamanho não estejam selecionados
    if (!selectedColor || !selectedSize) {
        console.warn("Por favor, selecione uma cor e um tamanho antes de adicionar ao carrinho.");
        return;
    }

    const allProductsFromLocalStorage = localStorage.getItem('products');

    const productsArray = allProductsFromLocalStorage ? JSON.parse(allProductsFromLocalStorage) : [];

    const productToAdd = {
        color: selectedColor,
        size: selectedSize,
        ...product
    };

    localStorage.setItem('products', JSON.stringify([...productsArray, productToAdd]));
    }

    return (
        <div className='w-full p-2 h-1/3  flex flex-col  gap-4 items-center justify-start md:justify-end  '>
            <button
                className="px-4 py-2 bg-black text-white rounded-full hover:bg-opacity-80 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
                onClick={handleAddToCart}
                disabled={!selectedColor || !selectedSize}
            >
                Comprar
            </button>

            <div className='w-full flex items-center bg-[#F7F7F7] justify-center gap-2 px-4 py-2   text-black rounded-full  hover:ring-1 hover:ring-black disabled:bg-red-300'>
                <button className=' w-full disabled:text-red-300'

                > Favoritar </button>
                <CiHeart />
            </div>
        </div>
    )
}
