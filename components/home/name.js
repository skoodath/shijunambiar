import styles from '../../styles/landing.module.scss';

const Name = () => {
    return (
        <section className={styles.name}>
          <div className={styles.salute}>
            <p className={styles.salute_para}>Hi, I am</p>
          </div>
          <section className={styles.namewrapper}>
            <h1 className={styles.nametext}>
              <span>Shiju</span>
              <span>Nambiar</span>
            </h1>
            <div className={styles.value}>
              <p className={styles.value_para}>
                I create static websites or dynamic websites that make use of public APIs. I create static websites or dynamic websites that make use of public APIs. I create static websites or dynamic websites that make use of public APIs.
              </p>
            </div>
          </section>
        </section>
    )
}

export default Name;