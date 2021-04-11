import styles from '../../styles/about.module.scss';

const SkillCard = ({cardtitle, carddesc}) => {
  return (
    <div className={styles.card_wrapper}>
      <h2 className={styles.card_title}>{cardtitle}</h2>
      <p className={styles.card_text}>
        {carddesc}
      </p>
    </div>
    )
  }

export default SkillCard;