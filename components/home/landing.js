import styles from '../../styles/landing.module.scss';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Menu from './menu';

const Landing = () => {
    return (
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <div className={styles.image_wrapper}>
              <img src='/images/shiju2.JPG'
              />
            </div>
            <div className={styles.titlewrapper}>
              <h2 className={styles.title}>Web Developer</h2>
            </div>
            <div className={styles.valuewrapper}>
              <p className={styles.valueprep}>
                This is a placeholder text before real text is added and real description is added.
              </p>
            </div>
            <div className={styles.contacts}>
              <a href="mailto:shiju.nambiar@outlook.com">
                <FaEnvelope />
              </a>
              <a href="https://www.linkedin.com/in/nambiars/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/skoodath">
                <FaGithub />
              </a>
            </div>
            <Menu />
          </div>
        </div>
    )
}

export default Landing;