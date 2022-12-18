import React from "react";
import Image from "next/image";
import dots from "../public/dots2.svg";
export default function HeaderComponent() {
  return (
    <div className="h-36 w-full flex items-end text-5xl px-8 pb-2 relative">
      <div className="flex justify-between  2xl:gap-10 items-end md:w-[80%] lg:w-[90%] 2xl:w-[95%] relative">
        <span className="lg:text-[45px] font-bold xs:text-[30px] sm:text-[30px] sm:text-left xs:text-left">
          {" "}
          ADAPT ELEVATE DELIVER
        </span>
        <div className="md:w-[30%] md:h-[30%] xs:h-[90%] sm:h-[90%]  xs:w-[100%] sm:w-[100%]">
          {" "}
          <Image src={dots} alt="dots image" priority />
        </div>
        <span className="w-26 rounded-full shadow-xl absolute -bottom-8 xs:right-2 sm:right-2 lg:right-10 h-12 bg-white px-5 lg:py-3 xs:py-4 sm:py-4 lg:text-[30px] font-bold xs:text-[15px] sm:text-[15px] text-center z-30">
          CONTACT US
        </span>
      </div>
      <div className="lg:w-[20%] xs:w-[40%] sm:w-[40%] absolute -bottom-14 text-left left-2 h-12 sm:text-[20px] xs:text-[20px] lg:text-[25px] z-30 font-bold text-white">
        YOU ARE IN GOOD HANDS WITH US
      </div>
    </div>
  );
}
