import styles from '../styles/globalmenu.module.scss';
import Link from 'next/link';

const Brand = () => {
    return(
        <div className={styles.brand}>
            <div className={styles.brand__wrap}>
                <Link href="/">
                    <a className={styles.brand__link}>
                        <img src='/images/logo.png' alt='logo' />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Brand;