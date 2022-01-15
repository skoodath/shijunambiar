import styles from "../../styles/profile.module.scss";

const Title = ({ text }) => {
  return <h3 className={styles.sectiontitle}>{text}</h3>;
};

export default Title;
