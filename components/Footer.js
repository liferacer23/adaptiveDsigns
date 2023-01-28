import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import logo from "../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center py-10 h-full bg-secondary w-full mt-20 gap-3 relative">
      <div className="flex items-center justify-center bg-white shadow-xl p-2 rounded-full w-20 h-20 absolute top-[-30px] ">
        <Image src={logo} className="w-20 h-20" alt="logo" />
      </div>
      <span className="text-white text-sm mt-5">adaptivedesigns.com</span>
      <div className="flex gap-2 items-center justify-center">
        <Link
          nofollow
          aria-label="instagram"
          href="https://www.instagram.com/adaptive_designs/"
          target="_blank"
        >
          {" "}
          <AiOutlineInstagram
            style={{ fontSize: "1rem", color: "#fff" }}
          />{" "}
        </Link>
        <Link
          nofollow
          aria-label="linkedin"
          href="https://www.linkedin.com/company/adaptivedesigns"
          target="_blank"
        >
          {" "}
          <FaLinkedinIn style={{ fontSize: "1rem", color: "#fff" }} />{" "}
        </Link>
        <Link
          nofollow
          aria-label="facebook"
          href="https://www.facebook.com/adaptivedesignsET/"
          target="_blank"
        >
          {" "}
          <GrFacebookOption style={{ fontSize: "1rem", color: "#fff" }} />{" "}
        </Link>
        <Link
          nofollow
          aria-label="telegram"
          href="https://t.me/adaptivedesigns"
          target="_blank"
        >
          {" "}
          <FaTelegramPlane style={{ fontSize: "1rem", color: "#fff" }} />{" "}
        </Link>
      </div>
    </div>
  );
}
