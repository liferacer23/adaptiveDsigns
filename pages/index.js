import Head, { Html } from "next/head";

export default function Home() {
  return (
    <>
      <Html lang="en">
        <Head>
          <title>Adaptive Designs</title>
          <meta name="description" content="Adaptive Designs" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Html>
      <h1 className="text-3xl font-bold underline">Hi</h1>
    </>
  );
}
