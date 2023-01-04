import React from "react";
import { useInView } from "react-intersection-observer";
import img1 from "../public/cafe.webp";
import img2 from "../public/chair.webp";
import { motion } from "framer-motion";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import ComparisonSlider from "./ComparisonSlider";
export default function Team() {
  const { ref, inView } = useInView({});
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{ duration: 1 }}
      ref={ref}
      id="BeforeAndAfter"
      className="bg-secondary text-white lg:px-20 xs:px-4 sm:px-4 h-full flex flex-col items-start justify-start py-12"
    >
      <div className="flex flex-col items-start justify-center relative w-52 h-40 bg-secondary">
        <span className="text-[130px] text-white">04</span>
        <div className="h-13 flex flex-col w-22 px-2 absolute bottom-0 bg-secondary">
          <span className="font-bold text-2xl">Before & After</span>
          <span className="font-bold text-md">UPDATES</span>
        </div>
      </div>
      <ComparisonSlider
        slides={[
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            key={1}
            className="w-full flex items-center justify-center m-auto"
          >
            <div className="lg:w-[40rem] xl:w-[40rem] 2xl:w-[45rem] xs:w-[100%] sm:w-[100%] lg:h-[40rem] xl:h-[40rem] 2xl:h-[45rem] sm:h-[30rem] xs:h-[28rem] flex items-center justify-center m-auto">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage src={img1.src} alt="Image one" />
                }
                itemTwo={
                  <ReactCompareSliderImage src={img2.src} alt="Image two" />
                }
              />
            </div>
          </motion.div>,
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            key={2}
            className="w-full flex items-center justify-center m-auto"
          >
            <div className="lg:w-[40rem] xl:w-[40rem] 2xl:w-[45rem] xs:w-[100%] sm:w-[100%] lg:h-[40rem] xl:h-[40rem] 2xl:h-[45rem] sm:h-[30rem] xs:h-[28rem] flex items-center justify-center m-auto">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage src={img1.src} alt="Image one" />
                }
                itemTwo={
                  <ReactCompareSliderImage src={img2.src} alt="Image two" />
                }
              />
            </div>
          </motion.div>,
        ]}
      />
    </motion.div>
  );
}
