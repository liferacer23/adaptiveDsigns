import { useEffect, useState } from "react";
import Head from "next/head";
import Slider from "../components/Slider";
import HeaderComponent from "../components/HeaderComponent";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import AboutUs from "../components/AboutUs";
import Philosophy from "../components/Philosophy";
import HowWeWork from "../components/HowWeWork";
import Team from "../components/Team";
import Clients from "../components/Clients";
import Blog from "../components/Blog";
import ContactUs from "../components/ContactUs";
export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (openModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [openModal]);
  return (
    <>
      <Head>
        <title>
          Adaptive Designs | Interior Design | Architectural Design | Turnkey,
          Product and Furniture
        </title>
        <meta
          name="description"
          content="
          We are the best Interior design company in Ethiopia, We work on different things like interior design, Architectural Design, Turnkey, Product and Furniture, and many more.
          "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`flex flex-col
      transition-all duration-1000
      `}
      >
        <HeaderComponent />
        <Slider />
        <Services />
        <Portfolio openModal={openModal} setOpenModal={setOpenModal} />
        <AboutUs />
        <Philosophy />
        <HowWeWork />
        <Team />
        <Clients />
        <Blog />
        <ContactUs />
      </div>
    </>
  );
}
