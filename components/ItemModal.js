import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
import ItemSlider from "./ItemSlider";
export default function ItemModal({
  setModalState,
  itemModal,
  modalData,
  setModalData,
}) {
  const handleModal = () => {
    setModalState(!itemModal);
  };

  useEffect(() => {
    return () => {
      setModalData(modalData);
    };
  }, []);
  return (
    <>
      <motion.div
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        exit={{ x: 2000, opacity: 0 }}
        className="fixed top-0 w-[100vw] h-[100vh] bg-white z-50 overflow-auto
      "
      >
        <div className="bg-secondary h-[fit-content] flex lg:flex-row sm:flex-col xs:flex-col lg:items-start xs:justify-start sm:justify-start lg:justify-between text-white pt-8 pb-4 lg:px-10">
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
          <h2 className="px-10 xs:text-2xl sm:text-2xl xl:text-[40px] lg:text-[50px] py-10">
            {modalData.obj.title}
          </h2>
        </div>
        <motion.div
          className="w-full h-[fit-content] flex items-center flex-col   bg-white
       relative overflow-hidden"
        >
          <div className="w-full h-[fit-content] bg-white lg:-ml-24 sm:-ml-6 xs:-ml-6">
            <div className="w-full h-[fit-content]  bg-white flex flex-col items-start justify-start sm:px-2 xs:px-2 lg:px-10">
              <div className="lg:mt-5 w-[100vw]   bg-white  flex flex-col items-end justify-start relative px-5">
                <ItemSlider
                  description={modalData.obj.description}
                  images={modalData.obj.image}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
