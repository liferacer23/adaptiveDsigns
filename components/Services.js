import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Services() {
  const { ref, inView } = useInView({});
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{ duration: 1 }}
      ref={ref}
      id="Services"
      className="bg-secondary text-white lg:px-20 xs:px-4 sm:px-4 h-full flex flex-col items-start justify-start py-12"
    >
      <div className="flex flex-col items-start justify-center relative w-52 h-40 bg-secondary">
        <span className="text-[130px] text-white">01</span>
        <div className="h-14 flex flex-col w-full absolute bottom-0 bg-secondary">
          <span className="font-bold text-2xl">SERVICES</span>
          <span className="font-bold text-md">WHAT WE DO</span>
        </div>
      </div>
      <div className="flex flex-wrap xs:items-center sm:items-center xs:justify-center sm:justify-center lg:justify-center xl:justify-around  w-full gap-2">
        <div className="flex flex-col xs:items-center sm:items-center lg:items-start justify-start my-5 w-72">
          <span className="text-xl font-bold">፩</span>
          <span className="text-md font-bold mt-4">ARCHITECTURE</span>
          <div className="flex flex-col items-start justify-start text-sm mt-4 w-full">
            <span> - Architectural design</span>
            <span> - Project consultancy </span>
            <span> - Complete building document</span>
          </div>
          <span className="text-sm mt-12">
            Putting your experience first to create designs that merge your
            needs, social and natural context & the Ethiopian way of living with
            contemporary design
          </span>
        </div>
        <div className="flex flex-col xs:items-center sm:items-center lg:items-start justify-start my-5 w-72">
          <span className="text-xl font-bold">፪</span>
          <span className="text-md font-bold mt-4">INTERIOR</span>
          <div className="flex flex-col items-start justify-start text-sm mt-4 w-full">
            <span> - Concept Development</span>
            <span> - Shop Drawing </span>
            <span> - 3D Visualizations Image & Video</span>
          </div>
          <span className="text-sm mt-12">
            Creating ever refreshing spaces anchored in a modernized traditional
            essence by thoroughly tailored to your specific and deepest needs.
          </span>
        </div>
        <div className="flex flex-col xs:items-center sm:items-center lg:items-start justify-start my-5 w-72">
          <span className="text-xl font-bold">፫</span>
          <span className="text-md font-bold mt-4">TURNKEY PROJECT</span>
          <div className="flex flex-col items-start justify-start text-sm mt-4 w-full">
            <span> - Wood Work, Metal Works</span>
            <span> - Gypsum Board Works, Partition Works </span>
            <span> - Electrical, Pluming & Other fittings</span>
          </div>
          <span className="text-sm mt-12">
            Precise and robust execution of both interior and exterior designs
            in a way that saves you both time and resources it needs.
          </span>
        </div>
        <div className="flex flex-col xs:items-center sm:items-center lg:items-start justify-start my-5 w-72">
          <span className="text-xl font-bold">፬</span>
          <span className="text-md font-bold mt-4">PRODUCT & FURNITURE</span>
          <div className="flex flex-col items-start justify-start text-sm mt-4 w-full">
            <span> - Product design & Development</span>
            <span> - Custom Furniture </span>
            <span> - Our Own Product Line</span>
          </div>
          <span className="text-sm mt-12">
            Designs that inspire and fill you with pride of your Ethiopian
            heritage! We create products and furniture that are truly modern yet
            depict the raw Ethiopian essence.
          </span>
        </div>
      </div>
    </motion.div>
  );
}
