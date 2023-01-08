import React, { useRef } from "react";
import Slider from "react-slick";
import Button from "antd/lib/button";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default function AutoSlider({ images }) {
  const carouselRef = useRef(null);

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: images && images.length > 3 ? 3 : images && images.length,
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
          slidesToShow: 3,
          slidesToShow:
            images && images.length > 3 ? 3 : images && images.length,
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
        },
      },
    ],
  };
  return (
    <div className="relative">
      <div className="w-[100vw] h-[fit-content] ">
        {" "}
        <Slider {...settings} ref={carouselRef}>
          {images &&
            images.map((image, index) => (
              <div
                key={index}
                className="bg-white xs:h-[20rem] sm:h-[20rem] lg:h-[14rem] xl:h-[22rem] 2xl:h-[35rem] lg:w-[30rem] sm:w-[30rem] xs:w-[30rem] lg:mt-2 xs:mt-0 sm:mt-0  lg:px-5 xs:px-0 sm:px-0"
              >
                <div className="bg-white h-full w-full relative  shadow-2xl">
                  <Image
                    className="p-2 xs:px-1 sm:px-1 lg:mx-2 hover:scale-105 transition duration-500 ease-in-out cursor-pointer"
                    src={image}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            ))}
        </Slider>
      </div>
      {images && images.length > 3 && (
        <div className="hidden absolute z-20 lg:flex w-full h-full items-center justify-between pl-5 pr-7 top-0">
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
      )}
    </div>
  );
}