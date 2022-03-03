import styles from "../../styles/about.module.scss";
import Title from "../title";

const About = () => {
  const title = {
    name: "About Me",
  };
  return (
    <section className={styles.wrapper} name="about">
      <div className={styles.inner}>
        <Title text={title.name} />
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
              <div className={styles.skill_wrapper}>
                <h4 className={styles.subheader}>Technical Skills</h4>
                <ul>
                  <li className={styles.skill}>
                    <span className={styles.skill_name}>JavaScript</span>
                    <span className={styles.skill_bar__bg}>
                      <span
                        className={styles.skill_bar__fg}
                        style={{
                          width: "75%",
                          backgroundColor: "hsl(229, 19%, 25%)",
                        }}
                      ></span>
                    </span>
                  </li>
                  <li className={styles.skill}>
                    <span className={styles.skill_name}>ReactJS</span>
                    <div className={styles.skill_bar__bg}>
                      <span
                        className={styles.skill_bar__fg}
                        style={{
                          width: "78%",
                          backgroundColor: "hsl(229, 19%, 22%)",
                        }}
                      ></span>
                    </div>
                  </li>
                  <li className={styles.skill}>
                    <span className={styles.skill_name}>NextJS</span>
                    <div className={styles.skill_bar__bg}>
                      <span
                        className={styles.skill_bar__fg}
                        style={{
                          width: "68%",
                          backgroundColor: "hsl(229, 19%, 32%)",
                        }}
                      ></span>
                    </div>
                  </li>
                  <li className={styles.skill}>
                    <span className={styles.skill_name}>CSS</span>
                    <div className={styles.skill_bar__bg}>
                      <span
                        className={styles.skill_bar__fg}
                        style={{
                          width: "85%",
                          backgroundColor: "hsl(229, 19%, 15%)",
                        }}
                      ></span>
                    </div>
                  </li>
                  <li className={styles.skill}>
                    <span className={styles.skill_name}>Sass</span>
                    <div className={styles.skill_bar__bg}>
                      <span
                        className={styles.skill_bar__fg}
                        style={{
                          width: "75%",
                          backgroundColor: "hsl(229, 19%, 25%)",
                        }}
                      ></span>
                    </div>
                  </li>
                  <li className={styles.skill}>
                    <span className={styles.skill_name}>Styled-Components</span>
                    <div className={styles.skill_bar__bg}>
                      <span
                        className={styles.skill_bar__fg}
                        style={{
                          width: "80%",
                          backgroundColor: "hsl(229, 19%, 20%)",
                        }}
                      ></span>
                    </div>
                  </li>

                  <li className={styles.skill}>
                    <span className={styles.skill_name}>Gulp</span>
                    <div className={styles.skill_bar__bg}>
                      <span
                        className={styles.skill_bar__fg}
                        style={{
                          width: "65%",
                          backgroundColor: "hsl(229, 19%, 35%)",
                        }}
                      ></span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={styles.text_inner}>
                <h4 className={styles.subheader}>Career Summary</h4>
                <p className={styles.text_para}>
                  User Interface designer and Web Developer from India
                </p>
                <p className={styles.text_para}>
                  Passionate about building performant, responsive, accessible
                  websites
                </p>
                <p className={styles.text_para}>
                  I have donned many hats over the last 15 years starting as
                  customer support associate
                </p>
                <p className={styles.text_para}>
                  Lead teams in business operations for 12 years managing
                  performance and conflicts
                </p>
                <p className={styles.text_para}>
                  Managed business of an IT vertical of 400 plus resources
                  contributing to strategic decision making, business
                  development, innovation and growth
                </p>
                <p className={styles.text_para}>
                  Made the most important decision at the peak of my career as a
                  budding leader, to follow my passion of being a web developer
                  and a technologist
                </p>
                <p className={styles.text_para}>
                  I have been constantly learning and building my portfolio and
                  skills ever since
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
