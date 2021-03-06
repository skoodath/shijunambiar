import styles from '../../styles/menu.module.scss';
import Link from 'next/link';

const Menu = () => {
    return (
            <section className={styles.menuwrapper}>
              <div className={styles.menuwrapper__inner}>
                  <Link href="/about">
                    <a className={[styles.item, styles.menu__left].join(' ')}>about</a>
                  </Link>
                  <Link href="/work">
                    <a className={[styles.item, styles.menu__right].join(' ')}>work</a>
                  </Link>
              </div>
            </section>
    )
}

export default Menu;