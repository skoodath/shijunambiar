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
                <div>Download Resume</div>
              </div>
              
          </div>
        </article>
    )
}

export default AboutMe;