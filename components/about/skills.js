import styles from '../../styles/about.module.scss';
import CardLeft from './cardleft';
import CardRight from './cardright';

const Skills = ({carddesc}) => {
  return (
    <div className={styles.skill_wrapper}>
      <div className={styles.skill_inner}>
        <CardLeft
          title='Technology'
        />
        <CardRight
          title='Leadership'
        />

      </div>

    </div>
    )
  }

export default Skills;