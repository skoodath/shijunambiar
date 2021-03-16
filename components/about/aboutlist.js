import styles from '../../styles/about.module.scss';
import LearnMore from '../learnmore';

const AboutList = () => {
    return(
        <section className={styles.wrapper}>
          <div className={styles.inner} style={{backgroundColor: "#fff"}}>
            <p className={styles.description}>
                I have been passionately learning <span style={{textTransform: 'uppercase', display: 'inline-block'}}>Web technologies</span> over the last few years 
            </p>
            <LearnMore link="/technologies" text="View work" />
          </div>
          <div className={styles.inner} style={{backgroundColor: "#f9f9f9"}}>
            <p className={styles.description}>
                
            </p>
            <LearnMore link="/about/pagetwo" text="Learn more" />
          </div>
          <div className={styles.inner} style={{backgroundColor: "#fff"}}>
            <p className={styles.description}>
              
            </p>
            <LearnMore link="/about/pagethree" text="Learn more" />
          </div>
          <div className={styles.inner} style={{backgroundColor: "#f9f9f9"}}>
            <p className={styles.description}>
              I take great interest in a varied areas like photography, instrumental music, blogging, social issues.
            </p>
            <LearnMore link="/about/photography" text="My shots" />
          </div>
        </section>
    )
}

export default AboutList;