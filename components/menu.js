import styles from '../styles/globalmenu.module.scss';
import { Link } from 'react-scroll';

const Menu = () => {
    return (
            <section className={styles.menuwrapper}> 
              <div className={styles.menuwrapper__inner}>
                <Link 
                    to="home"
                    className={styles.menuitem}
                    smooth={true}
                    >
                    home
                  </Link>
                  <Link 
                    to="about"
                    className={styles.menuitem}
                    smooth={true}
                    >
                    about
                  </Link>
                  <Link 
                    to="work"
                    className={styles.menuitem}
                    smooth={true}
                  >
                    work
                  </Link>
              </div>
            </section>
    )
}

export default Menu;