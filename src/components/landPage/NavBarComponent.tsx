"use client";

import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import PhoneNavBar from "./PhoneNavBar";


export default function NavBarComponent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640); 
    }

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? <PhoneNavBar /> : <NavBar />;

}