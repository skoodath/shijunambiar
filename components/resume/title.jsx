import styles from "../../styles/resume.module.scss";

const Title = ({ text }) => {
  return <h3 className={styles.sectiontitle}>{text}</h3>;
};

export default Title;
