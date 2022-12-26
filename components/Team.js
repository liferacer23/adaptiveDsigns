import Image from "next/image";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import dots from "../public/dots2.svg";
import person from "../public/team1.svg";
export default function Team() {
  return (
    <div className="lg:h-[50rem] xs:h-full sm:h-full">
      <div className="h-[50%] mt-5 bg-whit lg:px-20 xs:px-4 sm:px-4  flex flex-col items-start justify-start pb-5">
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
      </div>
      <div className="xs:items-center sm:items-center relative h-[50%] bg-secondary w-full flex lg:flex-row sm:flex-col xs:flex-col lg:items-center xs:justify-center sm:justify-center lg:justify-around xs:px-2 sm:px-2 sm:py-4 xs:py-4 xs:gap-4 sm:gap-4 lg:px-10">
        <div className="flex flex-col  w-72 lg:h-[28rem] xs:h-full sm:h-full shadow-xl lg:-mt-72 sm:mt-0 xs:mt-0">
          <div className="flex h-[28rem] w-[100%]">
            <div className="flex flex-col h-[100%] justify-end w-8 items-center gap-5 pb-5">
              <AiOutlineInstagram
                style={{ fontSize: "1.5rem", color: "#fff", cursor: "pointer" }}
              />
              <FaLinkedinIn
                style={{ fontSize: "1.5rem", color: "#fff", cursor: "pointer" }}
              />
              <GrFacebookOption
                style={{ fontSize: "1.5rem", color: "#fff", cursor: "pointer" }}
              />
              <FaTelegramPlane
                style={{ fontSize: "1.5rem", color: "#fff", cursor: "pointer" }}
              />
            </div>
            <div className="w-full relative h-full">
              <Image src={person} alt="person 1" fill objectFit="cover" />
            </div>
          </div>
          <div className="w-[100%] h-12 text-white ml-7">
            <span className="text-sm font-bold">DAWIT ABEBE</span>
            <span className="text-[10px] font-bold">ARCHITECT</span>
            <span className="text-[10px] font-bold">MANAGING PARTNER</span>
          </div>
        </div>
        {/* <div className="flex flex-col  w-72 h-[28rem] shadow-xl lg:-mt-72 sm:mt-0 xs:mt-0">
          <div className="flex h-[25rem] w-[100%]">
            <div className="flex flex-col h-[100%] justify-end w-8 items-center gap-5 pb-5">
              <AiOutlineInstagram
                style={{ fontSize: "1.5rem", color: "#fff", cursor: "pointer" }}
              />
              <FaLinkedinIn
                style={{ fontSize: "1.5rem", color: "#fff", cursor: "pointer" }}
              />
              <GrFacebookOption
                style={{ fontSize: "1.5rem", color: "#fff", cursor: "pointer" }}
              />
              <FaTelegramPlane
                style={{ fontSize: "1.5rem", color: "#fff", cursor: "pointer" }}
              />
            </div>
            <div className="w-full relative h-full">
              <Image src={person} alt="person 1" fill objectFit="cover" />
            </div>
          </div>
          <div className="w-[100%] h-12 text-white ml-7">
            <span className="text-sm font-bold">DAWIT ABEBE</span>
            <span className="text-[10px] font-bold">ARCHITECT</span>
            <span className="text-[10px] font-bold">MANAGING PARTNER</span>
          </div>
        </div> */}
        <div className="flex flex-col  w-72 lg:h-[28rem] xs:h-full sm:h-full shadow-xl lg:-mt-72 sm:mt-0 xs:mt-0">
          <div className="flex h-[25rem] w-[100%]">
            <div className="flex flex-col h-[100%] justify-end w-8 items-center gap-5 pb-5">
              <AiOutlineInstagram
                style={{ fontSize: "1.5rem", color: "#fff", cursor: "pointer" }}
              />
              <FaLinkedinIn
                style={{ fontSize: "1.5rem", color: "#fff", cursor: "pointer" }}
              />
              <GrFacebookOption
                style={{ fontSize: "1.5rem", color: "#fff", cursor: "pointer" }}
              />
              <FaTelegramPlane
                style={{ fontSize: "1.5rem", color: "#fff", cursor: "pointer" }}
              />
            </div>
            <div className="w-full relative h-full">
              <Image src={person} alt="person 1" fill objectFit="cover" />
            </div>
          </div>
          <div className="w-[100%] h-12 text-white ml-7">
            <span className="text-sm font-bold">DAWIT ABEBE</span>
            <span className="text-[10px] font-bold">ARCHITECT</span>
            <span className="text-[10px] font-bold">MANAGING PARTNER</span>
          </div>
        </div>
      </div>
    </div>
  );
}
