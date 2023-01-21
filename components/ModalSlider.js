import React, { useRef } from "react";
import { motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
import Carousel from "antd/lib/carousel";
import Button from "antd/lib/button";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";
export default function ModalSlider({ images, setModal }) {
  const carouselRef = useRef(null);
  return (
    <>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        exit={{ x: 2000, opacity: 0 }}
        className="fixed top-0 left-0 w-full h-full bg-secondary  z-50 flex flex-col items-center justify-center backdrop-blur-xl overflow-auto
      "
      >
        {" "}
        <div className=" h-[fit-content] flex items-center justify-start absolute top-5 left-2 cursor-pointer">
          <BiArrowBack
            className="inline-block mr-2 text-2xl"
            color="#FFf"
            onClick={() => setModal(false)}
          />{" "}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex h-[fit-content] w-full bg-secondary"
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
            <Carousel ref={carouselRef} dots={false}>
              {images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="2xl:h-[40rem] lg:h-[35rem] sm:h-[50vh] xs:h-[50vh] w-[100vw] relative"
                  >
                    <Image src={image} alt="image1" objectFit="contain" fill />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
