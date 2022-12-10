import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Adaptive Designs</title>
        <meta name="description" content="Adaptive Designs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
