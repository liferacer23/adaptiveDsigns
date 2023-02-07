import React from "react";
import Image from "next/image";
import quots from "../public/quots.svg";
import AutoSliderProdArch from "./AutoSliderProduct&Arch";
export default function InteriorModal() {
  const product = [
    {
      title: "Product",
      description: "",
      image: [
        "/Portfolio/Product/2.webp",
        "/Portfolio/Product/3.webp",
        "/Portfolio/Product/4.webp",
        "/Portfolio/Product/5.webp",
        "/Portfolio/Product/6.webp",
        "/Portfolio/Product/7.webp",
        "/Portfolio/Product/8.webp",
        "/Portfolio/Product/9.webp",
        "/Portfolio/Product/10.webp",
        "/Portfolio/Product/11.webp",
        "/Portfolio/Product/12.webp",
      ],
    },
  ];
  const furniture = [
    {
      title: "Product",
      description: "",
      image: [
        "/Portfolio/Product/13.webp",
        "/Portfolio/Product/14.webp",
        "/Portfolio/Product/15.webp",
        "/Portfolio/Product/16.webp",
        "/Portfolio/Product/17.webp",
        "/Portfolio/Product/18.webp",
        "/Portfolio/Product/19.webp",
        "/Portfolio/Product/20.webp",
        "/Portfolio/Product/21.jpg",
      ],
    },
  ];

  return (
    <>
      {" "}
      <div>
        <div className="bg-secondary flex lg:flex-row sm:flex-col xs:flex-col lg:items-start xs:justify-start sm:justify-start lg:justify-between text-white pt-14 h-[fit-content] pb-4 lg:px-10">
          <div className="flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%] ">
            <div className="flex items-center justify-center p-4">
              <span className="xl:text-[3rem] xs:text-[2rem] sm:text-[2rem]">
                Product
              </span>
            </div>
          </div>
          <div className=" flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%]  mt-5 p-2 ">
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

        <AutoSliderProdArch data={product} />
      </div>{" "}
      <div>
        <div className="bg-secondary flex lg:flex-row sm:flex-col xs:flex-col lg:items-start xs:justify-start sm:justify-start lg:justify-between text-white pt-14 h-[fit-content] pb-4 lg:px-10">
          <div className="flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%] ">
            <div className="flex items-center justify-center p-4">
              <span className="xl:text-[3rem] xs:text-[2rem] sm:text-[2rem]">
                Furniture
              </span>
            </div>
          </div>
          <div className=" flex gap-5 items-start justify-center xs:w-full  sm:w-full lg:w-[40%]  mt-5 p-2 ">
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

        <AutoSliderProdArch data={furniture} />
      </div>
    </>
  );
}
