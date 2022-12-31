import React from "react";
import Image from "next/image";
import quots from "../public/blackQuots.svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Philosophy() {
  const { ref, inView } = useInView({});
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{ duration: 1 }}
      ref={ref}
      id="Philosophy"
      className="w-full flex-col bg-white lg:px-20 sm:px-4 xs:px-4 py-12"
    >
      <div className="flex w-full items-center justify-start mb-3 bt-3">
        <div className="flex">
          <Image
            src={quots}
            alt="quots"
            width={35}
            height={35}
            className="mt-2"
          />
          <div className="p-2 h-15 w-56 relative flex flex-col items-start justify-start g-0">
            <span className="font-bold text-[25px] text-black m-0 ">
              PHILOSOPHY
            </span>
            <span className="-mt-2 font-bold text-[12px] text-black">
              TWO CORE PRINCIPLES
            </span>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row sm:flex-col xs:flex-col items-center justify-center gap-10">
        <div className="flex gap-2 lg:w-[32%] xs:w-full sm:w-full">
          <div className="bg-black xs:w-2 sm:w-2 lg:w-2 h-20"></div>
          <div className="flex flex-col w-full">
            <span className="font-bold text-2xl">DETAILS!</span>
            <span className="text-xs leading-loose font-md">
              Our distinctive feature is attention to the little things and we
              consider ourselves perfectionists. At the end of the day the
              design is not for us but you; the user. Every single detail of the
              design the product or the furniture affects your overall
              experience and interaction with the space. With user experience
              leading the way uniqueness, functionality, elegance, budget and
              construction feasibility shape the design and execution.
            </span>
          </div>
        </div>
        <div className="flex lg:w-[32%] xs:w-full sm:w-full gap-2">
          <div className="bg-black xs:w-2 sm:w-2 lg:w-2 h-20"></div>
          <div className="flex flex-col  w-full">
            <span className="font-bold text-2xl">CONTENT!</span>
            <span className="text-xs leading-loose font-md">
              We take pride in incorporating the Ethiopian culture into our
              design in a contemporary and elevated way. Culture is what
              separates us from the rest of the world, its who we are. in todays
              globalized world the design community is looking for fresh
              inspiration and we as Ethiopians are sitting on a goldmine! the
              old is still gold! it gives the design a sense of belonging and
              gives the user pride in their heritage
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
