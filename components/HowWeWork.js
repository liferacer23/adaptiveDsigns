import React from "react";
import Image from "next/image";
import quots from "../public/blackQuots.svg";
export default function HowWeWork() {
  return (
    <div className="w-full flex-col bg-[#E5E8E8] lg:px-20 sm:px-4 xs:px-4 py-5">
      <div className="flex w-full items-center justify-start mb-3 bt-3">
        <div className="flex">
          <Image
            src={quots}
            alt="quots"
            width={35}
            height={35}
            className="mt-2"
          />
          <div className="p-2 h-15 w-56 relative flex flex-col items-start justify-start g-0">
            <span className="font-bold text-[25px] text-black m-0 ">
              HOW WE WORK
            </span>
            <span className="-mt-2 font-bold text-[12px] text-black">
              METHODOLOGY
            </span>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row sm:flex-col xs:flex-col items-center justify-center gap-10 px-5">
        <div className="flex items-start lg:w-[32%] xs:w-full sm:w-full">
          <div className="flex flex-col w-full items-start justify-start">
            <div className="flex items-center justify-start h-20 w-full gap-4 -ml-4">
              <div className="flex justify-start flex-col items-start text-[5rem]">
                1
              </div>
              <span className="font-bold text-2xl">
                STATEMENT OF THE PROBLEM
              </span>
            </div>
            <h5 className="text-xs leading-loose font-md">
              t creating the project, we have to prepare in a certain way.
              Usually we hold one or several meetings with the clients and find
              out their ideas and requirements to the future design.
            </h5>
          </div>
        </div>
        <div className="flex items-start lg:w-[32%] xs:w-full sm:w-full">
          <div className="flex flex-col w-full items-start justify-start">
            <div className="flex items-center justify-start h-20 w-full gap-4 -ml-4">
              <div className="flex justify-start flex-col items-start text-[5rem]">
                2
              </div>
              <span className="font-bold text-2xl">
                DEVELOPMENT OF DESIGNS & RENDERINGS
              </span>
            </div>
            <h5 className="text-xs leading-loose font-md">
              To start creating the project, we have to prepare in a certain
              way. Usually we hold one or several meetings with the clients and
              find out their ideas and requirements to the future design.
            </h5>
          </div>
        </div>
        <div className="flex items-start lg:w-[32%] xs:w-full sm:w-full">
          <div className="flex flex-col w-full items-start justify-start">
            <div className="flex items-center justify-start h-20 w-full gap-4 -ml-4">
              <div className="flex justify-start flex-col items-start text-[5rem]">
                3
              </div>
              <span className="font-bold text-2xl">
                STATEMENT OF THE PROBLEM
              </span>
            </div>
            <h5 className="text-xs leading-loose font-md">
              To start creating the project, we have to prepare in a certain
              way. Usually we hold one or several meetings with the clients and
              find out their ideas and requirements to the future design.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
