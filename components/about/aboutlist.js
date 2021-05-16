import styles from '../../styles/about.module.scss';

const AboutMe = () => {
    return(
        <article className={styles.intro_card}>
          <div className={styles.intro_inner}>
              <div className={styles.image_wrapper}>
                  <div className={styles.image_inner}>
                    <img className={styles.profile} src="../../images/profile.jpg" alt="Shiju Nambiar" />
                  </div> 
              </div>
              <div className={styles.text_wrapper}>
                <p className={styles.introduction}>
                  I am self taught software developer who is in love with web technologies. I consistently perserve to learn new skills. I am self taught software developer who is in love with web technologies. I consistently perserve to learn new skills. I am self taught software developer who is in love with web technologies. I consistently perserve to learn new skills.
                </p>
              </div>
          </div>
        </article>
    )
}

export default AboutMe;