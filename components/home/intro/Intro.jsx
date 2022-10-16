import Title from "../../../utilities/Title";
import styles from "../../../styles/home.module.scss";
import { ButtonPrimary } from "../../../utilities/Button";
import CoreSkills from "./CoreSkills";
import OtherSkills from "./OtherSkills";
import Summary from "./Summary";
import Contacts from "./Contacts";

const Intro = () => {
  return (
    <section className={styles.intro_container}>
      <Title text="About Me" />
      <section className={styles.content}>
        <section className={styles.intro_section}>
          <Contacts />
          <Summary />
          <ButtonPrimary text="Learn More" route="about" />
        </section>
        <section className={styles.skill_section}>
          <h3 className={styles.intro_subheader}>Primary Skills</h3>
          <CoreSkills />
          <h3 className={styles.intro_subheader}>Secondary Skills</h3>
          <OtherSkills />
        </section>
      </section>
    </section>
  );
};

export default Intro;
