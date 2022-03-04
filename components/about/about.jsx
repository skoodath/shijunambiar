import styles from "../../styles/about.module.scss";
import Title from "../title";
import { FaStar } from "react-icons/fa";

const About = () => {
  const title = {
    name: "About Me",
  };
  const myStyle = {
    textDecoration: "underline",
    fontSize: "1.2rem",
    fontWeight: 600,
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
              <div className={styles.skill_wrapper}>
                <div className={styles.skill_inner}>
                  <h4 className={styles.subheader}>Languages</h4>
                  <ul>
                    <li className={styles.skill}>
                      <span className={styles.skill_name}>JavaScript</span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>
                    <li className={styles.skill}>
                      <span className={styles.skill_name}>HTML</span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>
                    <li className={styles.skill}>
                      <span className={styles.skill_name}>CSS</span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>
                    <li className={styles.skill}>
                      <span className={styles.skill_name}>NodeJS</span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>
                    <li className={styles.skill}>
                      <span className={styles.skill_name}>Python</span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={styles.skill_inner}>
                  <h4 className={styles.subheader}>
                    Libraries &amp; Frameworks
                  </h4>
                  <ul>
                    <li className={styles.skill}>
                      <span className={styles.skill_name}>React</span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>
                    <li className={styles.skill}>
                      <span className={styles.skill_name}>NextJS</span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>
                    <li className={styles.skill}>
                      <span className={styles.skill_name}>Angular</span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>
                    <li className={styles.skill}>
                      <span className={styles.skill_name}>Sass</span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>
                    <li className={styles.skill}>
                      <span className={styles.skill_name}>
                        Styled-Components
                      </span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>
                    <li className={styles.skill}>
                      <span className={styles.skill_name}>ExpressJS</span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={styles.skill_inner}>
                  <h4 className={styles.subheader}>Tools &amp; Platforms</h4>
                  <ul>
                    <li className={styles.skill}>
                      <span className={styles.skill_name}>AWS</span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>
                    <li className={styles.skill}>
                      <span className={styles.skill_name}>Gulp</span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>
                    <li className={styles.skill}>
                      <span className={styles.skill_name}>Webpack</span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>

                    <li className={styles.skill}>
                      <span className={styles.skill_name}>Figma</span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>
                    <li className={styles.skill}>
                      <span className={styles.skill_name}>AdobeXD</span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>
                    <li className={styles.skill}>
                      <span className={styles.skill_name}>GIMP</span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>
                    <li className={styles.skill}>
                      <span className={styles.skill_name}>Git</span>
                      <div className={styles.skill_bar__bg}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={styles.legend_wrapper}>
                  <div className={styles.legend}>
                    <span>Novice</span>
                    <div>
                      <FaStar />
                    </div>
                  </div>
                  <div className={styles.legend}>
                    <span>Advanced</span>
                    <div>
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <div className={styles.legend}>
                    <span>Competent</span>
                    <div>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <div className={styles.legend}>
                    <span>Proficient</span>
                    <div>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <div className={styles.legend}>
                    <span>Expert</span>
                    <div>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.text_wrapper}>
              <div className={styles.text_inner}>
                <h4 className={styles.subheader}>Career Summary</h4>
                <p className={styles.text_para}>
                  I am a <span style={myStyle}>User Interface Designer</span>{" "}
                  and <span style={myStyle}>Web Developer</span> from India
                  Passionate about building performant, responsive, accessible
                  websites
                </p>
                <p className={styles.text_para}>
                  I have donned many hats over the last 15 years starting as
                  customer support associate,{" "}
                  <span style={myStyle}>leading teams</span> in business
                  operations for 12 years managing performance and conflicts and
                  supporting business operation of an IT vertical of 400 plus
                  resources contributing to strategic decision making, business
                  development, innovation and growth
                </p>
                <p className={styles.text_para}>
                  <span style={myStyle}>
                    In 2016, I decided to follow my passion and equip myself to
                    become a web developer
                  </span>
                </p>
                <p className={styles.text_para}>
                  I have been constantly learning and building my portfolio and
                  skills ever since and I am currently learning{" "}
                  <span style={myStyle}>Python</span>,{" "}
                  <span style={myStyle}>Angular</span>,{" "}
                  <span style={myStyle}>AWS</span>,{" "}
                  <span style={myStyle}>NodeJS</span>,{" "}
                  <span style={myStyle}>DSA</span>
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
