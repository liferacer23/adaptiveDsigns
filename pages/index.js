import { useEffect, useState } from "react";
import Head from "next/head";
import Slider from "../components/Slider";
import HeaderComponent from "../components/HeaderComponent";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import AboutUs from "../components/AboutUs";
import Philosophy from "../components/Philosophy";
import HowWeWork from "../components/HowWeWork";
import BeforeAndAfter from "../components/BeforeAndAfter";
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
          Adaptive Designs Best interior Design in Addis Ababa, Ethiopia
        </title>
        <meta
          name="description"
          content="
          We are the best Interior design company in Addis Ababa, Ethiopia, We work on different things like interior design, Architectural Design, Turnkey, Product.
          "
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.adaptivedesignset.com/" />
        <link rel="alternate" href="https://www.adaptivedesignset.com/" />
        <link
          rel="alternate"
          href="https://www.adaptivedesignset.com/"
          hrefLang="en"
          type="text/html"
          title="Adaptive Designs - Interior Design - Addis Ababa, , Ethiopia"
        />
        <meta
          name="keywords"
          content="Interior Design, Architectural Design, Turnkey, Product, Addis Ababa, Ethiopia"
        />
        <meta name="author" content="Adaptive Designs" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Adaptive Designs" />
        <meta
          property="og:description"
          content="We are the best Interior design company in AddisAbaba, Ethiopia, We work on different things like interior design, Architectural Design, Turnkey, Product."
        />
        <meta property="og:url" content="https://www.adaptivedesignset.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Adaptive Designs" />
        <meta property="og:image" content="/images/adaptive-designs.png" />
        <meta
          property="og:image:secure_url"
          content="/images/adaptive-designs.png"
        />
        <meta property="og:image:alt" content="Adaptive Designs" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AdaptiveDesigns" />
        <meta name="twitter:creator" content="@AdaptiveDesigns" />
        <meta name="twitter:title" content="Adaptive Designs" />
        <meta
          name="twitter:description"
          content="We are the best Interior design company in AddisAbaba, Ethiopia, We work on different things like interior design, Architectural Design, Turnkey, Product."
        />
        <meta name="twitter:image" content="/images/adaptive-designs.png" />
        <meta name="twitter:image:alt" content="Adaptive Designs" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta
          name="twitter:domain"
          content="https://www.adaptivedesignset.com/"
        />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="Adaptive Designs" />
        <meta name="twitter:label2" content="Est. reading time" />
        <meta name="twitter:data2" content="2 minutes" />
        <meta name="twitter:app:name:iphone" content="Adaptive Designs" />
        <meta
          name="twitter:app:id:iphone"
          content="https://www.facebook.com/adaptivedesignsET/"
        />
        <meta
          name="twitter:app:url:iphone"
          content="adaptive-designs://page/123456789"
        />
        <meta name="twitter:app:name:ipad" content="Adaptive Designs" />
        <meta
          name="twitter:app:id:ipad"
          content="https://www.facebook.com/adaptivedesignsET/"
        />
        <meta
          name="twitter:app:url:ipad"
          content="adaptive-designs://page/123456789"
        />
        <meta name="twitter:app:name:googleplay" content="Adaptive Designs" />
        <meta name="twitter:app:id:googleplay" content="com.adaptive-designs" />
        <meta
          name="twitter:app:url:googleplay"
          content="adaptive-designs://page/123456789"
        />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/adaptivedesignsET/"
        />
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
        <BeforeAndAfter />
        <Clients />
        <Blog />
        <ContactUs />
      </div>
    </>
  );
}
