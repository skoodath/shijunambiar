import styles from "../../styles/home.module.scss";
import About from "./about/About";
import Landing from "./landing/Landing";

const Home = () => {
  return (
    <>
      <section className={styles.home} name="home">
        <Landing />
        <About />
      </section>
    </>
  );
};

export default Home;
