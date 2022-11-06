import "../styles/globals.scss";
import Layout from "../components/layout";
import { AnimatePresence } from "framer-motion";

function App({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence key={router.route}>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default App;
