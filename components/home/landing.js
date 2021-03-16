import styles from '../../styles/landing.module.scss';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Menu from './menu';

const Landing = () => {
    return (
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <div className={styles.titlewrapper}>
              <h2 className={styles.title}>Frontend Web Developer</h2>
            </div>
            <div className={styles.valuewrapper}>
              <p className={styles.valueprep}>
                I build responsive websites user friendly websites
              </p>
            </div>
            <Menu />
          </div>
        </div>
    )
}

export default Landing;