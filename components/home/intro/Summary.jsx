import styles from "../../../styles/home.module.scss";

const Summary = () => {
  return (
    <div className={styles.left}>
      <p className={styles.para}>
        I am a self-taught web developer primarily building websites and webapps
        using ReactJS.
      </p>
      <p className={styles.para}>
        I live in Hyderabad, India and have been on an exciting journey of
        software development. I am also an amateur photographer and occassional
        blogger. Connect with me
      </p>
    </div>
  );
};

export default Summary;
