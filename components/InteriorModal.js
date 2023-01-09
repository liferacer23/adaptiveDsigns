import React from "react";
import Image from "next/image";
import quots from "../public/quots.svg";
import AutoSlider from "./AutoSlider";
export default function InteriorModal() {
  const office = [
    "/Portfolio/Interior/Office/1/1.webp",
    "/Portfolio/Interior/Office/2/1.webp",
    "/Portfolio/Interior/Office/3/1.jpg",
    "/Portfolio/Interior/Office/4/1.jpg",
  ];
  const commercial = [
    "/Portfolio/Interior/Commercial/1/1.jpg",
    "/Portfolio/Interior/Commercial/2/1.jpg",
    "/Portfolio/Interior/Commercial/3/1.jpg",
    "/Portfolio/Interior/Commercial/4/1.jpg",
    "/Portfolio/Interior/Commercial/5/1.jpg",
    "/Portfolio/Interior/Commercial/6/1.jpg",
    "/Portfolio/Interior/Commercial/7/1.jpg",
    "/Portfolio/Interior/Commercial/8/1.jpg",
  ];

  const residential = [
    "/Portfolio/Interior/Residential/1/2.jpeg",
    "/Portfolio/Interior/Residential/2/1.jpg",
    "/Portfolio/Interior/Residential/3/1.jpg",
    "/Portfolio/Interior/Residential/4/1.jpg",
  ];

  return (
    <>
      <>
        <div className="bg-secondary flex lg:flex-row sm:flex-col xs:flex-col lg:items-start xs:justify-start sm:justify-start lg:justify-between text-white pt-14 h-[fit-content] pb-4 lg:px-10">
          <div className="flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%] ">
            <div className="flex items-center justify-center p-4">
              <span className="xl:text-[3rem] xs:text-[2rem] sm:text-[2rem]">
                OFFICE INTERIORS
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
                Is your office tailored to the specific needs of your business
                and does it help express your company vision? Is your office
                tailored to the specific needs of your business and does it help
                express your company vision?
              </span>
            </div>
          </div>
        </div>
        <AutoSlider images={office} />
      </>
      <>
        <div className="bg-secondary flex lg:flex-row sm:flex-col xs:flex-col lg:items-start xs:justify-start sm:justify-start lg:justify-between text-white pt-14 h-[fit-content] pb-4 lg:px-10">
          <div className="flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%] ">
            <div className="flex items-center justify-center p-4">
              <span className="xl:text-[3rem] xs:text-[1.7rem] sm:text-[1.7rem]">
                HOSPITALITY INTERIORS
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
                Is your office tailored to the specific needs of your business
                and does it help express your company vision? Is your office
                tailored to the specific needs of your business and does it help
                express your company vision?
              </span>
            </div>
          </div>
        </div>
        <AutoSlider images={residential} />
      </>
      <>
        <div className="bg-secondary flex lg:flex-row sm:flex-col xs:flex-col lg:items-start xs:justify-start sm:justify-start lg:justify-between text-white pt-14 h-[fit-content] pb-4 lg:px-10">
          <div className="flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%] ">
            <div className="flex items-center justify-center p-4">
              <span className="xl:text-[3rem] xs:text-[1.7rem] sm:text-[1.7rem]">
                COMMERCIAL INTERIORS
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
                Is your office tailored to the specific needs of your business
                and does it help express your company vision? Is your office
                tailored to the specific needs of your business and does it help
                express your company vision?
              </span>
            </div>
          </div>
        </div>
        <AutoSlider images={commercial} />
      </>
      <>
        <div className="bg-secondary flex lg:flex-row sm:flex-col xs:flex-col lg:items-start xs:justify-start sm:justify-start lg:justify-between text-white pt-14 h-[fit-content] pb-4 lg:px-10">
          <div className="flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%] ">
            <div className="flex items-center justify-center p-4">
              <span className="xl:text-[3rem] xs:text-[1.7rem] sm:text-[1.7rem]">
                RESIDENTIAL INTERIORS
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
                Is your office tailored to the specific needs of your business
                and does it help express your company vision? Is your office
                tailored to the specific needs of your business and does it help
                express your company vision?
              </span>
            </div>
          </div>
        </div>
        <AutoSlider images={residential} />
      </>
    </>
  );
}
