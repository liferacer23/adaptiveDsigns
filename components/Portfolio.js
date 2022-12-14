import React from "react";
import Image from "next/image";
import dots from "../public/dots2.svg";
import cafe from "../public/cafe.svg";
import chair from "../public/chair.svg";
import coffee from "../public/coffee.svg";
import conference from "../public/conference.svg";
export default function Portfolio() {
  return (
    <div className="bg-white text-white px-20 flex flex-col items-center justify-start">
      <div className="flex justify-between pt-3">
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
      <div className="h-full xs:flex-col sm:flex-col lg:flex-row flex items-center justify-center lg:w-[82%] xs:w-[100%] sm:w-[100%]">
        <div className="lg:w-[50%] xs:w-[100%] sm:w-[100%] xs:h-[300px] sm:h-[300px] lg:h-[500px] relative flex flex-col justify-start items-start">
          <Image src={cafe} fill alt="cafe image" objectFit="cover"  />
        </div>
        <div className="lg:w-[50%] xs:w-[100%] sm:w-[100%] lg:h-[490px] xs:h-[490px] sm:h-[500px] flex flex-col">
          <div className=" w-[100%] flex items-start justify-center lg:h-[40%] xs:h-[30%] sm:h-[30%]">
            <div className="flex items-center justify-center relative w-[50%] lg:h-[200px] xs:h-[140px] sm:h-[140px] ">
              <Image src={coffee} fill alt="cafe image" objectFit="contain" />
            </div>
            <div className="flex items-center justify-center relative w-[50%] lg:h-[200px] xs:h-[140px] sm:h-[140px] ">
              <Image src={chair} fill alt="cafe image" objectFit="contain" />
            </div>
          </div>
          <div>
          <div className="relative w-full h-[356px]">
              <Image src={conference} fill alt="cafe image"  objectFit="contain"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
