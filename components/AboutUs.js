import Image from "next/image";
import React from "react";
import quots from "../public/quots.svg";
export default function AboutUs() {
  return (
    <div
      id="AboutUs"
      className="mt-5 bg-secondary text-white lg:px-20 xs:px-4 sm:px-4 h-full flex flex-col items-start justify-start py-12"
    >
      <div className="flex flex-col items-start justify-center relative w-52 h-40 bg-secondary">
        <span className="text-[130px] text-white">03</span>
        <div className="h-16 flex flex-col w-full absolute bottom-0 bg-secondary">
          <span className="font-bold text-2xl">ABOUT US</span>
          <span className="font-bold text-sm">WHAT WE DO</span>
        </div>
      </div>
      <div className=" flex lg:flex-row sm:flex-col xs:flex-col lg:items-center xs:justify-center sm:justify-center lg:justify-between">
        <div className=" flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%]  mt-5">
          <Image
            src={quots}
            alt="quots"
            width={35}
            height={35}
            className="mt-4"
          />

          <div className=" h-full flex items-start">
            <span className="xs:text-[1rem] sm:text-[1rem] lg:text-[1.8rem]">
              WE CREATE DESIGNS THAT INSPIRE, IMPRESS, REFRESH AND EVOKE PRIDE
              IN OUR ETHIOPIAN HERITAGE
            </span>
          </div>
        </div>
        <div className="flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%] ">
          <div className="flex items-center justify-center p-4">
            <span className="text-[0.8rem]">
              Adaptive designs is a registered creative design company found in
              2019 GC based in Addis Ababa, Ethiopia. We are engaged in
              producing state of the art services on architecture, interior
              design, turnkey, and product design and furniture production. We
              follow a user experience first approach in all of our disciplines
              in addition to embodying the Ethiopian cultural essence in a
              contemporary manner.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
