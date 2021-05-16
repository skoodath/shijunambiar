import styles from '../../styles/landing.module.scss'; 

const Name = () => {
    return (
        <section className={styles.name}>
          <section className={styles.namewrapper}>
            <h1 className={styles.nametext}>
              Shiju Nambiar
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