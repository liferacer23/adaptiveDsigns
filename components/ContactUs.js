import React from "react";
import Input from "antd/lib/input";
import TextArea from "antd/lib/input/TextArea";
import Button from "antd/lib/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function ContactUs() {
  const { ref, inView } = useInView({});
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{ duration: 1 }}
      ref={ref}
      id="Contact"
      className="lg:h-full xs:h-full sm:h-full xs:mb-14 sm:mb-14"
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

      <div className="flex lg:flex-row sm:flex-col xs:flex-col items-center justify-evenly">
        <div className="flex flex-col w-[fit-content] px-10">
          <div className="w-full flex flex-col items-start justify-start">
            <span className="font-bold text-md mt-5">Web</span>
            <span className="text-xs mt-2">www.adaptivedesignset.com</span>
          </div>
          <div className="w-full flex flex-col items-start justify-start">
            <span className="font-bold text-md mt-5">Phone</span>
            <span className=" text-xs mt-2">+251-924307368</span>
            <span className=" text-xs mt-2">+251-922597447</span>
          </div>
          <div className="w-full flex flex-col items-start justify-start">
            <span className="font-bold text-md mt-5">Hours</span>
            <span className=" text-xs mt-2">8:30AM-5:30PM</span>
          </div>
          <div className="w-full flex flex-col items-start justify-start">
            <span className="font-bold text-md mt-5">ADDRESS</span>
            <span className=" text-xs mt-2">
              Bole Atlas, Namibia St, Addis Ababa Ethiopia, LIYU BLG Behind Mado
              Hote
            </span>
            <span className=" text-xs mt-2">Addis Ababa, Ethiopia</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-[fit-content] px-10">
          <div className="flex flex-col items-start justify-start">
            <span className="font-bold text-md mt-5">Name</span>
            <Input
              label="Name"
              className=" lg:w-96 sm:w-72 xs:w-72 h-10 mt-2"
              size="large"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <span className="font-bold text-md mt-5">Email</span>
            <Input
              label="Email"
              className=" lg:w-96 sm:w-72 xs:w-72 h-10 mt-2"
              size="large"
              type="email"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <span className="font-bold text-md mt-5">Message</span>
            <TextArea
              label="Message"
              className=" lg:w-96 sm:w-72 xs:w-72 h-10 mt-2"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <Button className="rounded-full h-12 mt-5 bg-white shadow-xl font-bold text-xl">
              Send
            </Button>
          </div>
        </div>
        <div className="block h-[30rem] w-full py-4 px-4">
          <iframe
            src="https://maps.google.com/maps?q=ADAPTIVE%20INTERIOR%20DESIGNS,%20Namibia%20St,%20Addis%20Ababa%201000&t=&z=19&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            title="map"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
}
