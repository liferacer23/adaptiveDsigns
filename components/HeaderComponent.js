import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dots from "../public/dots2.svg";
export default function HeaderComponent() {
  return (
    <motion.div
      id="Header"
      className="sm:h-12 xs:h-12 lg:h-12 w-full flex items-end text-5xl px-8 pb-2 relative py-12"
    >
      <div className="sm:w-full xs:w-full flex  2xl:gap-10 items-end md:w-[100%] lg:w-[90%] 2xl:w-[100%] relative ">
        {/* <div className="md:w-[30%] md:h-[30%] xs:h-[90%] sm:h-[100%]  xs:w-[40%] sm:w-[40%] lg:pl-10">
          {" "}
          <Image src={dots} alt="dots image" priority />
        </div> */}
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
        className="lg:w-[50%] md:w-[40%] xs:w-[60%] sm:w-[60%] flex items-center justify-start absolute sm:-bottom-14 xs:-bottom-14 lg:-bottom-13 text-left left-0 h-[fit-content] sm:text-[21px] xs:text-[21px] lg:text-[28px] z-30 font-bold text-white
      bg-gradient-to-r from-primary px-4 py-4
      "
      >
        ADAPT &#183; ELEVATE &#183; DELIVER
      </h2>
    </motion.div>
  );
}
