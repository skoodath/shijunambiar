import styles from "../styles/about.module.scss";
import Title from "../utilities/Title";

const About = () => {
  const title = {
    name: "About Me",
  };
  const myStyle = {
    fontWeight: 900,
    color: "#0066ff",
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <Title text="About" />
        <section className={styles.intro_card}>
          <div className={styles.intro_inner}>
            <div className={styles.text_wrapper}>
              <div className={styles.text_inner}>
                <p className={styles.text_para}>
                  I am a
                  <br />
                  <span className={styles.text_alternate}>
                    self-taught <span style={myStyle}>Web Developer</span>
                  </span>{" "}
                  from Hyderabad, India!
                </p>
                <p className={styles.text_para}>
                  <span className={styles.text_alternate}>lead teams</span> in
                  customer support and business operations for more than 10
                  years!
                </p>
                <p className={styles.text_para}>
                  Managed an IT portfolio as a{" "}
                  <span className={styles.text_alternate}>
                    Business Support manager
                  </span>
                </p>
                <p className={styles.text_para}>
                  Along the way, I decided to follow my passion to become a{" "}
                  <span className={styles.text_alternate}>web developer</span>{" "}
                  and the journey continues!
                </p>
              </div>
            </div>
            <a
              href="../../ShijuNambiar.pdf"
              className={styles.resume_button}
              download
            >
              Download Resume
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
