import React from "react";
import Image from "next/image";
import Input from "antd/lib/input";
import TextArea from "antd/lib/input/TextArea";
import Button from "antd/lib/button";
export default function ContactUs() {
  return (
    <div
      id="Contact"
      className="lg:h-full xs:h-full sm:h-full xs:mb-14 sm:mb-14 py-12"
    >
      <div className="h-[20%] mt-5 bg-whit lg:px-20 xs:px-4 sm:px-4  flex flex-col items-start justify-start">
        <div className="flex justify-between">
          <div className="flex flex-col items-start justify-center relative w-52 h-40 bg-white">
            <span className="text-[130px] ">07</span>
            <div className="h-16 w-full flex flex-col px-3 absolute bottom-2 bg-white">
              <span className="font-bold text-2xl">CONTACT</span>
              <span className="font-bold text-xs">STAY IN TOUCH</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row sm:flex-col xs:flex-col px-10 items-center justify-evenly">
        <div className="flex flex-col w-[fit-content]">
          <div className="w-full flex flex-col items-start justify-start">
            <span className="font-bold text-md mt-5">Web</span>
            <span className="text-xs mt-2">www.adaptivedesignset.com</span>
          </div>
          <div className="w-full flex flex-col items-start justify-start">
            <span className="font-bold text-md mt-5">Phone</span>
            <span className=" text-xs mt-2">+251-924307368</span>
            <span className=" text-xs mt-2">+251-922597447</span>
            <span className=" text-xs mt-2">+251-10929680</span>
          </div>
          <div className="w-full flex flex-col items-start justify-start">
            <span className="font-bold text-md mt-5">Hours</span>
            <span className=" text-xs mt-2">8:30AM-5:30PM</span>
          </div>
          <div className="w-full flex flex-col items-start justify-start">
            <span className="font-bold text-md mt-5">ADDRESS</span>
            <span className=" text-xs mt-2">
              Megenagna, Equatorial Guninea St,
            </span>
            <span className=" text-xs mt-2">Addis Ababa, Ethiopia</span>
            <span className=" text-xs mt-2">
              Amare Abreham BLG infront of Deratu BLG
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[fit-content]">
          <div className="flex flex-col items-start justify-start">
            <span className="font-bold text-md mt-5">Name</span>
            <Input
              className=" lg:w-96 sm:w-72 xs:w-72 h-10 mt-2"
              size="large"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <span className="font-bold text-md mt-5">Email</span>
            <Input
              className=" lg:w-96 sm:w-72 xs:w-72 h-10 mt-2"
              size="large"
              type="email"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <span className="font-bold text-md mt-5">Message</span>
            <TextArea className=" lg:w-96 sm:w-72 xs:w-72 h-10 mt-2" />
          </div>
          <div className="flex flex-col items-start justify-start">
            <Button className="rounded-full h-12 mt-5 bg-white shadow-xl font-bold text-xl">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
