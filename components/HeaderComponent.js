import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dots from "../public/dots2.svg";
export default function HeaderComponent() {
  return (
    <motion.div
      id="Header"
      className="sm:h-32 xs:h-32 lg:h-20 w-full flex items-end text-5xl px-8 pb-2 relative py-12"
    >
      <div className="flex justify-between  2xl:gap-10 items-end md:w-[80%] lg:w-[90%] 2xl:w-[95%] relative ">
        <h1 className="lg:text-[45px] font-bold xs:text-[30px] sm:text-[30px] sm:text-left xs:text-left">
          {" "}
          ADAPT ELEVATE DELIVER
        </h1>
        <div className="md:w-[30%] md:h-[30%] xs:h-[90%] sm:h-[100%]  xs:w-[100%] sm:w-[100%] lg:pl-10">
          {" "}
          <Image src={dots} alt="dots image" priority />
        </div>
        <motion.span
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="w-26 rounded-full shadow-xl absolute -bottom-8 xs:right-1 sm:right-1 lg:right-10 h-12 bg-white px-5 lg:py-3 xs:py-4 sm:py-4 lg:text-[30px] font-bold xs:text-[15px] sm:text-[15px] text-center z-40"
        >
          CONTACT US
        </motion.span>
      </div>
      <h2
        className="lg:w-[20%] xs:w-[60%] sm:w-[60%] absolute sm:-bottom-12 xs:-bottom-12 lg:-bottom-16 text-left left-0 h-[fit-content] sm:text-[15px] xs:text-[15px] lg:text-[25px] z-30 font-bold text-white
      bg-gradient-to-r from-primary px-4 py-2
      "
      >
        YOU ARE IN GOOD HANDS WITH US
      </h2>
    </motion.div>
  );
}
