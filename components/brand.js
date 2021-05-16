import styles from '../styles/globalmenu.module.scss';
import Link from 'next/link';

const Brand = () => {
    return(
        <div className={styles.brand}>
            <div className={styles.brand__wrap}>
                <Link href="/">
                    <a className={styles.brand__link}>
                        sn
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Brand;