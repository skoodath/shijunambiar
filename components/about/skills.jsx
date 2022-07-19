import styles from "../../styles/about.module.scss";
import { FaStar } from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <div className={styles.skill_wrapper}>
        <div className={styles.skill_inner}>
          <h3 className={styles.subheader}>Languages</h3>
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
          <h3 className={styles.subheader}>Libraries &amp; Frameworks</h3>
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
              <span className={styles.skill_name}>Styled-Components</span>
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
          <h3 className={styles.subheader}>Tools &amp; Platforms</h3>
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
    </>
  );
};

export default Skills;
