import React from "react";

export default function Philosophy() {
  return (
    <div className="w-full flex-col bg-white px-20">
      <div className="flex w-full items-center justify-start">
        <div className="flex">
          <span className="text-[3rem]">"</span>
          <div className="p-2 h-15 w-56 relative flex flex-col items-start justify-start g-0">
            <span className="font-bold text-[25px] text-black m-0 ">
              PHILOSOPHY
            </span>
            <span className="-mt-2 font-bold text-[15px] text-black">
              TWO CORE PRINCIPLES
            </span>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row sm:flex-col xs:flex-col items-center justify-center gap-10">
        <div className="flex lg:w-[32%] xs:w-full sm:w-full">
          <div></div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl">DETAILS!</span>
            <h5 className="text-xs leading-loose font-md">
              Our distinctive feature is attention to the little things and we
              consider ourselves perfectionists. At the end of the day the
              design is not for us but you; the user. Every single detail of the
              design the product or the furniture affects your overall
              experience and interaction with the space. With user experience
              leading the way uniqueness, functionality, elegance, budget and
              construction feasibility shape the design and execution.
            </h5>
          </div>
        </div>
        <div className="flex lg:w-[32%] xs:w-full sm:w-full">
          <div></div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl">CONTENT!</span>
            <h5 className="text-xs leading-loose font-md">
              We take pride in incorporating the Ethiopian culture into our
              design in a contemporary and elevated way. Culture is what
              separates us from the rest of the world, its who we are. in todays
              globalized world the design community is looking for fresh
              inspiration and we as Ethiopians are sitting on a goldmine! the
              old is still gold! it gives the design a sense of belonging and
              gives the user pride in their heritage
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
