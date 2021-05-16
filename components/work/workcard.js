import styles from  '../../styles/work.module.scss';
import ViewButton from './workbutton';

const WorkCard = () => {

  return (
    <>
      <div className={styles.wrapper}>
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
                          <ViewButton link={'https://www.networked.in'} />
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
                <ViewButton link={'https://solarsystem3d.netlify.app/'} />
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
                  <ViewButton link={`https://clickweather.netlify.app/`} />
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
                    <ViewButton link={'https://weathersnapshot.netlify.app/'} />
                  </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default WorkCard;