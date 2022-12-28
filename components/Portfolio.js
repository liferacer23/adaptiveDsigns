import React from "react";
import Image from "next/image";
import dots from "../public/dots2.svg";
export default function Portfolio() {
  return (
    <div
      id="Portfolio"
      className="bg-white text-white lg:px-20 sm:px-5 xs:px-5 flex flex-col items-center justify-start"
    >
      <div className="flex justify-between pt-3 w-full">
        <div className="flex flex-col items-start justify-center relative w-52 h-40 bg-white">
          <span className="text-[130px] text-black">02</span>
          <div className="h-14 flex flex-col w-full absolute bottom-0 bg-white">
            <span className="font-bold text-2xl text-black">PORTFOLIO</span>
            <span className="font-bold text-md text-black">WHAT WE DO</span>
          </div>
        </div>
        <div className="md:w-[30%] md:h-[30%] xs:h-[90%] sm:h-[90%]  xs:w-[100%] sm:w-[100%]">
          {" "}
          <Image src={dots} alt="dots image" priority />
        </div>
      </div>
      <div className="2xl:h-[40rem] lg:h-[27rem] xs:h-[45rem] sm:h-[40rem] xs:flex-col sm:flex-col lg:flex-row flex items-center justify-center lg:w-[82%] xs:w-[100%] sm:w-[100%]">
        <div className="flex lg:flex-row xs:flex-col sm:flex-col lg:w-[90%] xs:w-[100%] sm:w-[100%] h-full bg-transparent">
          <div className="relative h-full lg:w-[50%] xs:w-[100%] sm:w-[100%]">
            <div className="p-4 flex items-center justify-center absolute h-full w-full opacity-0 hover:opacity-80 bg-black  cursor-pointer transition-all duration-1000">
              <span className="text-xl">Portfolio 1</span>
            </div>
            <div className=" h-full w-full bg-[url('../public/cafe.webp')] cursor-pointer bg-cover transition-all duration-1000 hover:hidden"></div>
          </div>
          <div className="h-full lg:w-[50%] xs:w-[100%] sm:w-[100%] flex flex-col">
            <div className="h-[50%] w-full ">
              <div className="relative h-full w-[100%] flex justify-between items-center">
                <div className=" absolute p-4 flex items-center justify-center h-full w-full opacity-0 hover:opacity-80 bg-black  cursor-pointer transition-all duration-1000 text-center">
                  <span className="text-xl">Portfolio 2</span>
                </div>
                <div className=" h-full w-[50%]  bg-[url('../public/coffee.webp')] cursor-pointer bg-cover transition-all duration-1000 hover:hidden"></div>
                <div className=" h-full w-[50%]  bg-[url('../public/chair.webp')] cursor-pointer bg-cover transition-all duration-1000 hover:hidden"></div>
              </div>
              {/* <div className="relative h-full w-[50%]">
                <div className=" absolute p-4 flex items-center justify-center h-full w-full opacity-0 hover:opacity-80 bg-black  cursor-pointer transition-all duration-1000">
                  <span className="text-xl">Portfolio 3</span>
                </div>
                <div className=" h-full w-full  bg-[url('../public/chair.webp')] cursor-pointer bg-cover transition-all duration-1000 hover:hidden"></div>
              </div> */}
            </div>
            <div className="relative h-[50%] w-full">
              <div className=" absolute p-4 flex items-center justify-center h-full w-full opacity-0 hover:opacity-80 bg-black  cursor-pointer transition-all duration-1000">
                <span className="text-xl">Portfolio 4</span>
              </div>
              <div className=" h-full w-full  bg-[url('../public/conference.webp')] cursor-pointer bg-cover transition-all duration-1000 hover:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
