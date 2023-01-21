import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "antd/lib/button";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Image from "next/image";
export default function ModalSlider({
  images,
  setModal,
  currentIndex,
  setCurrentIndex,
}) {
  const carouselRef = useRef(null);

  useEffect(() => {
    return () => {
      setCurrentIndex(0);
    };
  }, []);

  var settings = {
    button: false,
    className: "center w-[100vw]",
    centerMode: true,
    infinite: true,

    slidesToShow: 1,
    speed: 500,
    dots: true,
    initialSlide: currentIndex,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: images.length > 3 ? 3 : images.length,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        exit={{ x: 2000, opacity: 0 }}
        className="fixed top-0 left-0 w-full h-full bg-secondary opacity-10 z-50 flex flex-col items-center justify-center backdrop-blur-xl overflow-auto
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
          className="flex h-[fit-content] w-full bg-secondary opacity-10"
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
                  carouselRef.current.slickPrev();
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
                  carouselRef.current.slickNext();
                }}
              ></Button>
            </div>
            <Slider {...settings} ref={carouselRef}>
              {images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className=" 2xl:h-[40rem] lg:h-[35rem] sm:h-[50vh] xs:h-[50vh] w-[100vw] relative"
                  >
                    {" "}
                    <Image
                      className="hover:scale-150"
                      src={image}
                      alt="image1"
                      objectFit="contain"
                      fill
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
