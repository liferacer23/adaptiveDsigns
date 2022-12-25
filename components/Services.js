import React from "react";

export default function Services() {
  return (
    <div className="bg-secondary text-white lg:px-20 xs:px-4 sm:px-4 h-full flex flex-col items-start justify-start ">
      <div className="flex flex-col items-start justify-center relative w-52 h-40 bg-secondary">
        <span className="text-[130px] text-white">01</span>
        <div className="h-14 flex flex-col w-full absolute bottom-0 bg-secondary">
          <span className="font-bold text-2xl">SERVICES</span>
          <span className="font-bold text-md">WHAT WE DO</span>
        </div>
      </div>
      <div className="flex flex-wrap xs:items-center sm:items-center xs:justify-center sm:justify-center lg:justify-center xl:justify-around  w-full gap-2">
        <div className="flex flex-col xs:items-center sm:items-center lg:items-start justify-start my-5 w-72">
          <h2 className="text-xl font-bold">፩</h2>
          <h2 className="text-md font-bold mt-4">ARCHITECTURE</h2>
          <div className="flex flex-col items-start justify-start text-sm mt-4 w-full">
            <h2> - Architectural design</h2>
            <h2> - Project consultancy </h2>
            <h2> - Complete building document</h2>
          </div>
          <span className="text-sm mt-12">
            Putting your experience first to create designs that merge your
            needs, social and natural context & the Ethiopian way of living with
            contemporary design
          </span>
        </div>
        <div className="flex flex-col xs:items-center sm:items-center lg:items-start justify-start my-5 w-72">
          <h2 className="text-xl font-bold">፪</h2>
          <h2 className="text-md font-bold mt-4">INTERIOR</h2>
          <div className="flex flex-col items-start justify-start text-sm mt-4 w-full">
            <h2> - Concept Development</h2>
            <h2> - Shop Drawing </h2>
            <h2> - 3D Visualizations Image & Video</h2>
          </div>
          <span className="text-sm mt-12">
            Creating ever refreshing spaces anchored in a modernized traditional
            essence by thoroughly tailored to your specific and deepest needs.
          </span>
        </div>
        <div className="flex flex-col xs:items-center sm:items-center lg:items-start justify-start my-5 w-72">
          <h2 className="text-xl font-bold">፫</h2>
          <h2 className="text-md font-bold mt-4">TURNKEY PROJECT</h2>
          <div className="flex flex-col items-start justify-start text-sm mt-4 w-full">
            <h2> - Wood Work, Metal Works</h2>
            <h2> - Gypsum Board Works, Partition Works </h2>
            <h2> - Electrical, Pluming & Other fittings</h2>
          </div>
          <h2 className="text-sm mt-12">
            Precise and robust execution of both interior and exterior designs
            in a way that saves you both time and resources. t needs.
          </h2>
        </div>
        <div className="flex flex-col xs:items-center sm:items-center lg:items-start justify-start my-5 w-72">
          <h2 className="text-xl font-bold">፬</h2>
          <h2 className="text-md font-bold mt-4">PRODUCT & FURNITURE</h2>
          <div className="flex flex-col items-start justify-start text-sm mt-4 w-full">
            <h2> - Product design & Development</h2>
            <h2> - Custom Furniture </h2>
            <h2> - Our Own Product Line</h2>
          </div>
          <h2 className="text-sm mt-12">
            Designs that inspire and fill you with pride of your Ethiopian
            heritage! We create products and furniture that are truly modern yet
            depict the raw Ethiopian essence.
          </h2>
        </div>
      </div>
    </div>
  );
}
