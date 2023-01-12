import React from "react";
import { useInView } from "react-intersection-observer";
import beforeExterior from "../public/BeforeAndAfter/1/before exterior.webp";
import afterExterior from "../public/BeforeAndAfter/1/after exterior.webp";
import beforeInterior from "../public/BeforeAndAfter/1/before interior.webp";
import afterInterior from "../public/BeforeAndAfter/1/after interior.webp";
import beforeInterior1 from "../public/BeforeAndAfter/2/beforeInterior1.webp";
import afterInterior2 from "../public/BeforeAndAfter/2/afterInterior1.webp";
import beforeInterior2 from "../public/BeforeAndAfter/2/beforeInterior2.webp";
import afterInterior1 from "../public/BeforeAndAfter/2/afterInterior2.webp";
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
            <div className=" flex items-center justify-center m-auto w-[65rem] lg:h-[45rem] sm:h[fit-content] xs:h[fit-content] sm:my-16 xs:my-16 ">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src={beforeExterior.src}
                    alt="Image one"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={afterExterior.src}
                    alt="Image two"
                  />
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
            <div className=" flex items-center justify-center m-auto w-[65rem] lg:h-[45rem] sm:h[fit-content] xs:h[fit-content] sm:my-16 xs:my-16 ">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src={beforeInterior.src}
                    alt="Image one"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={afterInterior.src}
                    alt="Image two"
                  />
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
            <div className=" flex items-center justify-center m-auto w-[38rem] lg:h-[45rem] sm:h[fit-content] xs:h[fit-content] sm:my-16 xs:my-16 ">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src={beforeInterior1.src}
                    alt="Image one"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={afterInterior1.src}
                    alt="Image two"
                  />
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
            <div className=" flex items-center justify-center m-auto w-[65rem] lg:h-[45rem] sm:h[fit-content] xs:h[fit-content] sm:my-16 xs:my-16 ">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src={beforeInterior2.src}
                    alt="Image one"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={afterInterior2.src}
                    alt="Image two"
                  />
                }
              />
            </div>
          </motion.div>,
        ]}
      />
    </motion.div>
  );
}
