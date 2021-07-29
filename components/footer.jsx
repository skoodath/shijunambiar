import styles from '../styles/landing.module.scss';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
    <div className={styles.introcontainer}>
        <div className={styles.introparacontainer}>
            <p>Web designer / developer based in Hyderabad, India</p>
        </div>
    <div className={styles.socialmediacontainer}>
        <FaGithub className={styles.socialicons} />
        <FaLinkedin className={styles.socialicons} />
        <FaEnvelope className={styles.socialicons} />
    </div>

</div>
)

export default Footer;


 