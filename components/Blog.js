import React from "react";
import Button from "antd/lib/button";
export default function Blog() {
  return (
    <div className="bg-secondary text-white lg:px-20 xs:px-4 sm:px-4 h-full flex flex-col items-start justify-start ">
      <div className="flex flex-col items-start justify-center relative w-52 h-40 bg-secondary">
        <span className="text-[130px] text-white">06</span>
        <div className="h-16 flex flex-col w-22 px-2 absolute bottom-0 bg-secondary">
          <span className="font-bold text-2xl">BLOG</span>
          <span className="font-bold text-md">UPDATES</span>
        </div>
      </div>
      <div className="w-full h-full flex flex-wrap items-center justify-center gap-10 my-5">
        <div className="flex-col items-center justify-center">
          <Button className="w-60 h-96 bg-white"></Button>
          <div className="w-60 flex flex-col items-start justify-center ">
            <span className="font-bold text-sm">BLOG</span>
            <span className="font-bold text-2xl">BLOG</span>
            <span className="font-bold text-sm">BLOG</span>
          </div>
        </div>
        <div className="flex-col items-center justify-center">
          <Button className="w-60 h-96 bg-white"></Button>
          <div className="w-60 flex flex-col items-start justify-center ">
            <span className="font-bold text-sm">BLOG</span>
            <span className="font-bold text-2xl">ABOUT ADAPTIVE DESIGN</span>
            <span className="font-bold text-sm">BLOG</span>
          </div>
        </div>
        <div className="flex-col items-center justify-center">
          <Button className="w-60 h-96 bg-white"></Button>
          <div className="w-60 flex flex-col items-start justify-center ">
            <span className="font-bold text-sm">BLOG</span>
            <span className="font-bold text-2xl">PORTFOLIO</span>
            <span className="font-bold text-sm">BLOG</span>
          </div>
        </div>
      </div>
    </div>
  );
}
