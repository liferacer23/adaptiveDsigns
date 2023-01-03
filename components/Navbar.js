import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Turn as Hamburger } from "hamburger-react";
import { AnimatePresence } from "framer-motion";
import logo from "../public/logo.svg";
import NavBarModal from "./NavBarModal";
import Link from "next/link";
export default function Navbar() {
  // const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);
  return (
    <div className="sticky top-0 z-50" id="navBar">
      <AnimatePresence>
        {isOpen && <NavBarModal setOpen={setOpen} isOpen={isOpen} />}
      </AnimatePresence>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:w-[100vw] bg-primary shadow-md h-[3rem] flex sm:justify-between xs:justify-between flex-row  overflow-y-visible md:pl-11 sm:pl-4 xs:pl-4 sm:w-[100vw] xs:w-[100vw] "
      >
        <div className="flex w-[60%] sm:w-[80%] xs:w-[80%] gap-3 font-medium">
          <Link href="#Header">
            <div className="flex bg-white text-white xs:w-[4.5rem] sm:w-[4.5rem] md:w-[5rem] lg:h-[5.5rem] xs:h-[5rem] sm:h-[5rem] px-2 justify-center items-center shadow-2xl rounded-b-full z-50">
              <Image
                src={logo}
                alt="navbar logo image"
                width={70}
                height={200}
                priority
              />
            </div>
          </Link>
          <span className="text-white text-xl h-full w-full flex items-center">
            ADAPTIVE DESIGNS
          </span>
        </div>
        <div className="flex w-full justify-end items-center md:hidden sm:hidden xs:hidden lg:flex">
          <Link href="#Header">
            <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm text-white">
              HOME
            </div>
          </Link>
          <Link href="#Services">
            <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm text-white">
              SERVICES
            </div>
          </Link>
          <Link href="#Portfolio">
            <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm text-white">
              PORTFOLIO
            </div>
          </Link>
          <Link href="#AboutUs">
            <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm text-white">
              ABOUT US
            </div>
          </Link>
          <Link href="#BeforeAndAfter">
            <div className="flex w-26 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm text-white">
              BEFORE & AFTER
            </div>
          </Link>
          <Link href="#Clients">
            <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm text-white">
              CLIENTS
            </div>
          </Link>
          <Link href="#Blog">
            <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm text-white">
              BLOG
            </div>
          </Link>
          <Link href="#ContactUs">
            <div className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm text-white">
              CONTACT
            </div>
          </Link>
        </div>
        <div className="flex w-20 h-14  justify-center items-center cursor-pointer transition-all duration-500">
          <div className="md:flex lg:hidden xs:flex sm:flex justify-center items-center cursor-pointer ">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={20}
              color="#fff"
              onClick={() => {
                setOpen(!isOpen);
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
