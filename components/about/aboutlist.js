import styles from '../../styles/about.module.scss';
import LearnMore from '../learnmore';

const AboutList = () => {
    return(
        <section className={styles.wrapper}>
          <div className={styles.inner} style={{backgroundColor: "#fff"}}>
            <p className={styles.description}>
                This is the first paragraph that describes my experience
            </p>
            <LearnMore link="/about/pageone" text="Learn More" />
          </div>
          <div className={styles.inner} style={{backgroundColor: "#f9f9f9"}}>
            <p className={styles.description}>
                This is the first paragraph that describes my experience. I will talk about previous experience as well.
            </p>
            <LearnMore link="/about/pagetwo" text="Learn More" />
          </div>
          <div className={styles.inner} style={{backgroundColor: "#fff"}}>
            <p className={styles.description}>
                This is the first paragraph that describes my experience. I will talk about previous experience as well.
            </p>
            <LearnMore link="/about/pagethree" text="Learn More" />
          </div>
           
        </section>
    )
}

export default AboutList;