"use client"

import { CiHeart } from 'react-icons/ci';
import {  ProductTypeProps } from '../ProductsCard';
import { toast } from 'sonner';

type ProductButtonsTypeProps = {
    selectedColor: string | string[] | undefined
    selectedSize: string | string[] | undefined
    product: ProductTypeProps
}



type ProductCartType = {
    id:number;
    category:string;
    size:number | string;
    color:string;
    price:number;
    name:string;
    quantity:number;
    featured:boolean;
}

export default function ProductButtons({ selectedColor, selectedSize, product }: ProductButtonsTypeProps) {

    



 function handleAddToCart() {
 
    const allProductsFromLocalStorage = localStorage.getItem('products');

    const productsArray : ProductCartType[] | [] = allProductsFromLocalStorage ? JSON.parse(allProductsFromLocalStorage) : [];

    const productToAdd = {
        id:product.id,
        quantity:1,
        color: selectedColor,
        size: selectedSize,
        category:product.category,
        price:product.price,
        name:product.name,
        featured:product.featured,
        img:product.img
    };
    

 const existingProductIndex = productsArray.findIndex(item => 
     item.id === product.id &&
     item.color === selectedColor &&
     item.size === selectedSize
 );

 if(existingProductIndex !== -1){
    productsArray[existingProductIndex].quantity += 1;
    localStorage.setItem('products', JSON.stringify([...productsArray]));
    toast.success('Produto Adicionado ao Carrinho!', {
        style: { backgroundColor: '#22c55e', color: 'white' } 
    });
 }else{
    localStorage.setItem('products', JSON.stringify([...productsArray, productToAdd]));
    toast.success('Produto Adicionado ao Carrinho!', {
        style: { backgroundColor: '#22c55e', color: 'white' } 
    });
 }


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
