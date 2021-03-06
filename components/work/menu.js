import styles from '../../styles/menu.module.scss';
import Link from 'next/link';

const WorkMenu = () => {
    return (
            <section className={styles.menuwrapper}>
              <div className={styles.menuwrapper__inner}>
                  <Link href="/about">
                    <a className={[styles.item, styles.menu__left].join(' ')}>about</a>
                  </Link>
              </div>
            </section>
    )
}

export default WorkMenu;