import React from "react";
import Image from "next/image";
import dots from "../public/dots2.svg";
export default function HeaderComponent() {
  return (
    <div className="h-36 w-full flex items-end text-5xl px-8 pb-2 relative">
      <div className="flex justify-between  2xl:gap-10 items-end md:w-[80%] lg:w-[90%] 2xl:w-[95%] relative">
        <span className="xs:text-[30px] sm:text-[30px] sm:text-center xs:text-center"> ADAPT ELEVATE DELIVER</span>
       <div className="md:w-[30%] md:h-[30%] xs:h-[90%] sm:h-[90%]  xs:w-[100%] sm:w-[100%]" > <Image src={dots} alt="dots image" priority /></div>
        <div className="w-26 rounded-full shadow-xl absolute -bottom-8 right-10 h-12 bg-white px-5 py-4 text-[35px] xs:text-[15px] sm:text-[15px] text-center z-30">
          CONTACT US
        </div>
      </div>
      {/* <div
        className="w-[40%] absolute -bottom-14 text-left left-2 h-12  text-[25px] z-30"
      >
        ELEVATING THE RAW AESTHETIC FUNCTIONAL ESSENCE OF TRADITIONAL ETHIOPIAN
        DESIGN BY REINTERPRETING IT IN A CONTEMPORARY MANNER
      </div> */}
    </div>
  );
}
