import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
import ArchitectureModal from "./ArchitectureModal";
import InteriorModal from "./InteriorModal";
import ProductModal from "./ProductModal";
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
        className="w-full h-full flex items-center flex-col m-auto bg-white shadow-xl
       relative overflow-x-hidden overflow-y-auto"
      >
        <div className=" h-[fit-content] flex items-center justify-start absolute top-5 left-2">
          <button
            onClick={() => setOpenModal(false)}
            className="px-4 py-2 font-bold rounded-full focus:outline-none focus:shadow-outline"
          >
            <BiArrowBack className="inline-block mr-2 text-2xl" color="#FFf" />{" "}
          </button>
        </div>

        {modalData.title === "Architecture" && (
          <ArchitectureModal modalData={modalData} />
        )}
        {modalData.title === "Interior Design" && (
          <InteriorModal modalData={modalData} />
        )}
        {modalData.title === "Product & Furniture" && (
          <ProductModal modalData={modalData} />
        )}
      </motion.div>
    </motion.div>
  );
}
