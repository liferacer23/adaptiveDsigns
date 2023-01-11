import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToPrevSlide() {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function goToNextSlide() {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="w-full"
    >
      {slides[currentIndex]}
      <div className="w-full flex justify-center items-center lg:mt-10 gap-20">
        <button className="cursor-pointer" onClick={goToPrevSlide}>
          <BsChevronLeft className="text-3xl" />
        </button>
        <button className="cursor-pointer" onClick={goToNextSlide}>
          <BsChevronRight className="text-3xl" />
        </button>
      </div>
    </motion.div>
  );
}

export default Carousel;
