import React, { useRef, useState } from "react";
import Image from "next/image";
import dots from "../public/dots2.svg";
import Carousel from "antd/lib/carousel";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Clients() {
  const carouselRef = useRef(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const { ref, inView } = useInView({});
  const clientNames = [
    {
      name: "CEO of Tadesse flatsea PLC ",
      position: "Association of Ethiopian Insurers",
      image: "LogoImages/tadesse.png",
    },
    {
      name: "Henok",
      position: "CEO of Tona cafe and restaurant",
      image: "LogoImages/tona.jpg",
    },
    {
      name: "Khalid Issa ",
      position: "CEO, Suweys",
      image: "LogoImages/suwey.png",
    },
    {
      name: "Khalid Issa ",
      position: "CEO Bona motor company",
      image: "LogoImages/bona.jpg",
    },
    {
      name: "Muidin ",
      position: "Manager Organization for OWDA",
      image: "LogoImages/owda.jpg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{ duration: 1 }}
      ref={ref}
      id="Clients"
      className="lg:h-full xs:h-full sm:h-full xs:mb-14 sm:mb-14 py-12"
    >
      <div className="h-[20%] mt-5 bg-whit lg:px-20 xs:px-4 sm:px-4  flex flex-col items-start justify-start">
        <div className="flex justify-between pt-3 w-full lg:pr-20">
          <div className="flex flex-col items-start justify-center relative w-52 h-40 bg-white">
            <span className="text-[130px] ">05</span>
            <div className="h-16 w-full flex flex-col px-3 absolute bottom-2 bg-white">
              <span className="font-bold text-2xl">CLIENTS</span>
              <span className="font-bold text-sm">UPDATES</span>
            </div>
          </div>
          <div className="md:w-[30%] md:h-[30%] xs:h-[90%] sm:h-[90%]  xs:w-[100%] sm:w-[100%]">
            {" "}
            <Image src={dots} alt="dots image" priority />
          </div>
        </div>
      </div>
      <div className="lg:h-full xs:h-full sm:h-full w-full relative flex items-center justify-center mb-5">
        <div className="absolute z-20 lg:flex sm:flex xs:flex lg:w-full sm:w-full xs:w-full items-center justify-center lg:-bottom-5 sm:-bottom-12 xs:-bottom-12 pr-10 pl-8">
          <span
            className="cursor-pointer"
            onClick={() => {
              carouselRef.current.prev();
            }}
          >
            {" "}
            <LeftOutlined
              style={{
                fontSize: "1rem",
                color: "#fff",
                background: "rgba(98, 98, 98, 0.5)",
                borderRadius: "50%",
                padding: "15px",
              }}
            />
          </span>
          <div className="lg:w-[23%] sm:w-[100%] xs:w-[100%] flex gap-3 items-center justify-center text-center pl-4">
            <div>
              <Image
                src={`/${clientNames[carouselIndex]?.image}`}
                alt="dots image"
                width={80}
                height={100}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-center">
                {clientNames[carouselIndex]?.name}
              </span>
              <span className="text-xs text-center">
                {clientNames[carouselIndex]?.position}
              </span>
            </div>
          </div>
          <span
            className="cursor-pointer"
            onClick={() => {
              carouselRef.current.next();
            }}
          >
            {" "}
            <RightOutlined
              style={{
                fontSize: "1rem",
                color: "#fff",
                background: "rgba(98, 98, 98, 0.5)",
                borderRadius: "50%",
                padding: "15px",
              }}
            />
          </span>
        </div>
        <div className="w-full h-full">
          <Carousel
            dots={false}
            afterChange={(current) => setCarouselIndex(current)}
            autoplay
            ref={carouselRef}
            className="lg:px-24 sm:px-2 xs:px-2 h-full lg:p-8 xs:p-2 sm:p-2"
          >
            <div className="p-5 flex items-center justify-center lg:h-full sm:h-full xs:h-full w-[100vw] bg-white relative text-left leading-loose text-xs">
              <p className="text-2xl font-bold text-center mb-5">
                &quot; They delivered the best possible layout according to our
                needs and they even added their own insights on how to make the
                most of the space by thinking about even the smallest of details
                in our day-to-day working process. &quot;
              </p>
            </div>
            <div className="p-5 flex items-center justify-center lg:h-full sm:h-[40vh] xs:h-[40vh] w-[100vw] bg-white relative text-left leading-loose text-xs">
              <p className="text-2xl font-bold text-center mb-5">
                &quot; They were able to create a beautiful and comfortable
                space which has helped to attract customers and our restaurant
                become successful.&quot;
              </p>
            </div>
            <div className="p-5 flex items-center justify-center lg:h-full sm:h-[40vh] xs:h-[40vh] w-[100vw] bg-white relative text-left leading-loose text-xs">
              <p className="text-2xl font-bold text-center mb-5">
                &quot; They demonstrated a high level of competence and
                professionalism from the first meeting. But most of all we were
                instantly impressed by their drive and willingness to give a
                100% to create the perfect space for our needs.&quot;
              </p>
            </div>
            <div className="p-5 flex items-center justify-center lg:h-full sm:h-[40vh] xs:h-[40vh] w-[100vw] bg-white relative text-left leading-loose text-xs">
              <p className="text-2xl font-bold text-center mb-5">
                &quot;This was the second project we worked on with adaptive
                designs. We wanted a fresh space but in a cost-efficient manner
                and they delivered beyond what we thought was possible to make
                of our old dingy space. &quot;
              </p>
            </div>
            <div className="p-5 flex items-center justify-center lg:h-full sm:h-[40vh] xs:h-[40vh] w-[100vw] bg-white relative text-left leading-loose text-xs">
              <p className="text-xl font-bold text-center mb-5">
                &quot;The office was on an old 60-year-old building and there
                were structural and bureaucratic limits to how much freedom we
                had in renovating it. And yet their design team was able to come
                up with a very modern clean and efficient design that is within
                the limitations but also satisfies our needs.” &quot;
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </motion.div>
  );
}
