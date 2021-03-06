import styles from '../../styles/menu.module.scss';
import Link from 'next/link';

const AboutMenu = () => {
    return (
            <section className={styles.menuwrapper}>
              <div className={styles.menuwrapper__inner}>
                  <Link href="/work">
                    <a className={[styles.item, styles.menu__left].join(' ')}>work</a>
                  </Link>
              </div>
            </section>
    )
}

export default AboutMenu;