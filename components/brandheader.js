import styles from '../styles/headerwrapper.module.scss';
import Link from 'next/link';

const Brand = () => {
    return(
        <header className={styles.brand}>
            <div className={styles.brand__inner}>
                <div className={styles.brand__wrap}>
                    <Link href="/">
                        <a className={styles.brand__link}>
                            sn
                        </a>
                    </Link>
                </div>
                
            </div>
        </header>
    )
}

export default Brand;