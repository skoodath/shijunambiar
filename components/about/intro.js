import styles from '../../styles/about.module.scss';
import AboutMe from './aboutlist';
import Skill from './skills';

const Introduction = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <AboutMe />
        <Skill />
      </div>
    </div>
    
    )
  }

export default Introduction;