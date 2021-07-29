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
              width="180"
              height="240"
            />
          </div>
        </div>
        <div className={styles.text_wrapper}>
          <p className={styles.text_para}>
            I am a web designer and developer based in India. Web design and
            development is my passion and my focus is to build performant,
            responsive, accessible websites with the latest technology there is.
          </p>
          <p className={styles.text_para}>
            I believe it is important to connect with people I am creating
            things for to understand their perspective and priorities and also
            it is important to create things for everyone so that no one feels
            excluded while visiting the websites I create.
          </p>
          <p className={styles.text_para}>
            I have experience working with clients, customers and vendors across
            various cultural spectrums, leading high performance teams, taking
            up challenging roles and responsibilities, driving efficiency in
            technology and operations, building websites and deploying
            enterprise applications.
          </p>
        </div>
      </div>
    </article>
  );
};

export default AboutMe;
