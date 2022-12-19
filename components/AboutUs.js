import React from "react";

export default function AboutUs() {
  return (
    <div className="mt-5 bg-secondary text-white lg:px-20 xs:px-4 sm:px-4 h-full flex flex-col items-start justify-start pb-5">
      <div className="flex flex-col items-start justify-center relative w-52 h-40 bg-secondary">
        <span className="text-[130px] text-white">03</span>
        <div className="h-16 flex flex-col w-full absolute bottom-0 bg-secondary">
          <span className="font-bold text-2xl">ABOUT US</span>
          <span className="font-bold text-sm">WHAT WE DO</span>
        </div>
      </div>
      <div className="flex lg:flex-row sm:flex-col xs:flex-col items-center justify-between">
        <div className="flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%] h-72 ">
          <div className=" h-full flex flex-col items-start justify-start">
            <span className="xs:text-[8rem] sm:text-[8rem] text-[15rem] ">
              ''
            </span>
          </div>
          <div className=" h-full flex items-center">
            <h4 className="xs:text-[1rem] sm:text-[1rem] lg:text-[2rem]">
              WE CREATE DESIGNS THAT INSPIRE, IMPRESS, REFRESH AND EVOKE PRIDE
              IN OUR ETHIOPIAN HERITAGE
            </h4>
          </div>
        </div>
        <div className="flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%] h-72">
          <div className="flex items-center justify-center p-4">
            <h4 className="text-[1rem]">
              Adaptive designs is a registered creative design company found in
              2019 GC based in Addis Ababa, Ethiopia. We are engaged in
              producing state of the art services on architecture, interior
              design, turnkey, and product design and furniture production. We
              follow a user experience first approach in all of our disciplines
              in addition to embodying the Ethiopian cultural essence in a
              contemporary manner.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
