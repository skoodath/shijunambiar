import styles from '../../styles/about.module.scss';
import AboutMe from './aboutlist';
import Skill from './skills';

const About = () => {
  return (
    <div className={styles.wrapper} name='about'>
      <div className={styles.inner}>
        <AboutMe />
        <Skill />
      </div>
    </div>
    
    )
  }

export default About;