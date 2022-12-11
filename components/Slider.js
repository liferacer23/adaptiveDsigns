import React from "react";
import Carousel from "antd/lib/carousel";
import Image from "next/image";
import image1 from "../public/SliderImages/1.webp";
import image2 from "../public/SliderImages/2.webp";
import image3 from "../public/SliderImages/3.webp";
import image4 from "../public/SliderImages/4.webp";
export default function Slider() {
  return (
    <div className="flex md:flex-row xs:flex-col gap-10 items-start justify-between md:pl-11 h-[100vh]">
      <div className="md:w-[30%] xs:w-[100%] sm:w-[100%] flex flex-col justify-start items-center">
        <h1 className="">Adaptive Designs</h1>
      </div>
      <div className="md:w-[65%] xs:w-[100%] sm:w-[100%]">
        <Carousel autoplay>
          <div className="h-[90vh] w-full bg-gray-400  relative">
            <Image priority src={image1} alt="image1" object-fit="cover" fill />
          </div>
          <div className="h-[90vh] w-full bg-gray-400  relative">
            <Image priority src={image2} alt="image2" object-fit="cover" fill />
          </div>
          <div className="h-[90vh] w-full bg-gray-400  relative">
            <Image priority src={image3} alt="image3" object-fit="cover" fill />
          </div>
          <div className="h-[90vh] w-full bg-gray-400  relative">
            <Image priority src={image4} alt="image4" object-fit="cover" fill />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
