import styles from '../styles/headerwrapper.module.scss';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Social = () => {
    return(
        <header className={styles.social}>
          <div className={styles.social__inner}>
            <div className={styles.social__wrap}>
              <a 
                className={styles.social__link}
                href="https://www.linkedin.com/in/nambiars/">
                  <FaLinkedinIn />
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