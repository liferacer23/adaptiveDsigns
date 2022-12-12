import React, { useState } from "react";
import { CiDark } from "react-icons/ci";
import { BsFillSunFill } from "react-icons/bs";
import Image from "next/image";
import { Turn as Hamburger } from "hamburger-react";
import logo from "../public/logo.svg";
export default function Navbar() {
  // const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="md:w-[100vw] bg-primary shadow-md h-[3rem] flex sm:justify-between xs:justify-between flex-row sticky top-0 z-50 overflow-y-visible md:pl-11 sm:pl-4 xs:pl-4 sm:w-[100vw] xs:w-[100vw] z-50">
      <div className="flex w-[60%] sm:w-[80%] xs:w-[80%] gap-3 font-medium">
        <div className="flex bg-white text-white xs:w-[6rem] sm:w-[6rem] md:w-[6rem] h-[6rem] px-2 justify-center items-center shadow-2xl rounded-b-full ">
          <Image
            src={logo}
            alt="navbar logo image"
            width={70}
            height={200}
            priority
          />
        </div>
        <span className="text-white text-xl h-full w-full flex items-center">ADAPTIVE DESIGNS</span>
      </div>
      <div className="flex w-full justify-end items-center md:hidden sm:hidden xs:hidden lg:flex">
        <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm text-white">
          HOME
        </div>
        <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm text-white">
          SERVICES
        </div>
        <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm text-white">
          PORTFOLIO
        </div>
        <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm text-white">
          ABOUT
        </div>
        <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm text-white">
          TEAM
        </div>
        <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm text-white">
          CLIENTS
        </div>
        <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm text-white">
          BLOG
        </div>
        <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm text-white">
          CONTACT
        </div>
      </div>
      <div className="flex w-20 h-14  justify-center items-center cursor-pointer transition-all duration-500">
        <div className="md:flex lg:hidden xs:flex sm:flex justify-center items-center cursor-pointer ">
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} color="#fff" />
        </div>
      </div>
    </div>
  );
}
