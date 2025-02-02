"use client"

import { categoriesMenu } from '@/constants'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

const menuItems = categoriesMenu

export default function PhoneNavBar() {

  const [menu, setMenu] = useState<boolean>(false)
  const [currentCategorie, setcurrentCategorie] = useState<string>("")
  const [currentSubCategorie, setcurrentSubCategorie] = useState<number | null>()


  function handleClickSubCategorieTitle(subCategorieTitle: number) {

    setcurrentSubCategorie((currentSub) => currentSub !== subCategorieTitle ? subCategorieTitle : null)

  }

  function handleClickCategoriTitle(categorieTitle: string) {

    setcurrentCategorie((currentCategorie) => categorieTitle !== currentCategorie ? categorieTitle : "")
    setcurrentSubCategorie(null)

  }

  function handleClickMenuBurger() {
    setMenu((menu) => !menu)
    setcurrentCategorie("")
    setcurrentSubCategorie(null)
  }

  return (
    <>
      <header>
        <nav className='w-full min-h-28 bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-600 flex items-center justify-between px-5 fixed z-10  '>

          <div className="w-auto flex items-center justify-center ">
            <Link href={"/"}><h1 className="text-3xl  text-white font-thin  tracking-widest">J M</h1></Link>
          </div>
          <div className=''>
            <ul className='flex justify-center items-center gap-4'>
              <li><FaShoppingCart size={22} color='white' /></li>
              <li>
                <button onClick={handleClickMenuBurger} aria-label="Toggle menu">
                  <IoMdMenu size={25} color='white' />
                </button>
              </li>
            </ul>
          </div>



        </nav>
      </header>

      {menu && (
        <aside
          className={'fixed top-0 left-0 w-screen h-screen bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-600 flex flex-col items-center justify-center z-40 transition-all duration-30'}
        >

          <button onClick={handleClickMenuBurger} className="absolute top-5 right-5 text-white" aria-label="Fechar menu">
            <IoMdClose size={28} />
          </button>


          <nav className="text-white text-2xl flex flex-col justify-around items-center w-full h-full">
            {menuItems.map((item) => {

              const isIncurrentCategorie = item.title === currentCategorie


              return (
                <div key={item.title} className='w-full flex flex-col items-center '>
                  <h2
                    onClick={() => handleClickCategoriTitle(item.title)}
                    className={`p-3 text-lg cursor-pointer  rounded-md transition-all border-2 border-slate-700 border-opacity-20 ${isIncurrentCategorie ? 'bg-slate-800' : ''}`}
                  >
                    {item.title}
                  </h2>

                  {isIncurrentCategorie && (
                    <ul className='pl-6 mt-2 space-y-2 text-gray-300'>
                      {item.subcategories.map((sub) => {

                        const isInCurrentSubCategorie = sub.id === currentSubCategorie
                        return (
                          <li key={sub.id} className='p-2 hover:text-white transition-all'>
                            <span onClick={() => handleClickSubCategorieTitle(sub.id)}>{sub.subtitle}</span>

                            {isInCurrentSubCategorie && (
                              <ul className='flex flex-col gap-4  px-4 pt-5'>
                                {sub.items.map((item) => (
                                  <li className='text-sm' key={item.link}>{item.name}</li>
                                ))}
                              </ul>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  )}


                </div>
              )
            })}

          </nav>

        </aside>

      )
      }
    </>
  )
}
