import React, { useRef } from "react";
import { motion } from "framer-motion";
import Carousel from "antd/lib/carousel";
import Button from "antd/lib/button";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import image1 from "../public/SliderImages/1.webp";
import image2 from "../public/SliderImages/2.webp";
import image3 from "../public/SliderImages/3.webp";
import image4 from "../public/SliderImages/4.webp";
export default function Slider() {
  const carouselRef = useRef(null);

  return (
    <motion.div
      id="Slider"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex h-full"
    >
      <div className=" w-full relative">
        <div className="hidden absolute z-20 lg:flex w-full h-full items-center justify-between pl-5 pr-7">
          <Button
            style={{ border: "none" }}
            icon={
              <LeftOutlined
                style={{
                  fontSize: "1rem",
                  color: "#fff",
                  background: "rgba(98, 98, 98, 0.5)",
                  borderRadius: "50%",
                  padding: "15px",
                }}
              />
            }
            onClick={() => {
              carouselRef.current.prev();
            }}
          ></Button>
          <Button
            style={{ border: "none" }}
            icon={
              <RightOutlined
                style={{
                  fontSize: "1rem",
                  color: "#fff",
                  background: "rgba(98, 98, 98, 0.5)",
                  borderRadius: "50%",
                  padding: "15px",
                }}
              />
            }
            onClick={() => {
              carouselRef.current.next();
            }}
          ></Button>
        </div>
        <h2 className="absolute bottom-16 sm:text-[10px] xs:text-[10px] lg:text-[18px] z-20 w-full bg-primaryTransparent lg:h-14 xs:h-[fit-content] sm:h-[fit-content] text-white text-center xs:px-10 sm:px-10 lg:px-60">
          ELEVATING THE RAW AESTHETIC FUNCTIONAL ESSENCE OF TRADITIONAL
          ETHIOPIAN DESIGN BY REINTERPRETING IT IN A CONTEMPORARY MANNER
        </h2>
        <Carousel autoplay ref={carouselRef}>
          <div className="md:h-[50rem] sm:h-[30vh] xs:h-[30vh] w-[100vw] bg-white relative">
            <Image
              src={image1}
              alt="image1"
              objectFit="cover"
              placeholder="blur"
              fill
            />
          </div>
          <div className="md:h-[50rem] sm:h-[50vh] xs:h-[50vh] w-[100vw]   relative ">
            <Image
              src={image2}
              alt="image2"
              objectFit="cover"
              placeholder="blur"
              fill
            />
          </div>
          <div className="md:h-[50rem] sm:h-[50vh] xs:h-[50vh]  w-[100vw]   relative ">
            <Image
              src={image3}
              alt="image3"
              objectFit="cover"
              placeholder="blur"
              fill
            />
          </div>
          <div className="md:h-[50rem] sm:h-[50vh] xs:h-[50vh]  w-[100vw]  relative ">
            <Image
              src={image4}
              alt="image4"
              objectFit="cover"
              placeholder="blur"
              fill
            />
          </div>
        </Carousel>
      </div>
    </motion.div>
  );
}
