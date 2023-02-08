import React from "react";
import Image from "next/image";
import quots from "../public/quots.svg";

import AutoSliderProdArch from "./AutoSliderProduct&Arch";
export default function InteriorModal() {
  const architecturalData = [
    {
      title: "Architectural Projects",
      description: "",
      image: [
        "/Portfolio/Architecture/HotelKal/1.webp",
        "/Portfolio/Architecture/HotelKal/2.webp",
        "/Portfolio/Architecture/HotelKal/3.webp",
        "/Portfolio/Architecture/Rec/1.webp",
        "/Portfolio/Architecture/HotelKal/4.webp",
        "/Portfolio/Architecture/HotelKal/5.webp",
        "/Portfolio/Architecture/Rec/2.webp",
        "/Portfolio/Architecture/Rec/23.webp",
      ],
    },
  ];
  return (
    <div>
      <div className="bg-secondary flex lg:flex-row sm:flex-col xs:flex-col lg:items-start xs:justify-start sm:justify-start lg:justify-between text-white pt-14 h-[fit-content] pb-4 lg:px-10 w-fit">
        <div className="flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%] ">
          <div className="flex items-center justify-center p-4">
            <span className="xl:text-[3rem] xs:text-[1.7rem] sm:text-[1.7rem]">
              Architectural Projects
            </span>
          </div>
        </div>
        <div className=" flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%]  mt-5 p-2">
          <Image
            src={quots}
            alt="quots"
            width={25}
            height={25}
            className="mt-4"
          />

          <div className="h-full flex item-center justify-center lg:mt-5 lg:mr-5">
            <span className="xs:text-[0.7rem] sm:text-[0.7rem] lg:text-[0.8rem]">
              Is your office tailored to the specific needs of your business and
              does it help express your company vision? Is your office tailored
              to the specific needs of your business and does it help express
              your company vision?
            </span>
          </div>
        </div>
      </div>
      <AutoSliderProdArch data={architecturalData} />
    </div>
  );
}
