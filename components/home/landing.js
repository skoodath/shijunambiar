import styles from '../../styles/landing.module.scss';
import Name from './name';

const Landing = () => {
    return (
        <div className={styles.wrapper}>
          <div className={styles.overlay}></div>
          <div className={styles.inner}>
            <Name />
          </div>
        </div>
    )
}

export default Landing;