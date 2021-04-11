import styles from '../../styles/work.module.scss';

const WorkDesc = ({text}) => (
  <p className={styles.desc_text}>{text}</p>
)

export default WorkDesc;