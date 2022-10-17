import styles from "../styles/common/title.module.scss";

const Title = ({ text }) => {
  return <h2 className={styles.text}>{text}</h2>;
};

export default Title;
