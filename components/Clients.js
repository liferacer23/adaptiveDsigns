import React, { useRef } from "react";
import Image from "next/image";
import dots from "../public/dots2.svg";
import Carousel from "antd/lib/carousel";
import Button from "antd/lib/button";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
export default function Clients() {
  const carouselRef = useRef(null);
  console.log(carouselRef);
  return (
    <div className="lg:h-[50rem] xs:h-full sm:h-full">
      <div className="h-[20%] mt-5 bg-whit lg:px-20 xs:px-4 sm:px-4  flex flex-col items-start justify-start pb-5">
        <div className="flex justify-between">
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
      <div className="h-[22rem] w-full relative">
        <div className="hidden absolute z-20 lg:flex w-full  items-center justify-center bottom-10">
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
        <Carousel
          autoplay
          ref={carouselRef}
          className="lg:px-24 sm:px-2 xs:px-2 h-full lg:p-8 xs:p-2 sm:p-2"
        >
          <div className="p-5 flex items-center justify-center lg:h-full sm:h-[40vh] xs:h-[40vh] w-[100vw] bg-white relative text-left leading-loose text-xs">
            <p>
              It is with great pleasure that I write this testimony for Adaptive
              design acted as our Interior Designer providing guidance on all
              our interior design matters relating to a very extensive
              renovation we undertook. They provided invaluable guidance in
              regard to color schemes, furniture selection, flooring and tiling,
              painting, lighting and accessories. This renovation involved a
              complete redesign of the interior of our office. The Association
              of Ethiopian Insurers currently has 19 members and working towards
              the growth & development of insurance business in Ethiopia,
              Harmonize the competitive market, enhance consumer protection,
              insurance awareness and capacity building of the industry
              workforce. We are ecstatic about the results Adaptive design
              achieved. It is a true testament to their talent that member
              companies and guests who visit our renovated office are in awe of
              the transformation. They are very creative. It was a pleasure to
              work with Adaptive design. Should you wish to discuss this
              recommendation in more detail please contact the Association of
              Ethiopian Insurers.
            </p>
          </div>
          <div className="p-5 flex items-center justify-center lg:h-full sm:h-[40vh] xs:h-[40vh] w-[100vw] bg-white relative text-left leading-loose text-xs">
            <p>
              It is with great pleasure that I write this testimony for Adaptive
              design acted as our Interior Designer providing guidance on all
              our interior design matters relating to a very extensive
              renovation we undertook. They provided invaluable guidance in
              regard to color schemes, furniture selection, flooring and tiling,
              painting, lighting and accessories. This renovation involved a
              complete redesign of the interior of our office. The Association
              of Ethiopian Insurers currently has 19 members and working towards
              the growth & development of insurance business in Ethiopia,
              Harmonize the competitive market, enhance consumer protection,
              insurance awareness and capacity building of the industry
              workforce. We are ecstatic about the results Adaptive design
              achieved. It is a true testament to their talent that member
              companies and guests who visit our renovated office are in awe of
              the transformation. They are very creative. It was a pleasure to
              work with Adaptive design. Should you wish to discuss this
              recommendation in more detail please contact the Association of
              Ethiopian Insurers.
            </p>
          </div>
          <div className="p-5 flex items-center justify-center lg:h-full sm:h-[40vh] xs:h-[40vh] w-[100vw] bg-white relative text-left leading-loose text-xs">
            <p>
              It is with great pleasure that I write this testimony for Adaptive
              design acted as our Interior Designer providing guidance on all
              our interior design matters relating to a very extensive
              renovation we undertook. They provided invaluable guidance in
              regard to color schemes, furniture selection, flooring and tiling,
              painting, lighting and accessories. This renovation involved a
              complete redesign of the interior of our office. The Association
              of Ethiopian Insurers currently has 19 members and working towards
              the growth & development of insurance business in Ethiopia,
              Harmonize the competitive market, enhance consumer protection,
              insurance awareness and capacity building of the industry
              workforce. We are ecstatic about the results Adaptive design
              achieved. It is a true testament to their talent that member
              companies and guests who visit our renovated office are in awe of
              the transformation. They are very creative. It was a pleasure to
              work with Adaptive design. Should you wish to discuss this
              recommendation in more detail please contact the Association of
              Ethiopian Insurers.
            </p>
          </div>
          <div className="p-5 flex items-center justify-center lg:h-full sm:h-[40vh] xs:h-[40vh] w-[100vw] bg-white relative text-left leading-loose text-xs">
            <p>
              It is with great pleasure that I write this testimony for Adaptive
              design acted as our Interior Designer providing guidance on all
              our interior design matters relating to a very extensive
              renovation we undertook. They provided invaluable guidance in
              regard to color schemes, furniture selection, flooring and tiling,
              painting, lighting and accessories. This renovation involved a
              complete redesign of the interior of our office. The Association
              of Ethiopian Insurers currently has 19 members and working towards
              the growth & development of insurance business in Ethiopia,
              Harmonize the competitive market, enhance consumer protection,
              insurance awareness and capacity building of the industry
              workforce. We are ecstatic about the results Adaptive design
              achieved. It is a true testament to their talent that member
              companies and guests who visit our renovated office are in awe of
              the transformation. They are very creative. It was a pleasure to
              work with Adaptive design. Should you wish to discuss this
              recommendation in more detail please contact the Association of
              Ethiopian Insurers.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
