import styles from "../../styles/home.module.scss";
import Featured from "./featured/Featured";
import Contacts from "./intro/Contacts";
import Intro from "./intro/Intro";
import Landing from "./landing/Landing";

const Home = () => {
  return (
    <>
      <section className={styles.home} name="home">
        <Landing />
        <Intro />
        <Featured />
      </section>
    </>
  );
};

export default Home;
