import styles from "../styles/title.module.scss";

const Title = ({ text }) => {
  return <h2 className={styles.text}>{text}</h2>;
};

export default Title;
