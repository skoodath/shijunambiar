import styles from '../../styles/menu.module.scss';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs';

const Menu = () => {
    return (
            <section className={styles.menuwrapper}>
              <div className={styles.menuwrapper__inner}>
                  <Link href="/about">
                    <a className={[styles.item, styles.left].join(' ')}><BsChevronCompactLeft />about</a>
                  </Link>
                  <Link href="/technologies">
                    <a className={[styles.item, styles.right].join(' ')}>work <BsChevronCompactRight /></a>
                  </Link>
              </div>
            </section>
    )
}

export default Menu;