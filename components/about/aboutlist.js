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
                <dl>
                    <dt>Core Skills </dt>
                    <dd>React / Angular</dd>
                    <dt>Design Tools</dt>
                    <dd>Figma / AdobeXD / Framer</dd>
                    <dt>Layout &amp; styling</dt>
                    <dd>HTML5 / CSS3 / Sass / Styled-Components / Bootstrap / Material Design</dd>
                    <dt>Additional skills</dt>
                    <dd>git / NodeJS / Express / MongoDB / GSAP / Framer Motion / React Spring</dd>
                </dl>
                <div>Download Resume</div>
              </div>
              
          </div>
        </article>
    )
}

export default AboutMe;