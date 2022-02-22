import styles from "../../styles/about.module.scss";

const About = () => {
  return (
    <div className={styles.wrapper} name="about">
      <div className={styles.inner}>
        <h2 className={styles.text}>About Me</h2>
        <section className={styles.intro_card}>
          <div className={styles.intro_inner}>
            <div className={styles.image_wrapper}>
              <div className={styles.image_inner}>
                <img
                  className={styles.profile}
                  src="../../images/profile.png"
                  alt="Shiju Nambiar"
                />
              </div>
            </div>
            <div className={styles.text_wrapper}>
              <div className={styles.text_inner}>
                <p className={styles.text_para}>
                  I am a web designer and developer based in India. I am
                  passionate about building performant, responsive, accessible
                  websites and build unique brand identity.
                </p>
              </div>
              <div className={styles.text_inner}>
                <p className={styles.text_para}>
                  I am a web designer and developer based in India. I am
                  passionate about building performant, responsive, accessible
                  websites and build unique brand identity.
                </p>
              </div>

              <div className={styles.text_inner}>
                <p className={styles.text_para}>
                  Over the years I have worked with clients, customers and
                  various stakeholders across cultural spectrums, leading high
                  performance teams, taking up challenging roles and
                  responsibilities,
                </p>
              </div>

              <div className={styles.text_inner}>
                <p className={styles.text_para}>
                  driving efficiency in technology and operations, building
                  websites and deploying enterprise applications.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
