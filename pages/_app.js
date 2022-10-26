import "../styles/globals.scss";
import Layout from "../components/layout";
import { motion } from "framer-motion";

function App({ Component, pageProps, router }) {
  return (
    <Layout>
      <motion.div
        key={router.route}
        initial={{
          opacity: 0,
          x: "50%",
        }}
        animate={{
          opacity: 1,
          x: "0%",
        }}
        transition={{
          duration: 0.3,
          bounce: 0,
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default App;
