import styles from '../../styles/landing.module.scss';
import Social from './social';
import Menu from '../menu';
import Name from './name';
import Value from './value';
import Brand from '../../components/brand';

const Landing = () => {
    return (
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <Brand />
            <Menu />
            <Name />
            <Social />
          </div>
        </div>
    )
}

export default Landing;