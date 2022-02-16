import styles from "../../styles/profile.module.scss";
import Title from "./title";

const Experience = () => {
  return (
    <section className={styles.experience}>
      <div>
        <h3 className={styles.org}>BA Continuum India</h3>
        <h4 className={styles.roles}>Software Engineer IIA | 2018 - Present</h4>
        <p className={styles.jd}>
          Software engineer in the consumer banking technology team, working
          with developers, testers, database administrators, service and server
          support teams during the build, test, deploy and release phases of
          Pega applications
        </p>
        <p className={styles.jd}>
          SharePoint UI developer and site collection administrator managing 50
          plus SharePoint sites for consumer banking operations teams
        </p>
        <h4 className={styles.roles}>Software Engineer IIA | 2018 - Present</h4>
        <p className={styles.jd}>
          PMO responsibilities for a team of 400+ Information Technology
          professionals driving key metrics, managing connects, planning,
          forecasting, risk management
        </p>
      </div>
    </section>
  );
};

export default Experience;
