import "../styles/globals.scss";
import Layout from "../components/layout";
import { motion } from "framer-motion";

function App({ Component, pageProps, router }) {
  return (
    <Layout>
      <motion.div
        key={router.route}
        initial={{
          scale: 0.8,
          opacity: 0,
          x: "50%",
        }}
        animate={{
          scale: 1,
          opacity: 1,
          x: "0%",
        }}
        transition={{
          duration: 0.5,
          bounce: 0,
          damping: 200,
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default App;
