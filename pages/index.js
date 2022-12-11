import Head from "next/head";
import Slider from "../components/Slider";
export default function Home() {
  return (
    <>
      <Head>
        <title>Adaptive Designs</title>
        <meta name="description" content="Adaptive Designs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider />
    </>
  );
}
