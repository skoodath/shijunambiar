import styles from '../../styles/menu.module.scss';
import Link from 'next/link';

const Menu = () => {
    return (
            <section className={styles.menuwrapper}>
              <div className={styles.menuwrapper__inner}>
                  <Link href="/about">
                    <a className={[styles.item, styles.left].join(' ')}>about</a>
                  </Link>
                  <Link href="/technologies">
                    <a className={[styles.item, styles.right].join(' ')}>work</a>
                  </Link>
              </div>
            </section>
    )
}

export default Menu;