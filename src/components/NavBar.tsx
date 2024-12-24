"use client";

import { categoriesMenu } from "@/contants";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');

  function handleEnterMenu(title) {
    setCurrentCategory(title);
    setActiveMenu(true);
  }

  function handleLeaveMenu() {
    setActiveMenu(false);
    setCurrentCategory('');
  }

  return (
    <>
      <div className="w-full h-[60%] fixed z-10 flex flex-col">
        {/* Top Navbar */}
        <div className="w-full min-h-28 bg-gradient-to-r from-amber-800 via-amber-700 to-yellow-600 flex justify-center shadow-md">
          <div className="w-[12%] flex items-center justify-center">
            <span className="text-5xl text-white font-thin tracking-widest">J M</span>
          </div>

          <nav className="w-full flex items-center justify-start">
            <ul className="w-[190%] h-full flex items-center justify-around text-white font-medium">
              {categoriesMenu.map((category) => (
                <li
                  key={category.title}
                  onMouseEnter={() => handleEnterMenu(category.title)}
                  className="transition duration-300 ease-in-out hover:scale-105 hover:opacity-90"
                >
                  <Link
                    href={""}
                    className={`${
                      currentCategory === category.title
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
                            <h3 className="font-bold text-xl text-white underline underline-offset-4 mb-2">
                              {subcategory.subtitle}
                            </h3>
                            <ul className="space-y-1">
                              {subcategory.items.map((item) => (
                                <li
                                  key={item}
                                  className="text-white opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                                >
                                  {item}
                                </li>
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