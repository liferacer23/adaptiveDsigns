import React from "react";
import Button from "antd/lib/button";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BlogModal from "./BlogModal";
export default function Blog() {
  const { ref, inView } = useInView({});
  const [blogVisible, setModalVisible] = React.useState(false);
  const [blogData, setBlogData] = React.useState(1);

  return (
    <>
      <AnimatePresence>
        {blogVisible && (
          <BlogModal
            blogVisible={blogVisible}
            setModalVisible={setModalVisible}
            blogData={blogData}
          />
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 1 }}
        ref={ref}
        id="Blog"
        className="bg-secondary text-white lg:px-20 xs:px-4 sm:px-4 h-full flex flex-col items-start justify-start py-12"
      >
        <div className="flex flex-col items-start justify-center relative w-52 h-40 bg-secondary">
          <span className="text-[130px] text-white">06</span>
          <div className="h-16 flex flex-col w-22 px-2 absolute bottom-0 bg-secondary">
            <span className="font-bold text-2xl">BLOG</span>
            <span className="font-bold text-md">UPDATES</span>
          </div>
        </div>
        <div className="w-full h-full flex flex-wrap items-center justify-evenly gap-10 my-5">
          <div className="flex-col items-center justify-center">
            <div
              onClick={() => {
                setModalVisible(true);
                setBlogData(1);
              }}
              className="w-60 h-96 bg-white"
            ></div>
            <div
              onClick={() => {
                setModalVisible(true);
                setBlogData(1);
              }}
              className="w-60 flex flex-col items-start justify-center mt-5"
            >
              <span className="font-bold text-sm ">
                OFFICE INTERIOR DESIGN CONSIDERATIONS{" "}
              </span>
            </div>
          </div>
          <div className="flex-col items-center justify-center">
            <div
              onClick={() => {
                setModalVisible(true);
                setBlogData(2);
              }}
              className="w-60 h-96 bg-white"
            ></div>
            <div
              onClick={() => {
                setModalVisible(true);
                setBlogData(2);
              }}
              className="w-60 flex flex-col items-start justify-center mt-5"
            >
              <span className="font-bold text-sm">
                {" "}
                RETAIL INTERIOR DESIGN CONSIDERATIONS{" "}
              </span>
            </div>
          </div>
          <div className="flex-col items-center justify-center">
            <div
              onClick={() => {
                setModalVisible(true);
                setBlogData(3);
              }}
              className="w-60 h-96 bg-white"
            ></div>
            <div
              onClick={() => {
                setModalVisible(true);
                setBlogData(3);
              }}
              className="w-60 flex flex-col items-start justify-center mt-5"
            >
              <span className="font-bold text-sm">
                OUR INTERIOR DESIGN PREDICTIONS IN ETHIOPIA FOR 2023
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
