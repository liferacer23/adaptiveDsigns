import React from "react";
import { motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
export default function ItemModal({ setModalState, itemModal }) {
  const handleModal = () => {
    setModalState(!itemModal);
    console.log(itemModal);
    console.log(setModalState);
  };
  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ x: 2000, opacity: 0 }}
      className="fixed top-0 w-[100vw] h-[100vh] bg-gray-500 bg-opacity-75 z-50
"
    >
      <motion.div
        className="w-full h-full flex items-center flex-col m-auto bg-white
       relative overflow-x-hidden overflow-y-auto"
      >
        <div className=" h-[fit-content] flex items-center justify-start absolute top-5 left-2">
          <button
            onClick={() => handleModal()}
            className="px-4 py-2 font-bold rounded-full focus:outline-none focus:shadow-outline"
          >
            <BiArrowBack className="inline-block mr-2 text-2xl" color="#000" />{" "}
          </button>
        </div>
        sadasdasd
      </motion.div>
    </motion.div>
  );
}
