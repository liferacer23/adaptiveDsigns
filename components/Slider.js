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
      className="flex h-[fit-content] w-full "
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
        <Carousel autoplay ref={carouselRef}>
          <div className="2xl:h-[40rem] lg:h-[35rem] sm:h-[40vh] xs:h-[40vh] w-[100vw] relative">
            <Image
              src={image1}
              alt="image1"
              objectFit="cover"
              placeholder="blur"
              fill
            />
          </div>
          <div className="2xl:h-[40rem] lg:h-[35rem] sm:h-[40vh] xs:h-[40vh] w-[100vw] relative">
            <Image
              src={image2}
              alt="image2"
              objectFit="cover"
              placeholder="blur"
              fill
            />
          </div>
          <div className="2xl:h-[40rem] lg:h-[35rem] sm:h-[40vh] xs:h-[40vh] w-[100vw] relative">
            <Image
              src={image3}
              alt="image3"
              objectFit="cover"
              placeholder="blur"
              fill
            />
          </div>
          <div className="2xl:h-[40rem] lg:h-[35rem] sm:h-[40vh] xs:h-[40vh] w-[100vw] relative">
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
