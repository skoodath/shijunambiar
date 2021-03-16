import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import styles from '../../styles/header.module.scss';

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.image_wrapper}>
              <img src='/images/shiju2.JPG' alt='Shiju Nambiar' />
            </div>
            <h1 className={styles.heading}>Shiju Nambiar</h1>
            <div className={styles.contacts}>
              <a href="https://www.linkedin.com/in/nambiars/">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/skoodath">
                <FaGithub />
              </a>
            </div>
        </header>
    )
}

export default Header;