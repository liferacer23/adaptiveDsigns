import { useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        className="flex flex-col overflow-hidden
      transition-all duration-1000
      "
      >
        <HeaderComponent />
        <Slider />
        <Services />
        <Portfolio />
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
