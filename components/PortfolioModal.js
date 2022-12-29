import React, { useEffect } from "react";
import { motion } from "framer-motion";
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
      className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 z-50 "
      onClick={() => setOpenModal(false)}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full flex items-center flex-col m-auto p-4 bg-white rounded-lg shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-4">
          {modalData && modalData.title}
        </h2>
        <p className="text-gray-700 mb-4">{modalData && modalData.content}</p>
        <button
          onClick={() => setOpenModal(false)}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
