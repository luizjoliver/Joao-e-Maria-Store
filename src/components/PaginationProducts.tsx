import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function PaginationProducts() {
  return (
    <div className='w-1/2 h-9'>
      <ul className='flex items-center justify-center gap-4 md:gap-9 w-full h-full '>
        <li className='cursor-pointer '> <MdKeyboardArrowLeft /> </li>
        <li className='cursor-pointer hover:bg-black hover:transition hover:duration-300 hover:ease-out hover:rounded-md hover:text-white px-4 py-2 '>1</li>
        <li className='cursor-pointer hover:bg-black hover:transition hover:duration-300 hover:ease-out hover:rounded-md hover:text-white px-4 py-2 '>2</li>
        <li className='cursor-pointer hover:bg-black hover:transition hover:duration-300 hover:ease-out hover:rounded-md hover:text-white px-4 py-2 '>3</li>
        <span>...</span>
        <li className='cursor-pointer hover:bg-black hover:transition hover:duration-300 hover:ease-out hover:rounded-md hover:text-white px-4 py-2 '>24</li>
        <li className='cursor-pointer '> <MdKeyboardArrowRight /> </li>
      </ul>
    </div>
  )
}
