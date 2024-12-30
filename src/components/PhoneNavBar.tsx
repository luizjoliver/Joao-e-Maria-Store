"use client"

import { categoriesMenu } from '@/contants'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx'

export default function PhoneNavBar() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSubCategory, setActiveSubCategory] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');

  function handleActiveMenu (){
    setActiveMenu((state) =>!state)
  }

  function handleCurrentCategory(categoryTitle:string){
    setCurrentCategory(categoryTitle)
    setActiveSubCategory((state) => !state)
  }

  return (
    <>
      <div className=" sm:hidden bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-600 shadow-md w-full min-h-28 fixed z-10 flex items-center px-14">
        <div className='w-full h-full flex justify-between items-center'>
          <Link href={"/inicio"}>
            <span className="text-3xl lg:text-5xl text-white font-thin tracking-widest">J M</span>
          </Link>
          <div className='flex gap-2'>
            <RxHamburgerMenu className=' text-white' size={25} onClick={handleActiveMenu}/>
            <FaShoppingCart className=' text-white' size={23}/> 
          </div>
        </div>
      </div>

      {/* Dropdown Menu Burgher */}
      {activeMenu && (
        <div className='fixed top-0 left-0 w-screen  h-screen bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-600 z-0 flex flex-col justify-around items-center'>
          {categoriesMenu.map((category) =>{

            const currentCategoryVerification = currentCategory === category.title

            return(
              <ul
              key={category.title}
              onClick={() => handleCurrentCategory(category.title)}
              className="text-white text-sm lg:text-base transition duration-300 ease-in-out"
            >
             
                {category.title}

                {currentCategoryVerification && activeSubCategory ? (category.subcategories.map((subcategory) => (
                          <div key={subcategory.subtitle} className="">
                            <h3 className="font-bold text-xl text-white   mb-2">
                              {subcategory.subtitle}
                            </h3>
                            <ul className="space-y-1">
                              {subcategory.items.map((item) => (
                                <Link href={`${item.link}`} key={item.name}>
                                  <li
                                    className="text-gray-100 opacity-80 hover:opacity-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                                  >
                                    {item.name}
                                  </li>
                                </Link>
                              ))}
                            </ul>
                          </div>
                        ))) :null}
              
            </ul>
            )
          })}
        </div>
      )} 
    </>
  )
}