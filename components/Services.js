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
          <span className="text-xl font-bold">፩</span>
          <span className="text-md font-bold mt-4">ARCHITECTURE</span>
          <div className="flex flex-col items-start justify-start text-sm mt-4">
            <div> - Architectural design</div>
            <div> - Project consultancy </div>
            <div> - Complete building document</div>
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
          <div className="flex flex-col items-start justify-start text-sm mt-4">
            <div> - Concept Development</div>
            <div> - Shop Drawing </div>
            <div> - 3D Visualizations Image & Video</div>
          </div>
          <span className="text-sm mt-12">
            Creating ever refreshing spaces anchored in a modernized traditional
            essence by thoroughly tailored to your specific and deepest needs.
          </span>
        </div>
        <div className="flex flex-col xs:items-center sm:items-center lg:items-start justify-start my-5 w-72">
          <span className="text-xl font-bold">፫</span>
          <span className="text-md font-bold mt-4">TURNKEY PROJECT</span>
          <div className="flex flex-col items-start justify-start text-sm mt-4">
            <div> - Wood Work, Metal Works</div>
            <div> - Gypsum Board Works, Partition Works </div>
            <div> - Electrical, Pluming & Other fittings</div>
          </div>
          <span className="text-sm mt-12">
            Precise and robust execution of both interior and exterior designs
            in a way that saves you both time and resources. t needs.
          </span>
        </div>
        <div className="flex flex-col xs:items-center sm:items-center lg:items-start justify-start my-5 w-72">
          <span className="text-xl font-bold">፬</span>
          <span className="text-md font-bold mt-4">PRODUCT & FURNITURE</span>
          <div className="flex flex-col items-start justify-start text-sm mt-4">
            <div> - Product design & Development</div>
            <div> - Custom Furniture </div>
            <div> - Our Own Product Line</div>
          </div>
          <span className="text-sm mt-12">
            Designs that inspire and fill you with pride of your Ethiopian
            heritage! We create products and furniture that are truly modern yet
            depict the raw Ethiopian essence.
          </span>
        </div>
      </div>
    </div>
  );
}
