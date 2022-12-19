import Head from "next/head";
import Slider from "../components/Slider";
import HeaderComponent from "../components/HeaderComponent";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import AboutUs from "../components/AboutUs";
import Philosophy from "../components/Philosophy";
export default function Home() {
  return (
    <>
      <Head>
        <title>Adaptive Designs</title>
        <meta name="description" content="Adaptive Designs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col overflow-x-clip">
        <HeaderComponent />
        <Slider />
        <Services />
        <Portfolio />
        <AboutUs />
        <Philosophy />
      </div>
    </>
  );
}
