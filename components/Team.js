import Image from "next/image";
import React from "react";
import quots from "../public/quots.svg";
import dots from "../public/dots2.svg";
export default function Team() {
  return (
    <div className="mt-5 bg-whit lg:px-20 xs:px-4 sm:px-4 h-full flex flex-col items-start justify-start pb-5">
      <div className="flex justify-between">
        <div className="flex flex-col items-start justify-center relative w-52 h-40 bg-white">
          <span className="text-[130px] ">04</span>
          <div className="h-16 flex flex-col px-3 absolute bottom-2 bg-white">
            <span className="font-bold text-2xl">TEAM</span>
            <span className="font-bold text-sm">UPDATES</span>
          </div>
        </div>
        <div className="md:w-[30%] md:h-[30%] xs:h-[90%] sm:h-[90%]  xs:w-[100%] sm:w-[100%]">
          {" "}
          <Image src={dots} alt="dots image" priority />
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
          {/*
          <div className=" h-full flex items-start">
            <h4 className="xs:text-[1rem] sm:text-[1rem] lg:text-[1.8rem]">
              WE CREATE DESIGNS THAT INSPIRE, IMPRESS, REFRESH AND EVOKE PRIDE
              IN OUR ETHIOPIAN HERITAGE
            </h4>
          </div> */}
        </div>
        {/* <div className="flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%] ">
          <div className="flex items-center justify-center p-4">
            <h4 className="text-[0.8rem]">
              Adaptive designs is a registered creative design company found in
              2019 GC based in Addis Ababa, Ethiopia. We are engaged in
              producing state of the art services on architecture, interior
              design, turnkey, and product design and furniture production. We
              follow a user experience first approach in all of our disciplines
              in addition to embodying the Ethiopian cultural essence in a
              contemporary manner.
            </h4>
          </div>
        </div> */}
      </div>
    </div>
  );
}
