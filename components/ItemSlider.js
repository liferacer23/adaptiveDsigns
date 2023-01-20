import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Button from "antd/lib/button";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import quots from "../public/blackQuots.svg";
export default function ItemSlider({ images, description }) {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  var settings = {
    button: false,
    className: "center w-[100vw]",
    autoplay: true,
    centerMode: true,
    infinite: true,

    slidesToShow: images.length > 3 ? 3 : images.length - 1,
    speed: 500,
    dots: true,
    beforeChange: (current, next) => setCurrentSlide(current),
    initialSlide: 0,
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
    <div className="w-full flex justify-between items-center xs:flex-col sm:flex-col lg:flex-row">
      <div className="flex w-3/6">
        {" "}
        <div className="">
          <Image
            src={quots}
            alt="quots"
            width={35}
            height={35}
            className="mt-4"
          />
        </div>
        <div className="text-[#4F4F4F] text-[1.2rem]  mt-4  sm:w-[100%] xs:w-[100%] lg:w-82 ml-10 mb-5">
          <p className="text-black">
            {description[currentSlide]
              ? description[currentSlide]
              : description[description.length - 1]}
          </p>
        </div>
      </div>
      <div className="relative ">
        <div className="w-[60rem] h-[fit-content] overflow-hidden">
          <Slider {...settings} ref={carouselRef}>
            {images &&
              images.map((image, index) => (
                <div
                  key={index}
                  className="bg-white xs:h-[20rem] sm:h-[20rem] lg:h-[14rem] xl:h-[22rem] 2xl:h-[35rem] lg:w-[30rem] sm:w-[30rem] xs:w-[30rem] lg:mt-2 xs:mt-0 sm:mt-0  lg:px-5 xs:px-0 sm:px-0"
                >
                  <div className="bg-white h-full w-full relative  shadow-2xl">
                    <Image
                      placeholder="blur"
                      blurDataURL={image}
                      className="p-2 xs:px-1 sm:px-1 lg:mx-2 transition duration-500 ease-in-out cursor-pointer"
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
        )}
      </div>
    </div>
  );
}
