"use client"

import Link from 'next/link'
import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { IoMdMenu } from 'react-icons/io'
import MenuModal from './MenuModal'


export default function PhoneNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)



  return (
    <>
      <header className="w-full min-h-28 bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-600 fixed z-10 overflow-hidden">
        <nav className="flex items-center justify-between px-5 h-28">
          <Link href="/">
            <h1 className="text-3xl text-white font-thin tracking-widest">J M</h1>
          </Link>

          <div className="flex gap-4 text-white">
            <Link href={'/carrinho'}>
              <FaShoppingCart className="text-2xl" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <IoMdMenu className="text-2xl" />
            </button>
          </div>
        </nav>
      </header>

      {isMenuOpen && <MenuModal setIsMenuOpen={setIsMenuOpen} />}
    </>
  )
}