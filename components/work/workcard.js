import styles from  '../../styles/work.module.scss';

const WorkCard = () => {

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <ul className={styles.techlist}>
            <li className={styles.techlistitem}>Adobe XD</li>
            <li className={styles.techlistitem}>Figma</li>
            <li className={styles.techlistitem}>HTML</li>
            <li className={styles.techlistitem}>CSS</li>
            <li className={styles.techlistitem}>JavaScript</li>
            <li className={styles.techlistitem}>TypeScript</li>
            <li className={styles.techlistitem}>ReactJS</li>
            <li className={styles.techlistitem}>Redux</li>
            <li className={styles.techlistitem}>Angular</li>
            <li className={styles.techlistitem}>Sass</li>
            <li className={styles.techlistitem}>Styled-components</li>
            <li className={styles.techlistitem}>Node</li>
            <li className={styles.techlistitem}>Express</li>
            <li className={styles.techlistitem}>MongoDB</li>
            <li className={styles.techlistitem}>JWT</li>
            <li className={styles.techlistitem}>git</li>
            <li className={styles.techlistitem}>Agile</li>
            <li className={styles.techlistitem}>JIRA</li>
            <li className={styles.techlistitem}>Web hosting</li>
            <li className={styles.techlistitem}>Continuous Deployment</li>

          </ul> 
        </div>
        <div className={styles.inner}>
          <h3 className={styles.card_header}>My work</h3>
        </div>
        <div className={styles.exp_inner}>
        <article 
            className={styles.card_wrapper}
             >
            <div className={styles.card_inner}>
                
                <div className={styles.card_image} >
                    <img src='/images/networked.svg' alt='networkEd' className={styles.image}/>
                </div>
                <div className={styles.desc}>
                        <p className={styles.desc_text}>
                          React website styled with Styled-compoents and animated by gsap
                        </p>
                        <ul className={styles.cardtech}>
                            <li className={styles.cardtechitem}>Figma</li>
                            <li className={styles.cardtechitem}>ReactJS</li>
                            <li className={styles.cardtechitem}>Styled-components</li>
                            <li className={styles.cardtechitem}>Greensock</li>
                            <li className={styles.cardtechitem}>ParticleJS</li>
                         </ul> 
                        <div className={styles.banner}>
                            <span className={styles.worksite}>
                                <a href='https://www.networked.in' target="blank">View site</a>
                            </span>
                        </div>
                </div>
          
            </div>
        </article>
        <article 
            className={styles.card_wrapper}
             >
            <div className={styles.card_inner}>
                
            <div className={styles.card_image} >
                <img src='/images/solarsystem.svg' alt='Solar system 3D' className={styles.image}/>
            </div>
            <div className={styles.desc}>
              <p className={styles.desc_text}>
                A html/css/JavaScript 3D model of solar system
              </p>
              <ul className={styles.cardtech}>
                  <li className={styles.cardtechitem}>HTML</li>
                  <li className={styles.cardtechitem}>CSS</li>
                  <li className={styles.cardtechitem}>JavaScript</li>
                  <li className={styles.cardtechitem}>Sass</li>
                  <li className={styles.cardtechitem}>Github</li>
                  <li className={styles.cardtechitem}>Netlify</li>

                </ul> 
              <div className={styles.banner}>
                <span className={styles.worksite}>
                    <a href='https://www.networked.in' target="blank">View site</a>
                </span>
              </div>
            </div>
            </div>
        </article>
        <article 
            className={styles.card_wrapper}
             >
            <div className={styles.card_inner}>
                
              <div className={styles.card_image} >
                  <img src='/images/weatherappjs.svg' alt='JavaScript Weather App' className={styles.image}/>
              </div>
              <div className={styles.desc}>
                <p className={styles.desc_text}>
                  A weather app built to experiment with the neumorphism design trend. Weather data fetched from openweathermap
                </p>
                <ul className={styles.cardtech}>
                    <li className={styles.cardtechitem}>Figma</li>
                    <li className={styles.cardtechitem}>neumorphism</li>
                    <li className={styles.cardtechitem}>HTML</li>
                    <li className={styles.cardtechitem}>CSS</li>
                    <li className={styles.cardtechitem}>JavaScript</li>
                    <li className={styles.cardtechitem}>Sass</li>
                    <li className={styles.cardtechitem}>Github</li>
                    <li className={styles.cardtechitem}>Netlify</li>

                  </ul>
                  <div className={styles.banner}>
                    <span className={styles.worksite}>
                      <a href='https://www.networked.in' target="blank">View site</a>
                    </span>
                  </div>
                </div>
          </div>
        </article>
        <article 
            className={styles.card_wrapper}
             >
            <div className={styles.card_inner}>
                
              <div className={styles.card_image} >
                  <img src='/images/reactweatherapp.svg' alt='React Weather App' className={styles.image}/>
              </div>
              <div className={styles.desc}>
                <p className={styles.desc_text}>
                  Weather app built with ReactJS and deployed on netlify through github. Weather data fetched from openweathermap and forecast data from weatherbit
                </p>
                <ul className={styles.cardtech}>
                    <li className={styles.cardtechitem}>Figma</li>
                    <li className={styles.cardtechitem}>Glassmorphism</li>
                    <li className={styles.cardtechitem}>ReactJS</li>
                    <li className={styles.cardtechitem}>Axios</li>
                    <li className={styles.cardtechitem}>Styled-Components</li>
                    <li className={styles.cardtechitem}>Github</li>
                    <li className={styles.cardtechitem}>Netlify</li>

                  </ul>
                  <div className={styles.banner}>
                    <span className={styles.worksite}>
                      <a href='https://www.networked.in' target="blank">View site</a>
                    </span>
                  </div>
                </div>
          </div>
        </article>
        </div>
      </div>
    </>
  )
}

export default WorkCard;