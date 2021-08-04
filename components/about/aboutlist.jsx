import styles from "../../styles/about.module.scss";

const AboutMe = () => {
  return (
    <article className={styles.intro_card}>
      <div className={styles.intro_inner}>
        <div className={styles.image_wrapper}>
          <div className={styles.image_inner}>
            <img
              className={styles.profile}
              src="../../images/profile.jpg"
              alt="Shiju Nambiar"
              width="150"
              height="200"
            />
          </div>
        </div>
        <div className={styles.text_wrapper}>
          <p className={styles.text_para}>
            I am a web designer and developer based in India. I am passionate
            about building performant, responsive, accessible websites and build
            unique brand identity. Over the years I have worked with clients,
            customers and various stakeholders across cultural spectrums,
            leading high performance teams, taking up challenging roles and
            responsibilities, driving efficiency in technology and operations,
            building websites and deploying enterprise applications.
          </p>
        </div>
      </div>
    </article>
  );
};

export default AboutMe;
