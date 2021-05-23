import styles from '../styles/globalmenu.module.scss';
import Link from 'next/link';

const Menu = () => {
    return (
            <section className={styles.menuwrapper}>
              <div className={styles.menuwrapper__inner}>
                  <Link href="/">
                    <a className={styles.menuitem}>home</a>
                  </Link>
                  <Link href="/about">
                    <a className={styles.menuitem}>about</a>
                  </Link>
                  <Link href="/work">
                    <a className={styles.menuitem}>work</a>
                  </Link>
              </div>
            </section>
    )
}

export default Menu;