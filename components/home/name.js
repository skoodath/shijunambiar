import styles from '../../styles/landing.module.scss'; 
import Social from './social';

const Name = () => {
    return (
        <section className={styles.name}>
          <section className={styles.namewrapper}>
            <h1 className={styles.nametext}>
              Shiju Nambiar
            </h1>
            <div className={styles.value}>
              <p className={styles.value_para}>
                I am a web developer and tech enthusiast based in India, creating modern, accessible and responsive websites.
              </p>
            </div>
            <Social />
          </section>
        </section>
    )
}

export default Name;