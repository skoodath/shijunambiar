import styles from '../../styles/about.module.scss';

const CardRight = ({title, desc}) => {
  return (
    <article className={styles.skill_card}>
        <div className={styles.skill_title}>
          <p className={styles.skill_title_text}>{title}</p>
        </div>
        <div className={styles.skill_desc}>
          <p className={styles.skill_desc_text}>{desc}</p>
        </div>
    </article>
    )
  }

export default CardRight;