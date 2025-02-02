import React from 'react'
import {  BiSolidArrowFromLeft, BiSolidArrowFromRight } from 'react-icons/bi'

export default function PaginationProducts() {
  return (
    <div className=' hidden xl:block w-1/2 h-9'>
        <ul className='flex items-center justify-center gap-9 w-full h-full '>
            <li className='cursor-pointer '><BiSolidArrowFromRight/> </li>
            <li className='cursor-pointer hover:bg-black hover:transition hover:duration-300 hover:ease-out hover:rounded-md hover:text-white px-4 py-2 '>1</li>
            <li className='cursor-pointer hover:bg-black hover:transition hover:duration-300 hover:ease-out hover:rounded-md hover:text-white px-4 py-2 '>2</li>
            <li className='cursor-pointer hover:bg-black hover:transition hover:duration-300 hover:ease-out hover:rounded-md hover:text-white px-4 py-2 '>3</li>
            <span>...</span>
            <li className='cursor-pointer hover:bg-black hover:transition hover:duration-300 hover:ease-out hover:rounded-md hover:text-white px-4 py-2 '>24</li>
            <li className='cursor-pointer '><BiSolidArrowFromLeft/></li>
        </ul>         
    </div>
  )
}
