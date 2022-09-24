import Title from "../../../utilities/Title";
import styles from "../../../styles/home.module.scss";
import { ButtonPrimary } from "../../../utilities/Button";
import CoreSkills from "./CoreSkills";
import OtherSkills from "./OtherSkills";
import Contacts from "./Contacts";
import Summary from "./Summary";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.pattern_one}></div>
      <div className={styles.pattern_two}></div>
      <div className={styles.pattern_three}></div>
      <Title text="About Me" />
      <section className={styles.content}>
        <section className={styles.skill_section}>
          <h3 className={styles.about_subheader}>A Brief Summary</h3>
          <Summary />
          <ButtonPrimary text="My Journey" route="about" />
        </section>
        <section className={styles.skill_section}>
          <h3 className={styles.about_subheader}>Connect With Me!</h3>
          <Contacts />
        </section>
      </section>
      <section className={styles.skill_section}>
        <h3 className={styles.about_subheader}>Core Skills</h3>
        <CoreSkills />
      </section>
      <section className={styles.skill_section}>
        <h3 className={styles.about_subheader}>Extensible Skills</h3>
        <OtherSkills />
      </section>
    </section>
  );
};

export default About;
