import Link from "next/link";
import { motion } from "framer-motion";
export default function CartModal({ setOpen, isOpen }) {
  // const cartHandler = (e) => {
  //   e.stopPropagation();
  //   setOpen((prev) => !prev);
  // };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      layout
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={` ${
        !isOpen ? "hidden" : ""
      } z-40 fixed inset-0 lg:hidden mt-12`}
    >
      {/* <div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 800, opacity: 0 }}
        exit={{ x: 800, opacity: 0 }}
        transition={{ duration: 1 }}
        onClick={(e) => {
          cartHandler(e);
        }}
        className={`${
          !isOpen ? "hidden" : ""
        } fixed inset-0 bg-gray-800 bg-opacity-50 overflow-y-auto h-full w-full mt-12`}
      ></div> */}

      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 800, opacity: 0 }}
        exit={{ x: 800, opacity: 0 }}
        transition={{ duration: 0.7 }}
        className={`${
          !isOpen ? "hidden" : ""
        } overflow-y-auto overflow-x-hidden absolute bg-white top-0 right-0 h-full z-50 w-52 md:w-3/5 flex flex-col p-2 items-center justify-start px-5 md:px-14`}
      >
        <div>
          <div className="flex flex-col w-full justify-start items-center">
            <Link href="#Header">
              <div
                onClick={() => {
                  setOpen(!isOpen);
                }}
                className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm"
              >
                HOME
              </div>
            </Link>
            <Link href="#Services">
              <div
                onClick={() => {
                  setOpen(!isOpen);
                }}
                className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm"
              >
                SERVICES
              </div>
            </Link>
            <Link href="#Portfolio">
              <div
                onClick={() => {
                  setOpen(!isOpen);
                }}
                className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm"
              >
                PORTFOLIO
              </div>
            </Link>
            <Link href="#AboutUs">
              <div
                onClick={() => {
                  setOpen(!isOpen);
                }}
                className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm"
              >
                ABOUT
              </div>
            </Link>
            <Link href="#Team">
              <div
                onClick={() => {
                  setOpen(!isOpen);
                }}
                className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm"
              >
                TEAM
              </div>
            </Link>
            <Link href="#Clients">
              <div
                onClick={() => {
                  setOpen(!isOpen);
                }}
                className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm"
              >
                CLIENTS
              </div>
            </Link>
            <Link href="#Blog">
              <div
                onClick={() => {
                  setOpen(!isOpen);
                }}
                className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm"
              >
                BLOG
              </div>
            </Link>
            <Link href="#Contact">
              <div
                onClick={() => {
                  setOpen(!isOpen);
                }}
                className="flex w-24 h-10 justify-center items-end pb-1 cursor-pointer hover:border-b-4 transition-all duration-100 text-sm"
              >
                CONTACT
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
