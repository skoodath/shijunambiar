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
                <p
                  className={[styles.text_para, styles.text_font_big].join(" ")}
                >
                  self-taught{" "}
                  <span style={{ fontWeight: 900 }}>
                    User Interface designer
                  </span>{" "}
                  and <span style={{ fontWeight: 900 }}>Web Developer</span>{" "}
                  from India -
                </p>
              </div>
              <div className={styles.text_inner}>
                <p className={styles.text_para}>
                  i am a web designer and developer based in India. I am
                  passionate about building performant, responsive, accessible
                  websites and build unique brand identity -
                </p>
              </div>

              <div className={styles.text_inner}>
                <p
                  className={[styles.text_para, styles.text_font_medium].join(
                    " "
                  )}
                >
                  dawned many hats over the years, working with clients,
                  customers, vendors,{" "}
                  <span style={{ fontWeight: 700, fontSize: "1.8rem" }}>
                    helping teams succeed
                  </span>
                  , achieve{" "}
                  <span style={{ fontWeight: 900, fontSize: "2rem" }}>
                    customer success
                  </span>{" "}
                  <span
                    style={{
                      display: "inline-block",
                      width: "5px",
                      height: "14px",
                      backgroundColor: "#000",
                    }}
                  ></span>
                  -
                </p>
              </div>

              <div className={styles.text_inner}>
                <p
                  className={[styles.text_para, styles.text_font_small].join(
                    " "
                  )}
                >
                  driving efficiency through technology and operations, building
                  websites and helping deploy enterprise applications
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
