import React, { useState } from "react";
import { CiDark } from "react-icons/ci";
import { BsFillSunFill } from "react-icons/bs";
import Image from "next/image";
import { Turn as Hamburger } from "hamburger-react";
import logo from "../public/logo.png";
export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setOpen] = useState(false);
  return (
    <div className=" w-full bg-white shadow-md h-14 flex sm:justify-between xs:justify-between flex-row sticky top-0 z-50 ">
      <div className="flex w-24 h-14 justify-start items-center">
        <Image
          src={logo}
          alt="navbar logo image"
          width={80}
          height={200}
          priority
          placeholder="blur"
        />
      </div>
      <div className="flex w-full justify-center items-end sm:hidden xs:hidden md:flex">
        <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-500 text-sm">
          Home
        </div>
        <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-500 text-sm">
          Portfolio
        </div>
        <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-500 text-sm">
          Contact
        </div>
        <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-500 text-sm">
          About Us
        </div>
      </div>
      <div className="flex w-20 h-14  justify-center items-center cursor-pointer transition-all duration-500">
        {darkMode ? (
          <CiDark
            size="1.5rem"
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          />
        ) : (
          <BsFillSunFill
            size="1.5rem"
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          />
        )}
        <div className="md:hidden lg:hidden xs:flex sm:flex justify-center items-center cursor-pointer ">
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        </div>
      </div>
    </div>
    
  );
}
