import "../styles/globals.css";
import Layout from "../components/Layout";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (
    <LazyMotion features={domAnimation}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </LazyMotion>
  );
}

export default MyApp;
