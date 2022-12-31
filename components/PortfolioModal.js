import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
export default function PortfolioModal({ open, setOpenModal, modalData }) {
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
    };
    if (open) {
      window.addEventListener("wheel", handleScroll);
    } else {
      window.removeEventListener("wheel", handleScroll);
    }
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [open]);
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: open ? 1 : 0, opacity: open ? 1 : 0 }}
      transition={{ duration: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 z-50
"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full flex items-center flex-col m-auto p-4 bg-white rounded-lg shadow-xl
      overflow-auto "
      >
        <div className="w-full h-[fit-content] flex items-center justify-start">
          <button
            onClick={() => setOpenModal(false)}
            className="px-4 py-2 font-bold rounded-full focus:outline-none focus:shadow-outline"
          >
            <BiArrowBack className="inline-block mr-2 text-2xl" color="#000" />{" "}
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">
          {modalData.title && modalData.title}
        </h2>
        <p className="text-gray-700 mb-4">
          {modalData.content && modalData.content}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          veritatis dolore tenetur corporis nulla! Eveniet eos voluptatibus
          nihil a veniam vitae molestiae! Quam voluptates, fugiat doloremque
          aspernatur cum esse nihil!
        </p>
        <div className="w-full flex flex-wrap p-2 items-center justify-center">
          {modalData.images &&
            modalData.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                layout={`${
                  modalData.multiple === true ? "fixed" : "responsive"
                }`}
                width={modalData.multiple === true ? 300 : 500}
                height={modalData.multiple === true ? 300 : 500}
                alt="Portfolio image"
              />
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
