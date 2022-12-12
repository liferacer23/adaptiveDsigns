import React from "react";
import Carousel from "antd/lib/carousel";
import Image from "next/image";
import image1 from "../public/SliderImages/1.webp";
import image2 from "../public/SliderImages/2.webp";
import image3 from "../public/SliderImages/3.webp";
import image4 from "../public/SliderImages/4.webp";
export default function Slider() {
  return (
    <div className="flex h-[100vh] mb-52">
      <div className=" w-full">
        <Carousel autoplay className="">
          <div className="md:h-[50rem] sm:h-[50vh] xs:h-[40vh] w-[100vw] bg-white relative">
            <Image priority src={image1} alt="image1" object-fit="cover" fill />
          </div>
          <div className="md:h-[50rem] sm:h-[50vh] xs:h-[40vh] w-[100vw]   relative ">
            <Image priority src={image2} alt="image2" object-fit="cover" fill />
          </div>
          <div className="md:h-[50rem] sm:h-[50vh] xs:h-[40vh]  w-[100vw]   relative ">
            <Image priority src={image3} alt="image3" object-fit="cover" fill />
          </div>
          <div className="md:h-[50rem] sm:h-[50vh] xs:h-[40vh]  w-[100vw]  relative ">
            <Image priority src={image4} alt="image4" object-fit="cover" fill />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
