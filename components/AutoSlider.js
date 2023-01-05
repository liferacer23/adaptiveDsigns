import React, { useRef } from "react";
import Slider from "react-slick";
import Button from "antd/lib/button";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function AutoSlider() {
  const carouselRef = useRef(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative">
      <div className="w-[100vw] h-[fit-content] mt-5">
        {" "}
        <Slider {...settings} ref={carouselRef}>
          <div className=" text-2xl h-[24rem] flex justify-center items-center gap-10 ">
            <div className="flex items-center justify-center">
              <div
                className="ml-10
         w-[15rem] h-[20rem] shadow-lg bg-white"
              >
                1
              </div>
              <div
                className="ml-10
          w-[15rem] h-[20rem] shadow-lg bg-white"
              >
                1
              </div>
              <div
                className="ml-10
          w-[15rem] h-[20rem] shadow-lg bg-white"
              >
                1
              </div>
            </div>
          </div>
          <div className=" text-2xl h-[24rem] flex justify-center items-center gap-10 ">
            <div className="flex items-center justify-center">
              <div
                className="ml-10
        w-[14rem] h-[20rem] shadow-lg bg-white"
              >
                1
              </div>
              <div
                className="ml-10
      w-[14rem] h-[20rem] shadow-lg bg-white"
              >
                1
              </div>
              <div
                className="ml-10
           w-[14rem] h-[20rem] shadow-lg bg-white"
              >
                1
              </div>
            </div>
          </div>
          <div className="text-2xl h-[24rem] flex justify-center items-center gap-10 ">
            <div className="flex items-center justify-center">
              <div
                className="ml-10
       w-[14rem] h-[20rem] shadow-lg bg-white"
              >
                1
              </div>
              <div
                className="ml-10
        w-[14rem] h-[20rem] shadow-lg bg-white"
              >
                1
              </div>
              <div
                className="ml-10
          w-[14rem] h-[20rem] shadow-lg bg-white"
              >
                1
              </div>
            </div>
          </div>
        </Slider>
      </div>
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
    </div>
  );
}
