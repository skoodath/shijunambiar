import styles from "../../styles/about.module.scss";
import Title from "../title";

import Skills from "./skills";

const AboutComponent = () => {
  const title = {
    name: "About Me",
  };
  const myStyle = {
    textDecoration: "underline",
    fontSize: "1.2rem",
    fontWeight: 600,
  };
  return (
    <section className={styles.wrapper} name="about">
      <div className={styles.inner}>
        <Title text={title.name} />
        <section className={styles.intro_card}>
          <div className={styles.intro_inner}>
            <div className={styles.text_wrapper}>
              <div className={styles.text_inner}>
                <p className={styles.text_para}>
                  I am a <span style={myStyle}>User Interface Designer</span>{" "}
                  and <span style={myStyle}>Web Developer</span> from India
                  Passionate about building performant, responsive, accessible
                  websites
                </p>
                <p className={styles.text_para}>
                  I have donned many hats over the last 15 years starting as
                  customer support associate,{" "}
                  <span style={myStyle}>leading teams</span> in business
                  operations for 12 years managing performance and conflicts and
                  supporting business operation of an IT vertical of 400 plus
                  resources contributing to strategic decision making, business
                  development, innovation and growth
                </p>
                <p className={styles.text_para}>
                  <span style={myStyle}>
                    In 2016, I decided to follow my passion and equip myself to
                    become a web developer
                  </span>
                </p>
                <p className={styles.text_para}>
                  I have been constantly learning and building my portfolio and
                  skills ever since!
                </p>
              </div>
            </div>
            <Skills />
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutComponent;
