import styles from '../styles/headerwrapper.module.scss';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Social = () => {
    return(
        <header className={styles.social}>
          <div className={styles.social__inner}>
            <div className={styles.social__wrap}>
              <a 
                href="mailto:shiju.nambiar@outlook.com" 
                className={styles.social__link}>
                  <FaEnvelope />
              </a>
              <a 
                className={styles.social__link}
                href="https://www.linkedin.com/in/nambiars/">
                  <FaLinkedin />
              </a>
              <a 
                className={styles.social__link}
                href="https://github.com/skoodath">
                  <FaGithub />
                </a>
            </div>
          </div>
        </header>
    )
}

export default Social;