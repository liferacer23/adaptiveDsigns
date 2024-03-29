import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Button from "antd/lib/button";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import ModalSlider from "./ModalSlider";
import { AnimatePresence } from "framer-motion";
export default function AutoSliderProdArch({ data }) {
  const [modalState, setModalState] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();
  const carouselRef = useRef(null);
  const handleModal = (index) => {
    setCurrentIndex(index);
    setModalState(true);
  };
  var settings = {
    className: "center w-[100vw]",
    autoplay: true,
    centerMode: true,
    infinite: true,

    slidesToShow: data.length > 3 ? 3 : data.length === 1 ? 3 : data.length,
    speed: 500,
    dots: true,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: data.length > 3 ? 3 : data.length,
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
    <div className="relative my-8">
      <div className="w-[100vw] h-[fit-content] ">
        {" "}
        <AnimatePresence>
          {modalState ? (
            <ModalSlider
              currentIndex={currentIndex}
              setModalState={setModalState}
              images={data[0].image}
              setCurrentIndex={setCurrentIndex}
            />
          ) : null}
        </AnimatePresence>
        <Slider {...settings} ref={carouselRef}>
          {data &&
            data[0].image.map((image, index) => (
              <div
                onClick={() => {
                  handleModal(index);
                  setCurrentIndex(index);
                }}
                key={index}
                className="bg-white xs:h-[20rem] sm:h-[20rem] lg:h-[14rem] xl:h-[22rem] 2xl:h-[35rem] lg:w-[30rem] sm:w-[30rem] xs:w-[30rem] lg:mt-2 xs:mt-0 sm:mt-0  lg:px-5 xs:px-0 sm:px-0"
              >
                <div className="bg-white h-full w-full relative  shadow-2xl">
                  <Image
                    fill
                    className="p-2 xs:px-1 sm:px-1 lg:mx-2 transition duration-500 ease-in-out cursor-pointer"
                    src={image}
                    alt="image"
                    objectFit="cover"
                  />
                </div>
              </div>
            ))}
        </Slider>
      </div>

      <>
        <div className="hidden absolute h-full z-20 lg:flex w-fit items-center justify-between pl-5 pr-7 top-0 left-5">
          <Button
            style={{ border: "none" }}
            icon={
              <LeftOutlined
                style={{
                  fontSize: "1.2rem",
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
        </div>
        <div className="hidden absolute h-full z-20 lg:flex w-fit items-center justify-between pl-5 pr-7 top-0 right-5">
          <Button
            style={{ border: "none" }}
            icon={
              <RightOutlined
                style={{
                  fontSize: "1.2rem",
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
      </>
    </div>
  );
}
