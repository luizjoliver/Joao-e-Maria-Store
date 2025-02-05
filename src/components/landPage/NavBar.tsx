"use client";

import { categoriesMenu } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

export default function NavBar() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');

  function handleEnterMenu(title: string) {
    setCurrentCategory(title);
    setActiveMenu(true);
  }

  function handleLeaveMenu() {
    setActiveMenu(false);
    setCurrentCategory('');
  }

  return (
    <>
      <div className={`hidden sm:flex w-full  ${activeMenu ? 'h-[60%]' : 'h-28'} fixed z-10  flex-col`}
        onMouseLeave={handleLeaveMenu} >

        <div className="w-full min-h-28 bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-600 flex justify-center shadow-md">

          <div className="w-[12%] flex items-center justify-center">
            <Link href={"/"}><span className="text-3xl lg:text-5xl text-white font-thin tracking-widest">J M</span></Link>
          </div>

          <nav className="w-full flex items-center justify-start">
            <ul className="w-[190%] h-full flex items-center justify-around text-white font-medium">
              {categoriesMenu.map((category) => (
                <li
                  key={category.title}
                  onMouseEnter={() => handleEnterMenu(category.title)}
                  className="text-sm lg:text-base transition duration-300 ease-in-out hover:scale-105 hover:opacity-90"
                >
                  <Link
                    href={""}
                    className={`${currentCategory === category.title
                        ? "border-b-2 border-white opacity-100"
                        : "opacity-80"
                      }`}
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className=" w-[10%]  h-full flex gap-4 text-white text-opacity-90 items-center justify-center pr-2">

            <Link href={'/carrinho'}>
              <FaShoppingCart className="w-full min-w-5 min-h-10" />
            </Link>

            <Link href={'/carrinho'} className="rounded-full ">
              <CgProfile className="w-full min-w-5 min-h-10" />
            </Link>

          </div>

        </div>

        {/* Dropdown Menu */}
        {activeMenu && (
          <div
            className="w-full h-auto min-h-[40%] p-4 bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-600 opacity-95 flex flex-col justify-center items-center pt-10 shadow-lg transition-all duration-300"
            onMouseLeave={handleLeaveMenu}
          >
            <div className="h-full w-[60%]">
              <ul className="space-y-4">
                {categoriesMenu.map((category) => {
                  if (category.title === currentCategory) {
                    return (
                      <div
                        key={category.title}
                        className="flex gap-10 justify-around transition-all duration-500 ease-in-out"
                      >
                        {category.subcategories.map((subcategory) => (
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
                        ))}
                      </div>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}