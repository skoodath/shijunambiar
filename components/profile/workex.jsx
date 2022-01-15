import styles from "../../styles/profile.module.scss";
import Title from "./title";

const Experience = () => {
  return (
    <section className={styles.experience}>
      <Title text={"work experience"} />
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
        <h4 className={styles.roles}>
          Assistant Manager Operations | 2010 - 2016
        </h4>
        <p className={styles.jd}>
          PMO responsibilities for a team of 400+ Information Technology
          professionals driving key metrics, managing connects, planning,
          forecasting, risk management
        </p>
        <h4 className={styles.roles}>Team Leader | 2008 - 2010</h4>
        <p className={styles.jd}>
          PMO responsibilities for a team of 400+ Information Technology
          professionals driving key metrics, managing connects, planning,
          forecasting, risk management
        </p>
      </div>
      <div className={styles.prevexp}>
        <div className={styles.prevexp_left}>
          <h3 className={styles.org_old}>
            GCI Technologies Asia (Collabera Inc)
          </h3>
          <h4 className={styles.roles}>
            Assistant Operations Manager | June 07 -Dec 07
          </h4>
          <p className={styles.jd}>
            IT hiring admin role collaborating with vendors, clients, new hires,
            sales and recruiting to ensure smooth onboarding, transitioning,
            billing, timekeeping and payments
          </p>
        </div>
        <div className={styles.prevexp_right}>
          <h3 className={styles.org_old}>Infosys BPO (Formerly Progeon)</h3>
          <h4 className={styles.roles}>Team Leader | 2003 -2007</h4>
          <p className={styles.jd}>
            Lead a team of order management associates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
