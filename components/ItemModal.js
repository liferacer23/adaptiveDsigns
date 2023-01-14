import React from "react";
import { motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
export default function ItemModal({ setModalState, itemModal, modalData }) {
  const handleModal = () => {
    setModalState(!itemModal);
    console.log(itemModal);
    console.log(setModalState);
  };
  return (
    <>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        exit={{ x: 2000, opacity: 0 }}
        className="fixed top-0 w-[100vw] h-[100vh] bg-gray-500 bg-opacity-75 z-50
      "
      >
        <div className="bg-secondary flex lg:flex-row sm:flex-col xs:flex-col lg:items-start xs:justify-start sm:justify-start lg:justify-between text-white pt-14 h-[10rem] pb-4 lg:px-10">
          <div className=" h-[fit-content] flex items-center justify-start absolute top-5 left-2">
            <button
              onClick={() => handleModal()}
              className="px-4 py-2 font-bold rounded-full focus:outline-none focus:shadow-outline"
            >
              <BiArrowBack
                className="inline-block mr-2 text-2xl"
                color="#fffd"
              />{" "}
            </button>
          </div>
        </div>
        <motion.div
          className="w-full h-full flex items-center flex-col m-auto bg-white
       relative overflow-x-hidden overflow-y-auto"
        >
          <div className="w-full h-full">
            <div className="w-full h-full flex flex-col items-start justify-start sm:px-2 xs:px-2 lg:px-10">
              <div className="lg:mt-5 w-[100%] h-[30rem] flex flex-col items-start justify-start relative">
                <Image
                  src={modalData.image}
                  alt="image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="">
                <h1 className="text-2xl font-bold">{modalData.title}</h1>
                <p className="text-lg">{modalData.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
