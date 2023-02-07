import Image from "next/image";
import React from "react";
import quots from "../public/quots.svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import cofounders from "../public/Cofounders.webp";
import Link from "next/link";
export default function AboutUs() {
  const { ref, inView } = useInView({});
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{ duration: 1 }}
      ref={ref}
      id="AboutUs"
      className="mt-5 bg-secondary text-white lg:px-20 xs:px-4 sm:px-4 h-[fit-content] flex flex-col items-start justify-start py-12"
    >
      <div className="flex flex-col items-start justify-center relative w-52 h-40 bg-secondary">
        <span className="text-[130px] text-white">03</span>
        <div className="h-16 flex flex-col w-full absolute bottom-0 bg-secondary">
          <span className="font-bold text-2xl">ABOUT US</span>
          <span className="font-bold text-sm">WHO WE ARE</span>
        </div>
      </div>
      <div className=" flex lg:flex-row sm:flex-col xs:flex-col lg:items-center xs:justify-center sm:justify-center lg:justify-between h-full">
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
      <div className="lg:h-[28rem] xs:items-center sm:items-center relative mt-5 w-full flex lg:flex-row sm:flex-col xs:flex-col lg:items-center xs:justify-center sm:justify-center lg:justify-around xs:px-2 sm:px-2 sm:py-4 xs:py-4 xs:gap-4 sm:gap-4 lg:px-10">
        <div className="flex flex-col w-full lg:h-[28rem] xs:h-full sm:h-full sm:mt-0 xs:mt-0">
          <div className="flex sm:h-[15rem] xs:h-[15rem] lg:h-[25rem] w-[100%]">
            <div className="flex flex-col h-[100%] justify-end w-6 items-center gap-5 pb-5 ">
              <Link nofollow href="https://www.instagram.com/adaptive_designs/">
                <AiOutlineInstagram
                  style={{
                    fontSize: "1.2rem",
                    color: "#fff",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                />
              </Link>
              <Link
                nofollow
                href="https://www.linkedin.com/in/adaptive-designs-781590230?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYxul7GjMRtOzxWVjTw%2B1yw%3D%3D"
              >
                <FaLinkedinIn
                  style={{
                    fontSize: "1.2rem",
                    color: "#fff",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                />
              </Link>
              <Link nofollow href="https://www.facebook.com/adaptivedesignsET/">
                <GrFacebookOption
                  style={{
                    fontSize: "1.2rem",
                    color: "#fff",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                />
              </Link>
              <Link nofollow href="https://t.me/adaptive_designs">
                <FaTelegramPlane
                  style={{
                    fontSize: "1.2rem",
                    color: "#fff",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                />
              </Link>
            </div>
            <div className="w-full relative h-full flex flex-col justify-end items-end">
              <Image
                src={cofounders}
                alt="cofounders"
                className="w-full lg:h-full sm:h-50 xs:h-50 lg:object-cover"
                height={500}
                width={500}
              />
            </div>
          </div>
          <div className="w-[100%] h-12 text-white ml-4 mt-2">
            <span className="text-sm font-bold">DAWIT ABEBE & </span>
            <span className="text-sm font-bold">ABRAHAM AYALEW</span>

            <p className="text-[10px] font-bold">Co-Founders</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
