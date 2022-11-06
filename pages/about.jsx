import styles from "../styles/about.module.scss";
import work from "../components/data/work.json";
import Title from "../common/Title";
import { motion } from "framer-motion";

const about = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.001, -0.4, 0.6, 0.99],
    },
  },
  exit: {
    opacity: 0,
    x: 100,
  },
};

const subTitle = {
  initial: {
    opacity: 0,
    x: -20,
    visibility: "hidden",
  },
  animate: {
    opacity: 1,
    x: 0,
    visibility: "visible",
    transition: {
      duration: 0.4,
      delay: 0.3,
      ease: [0.001, -0.4, 0.6, 0.99],
    },
  },
};

const para = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.3,
      ease: [0.001, -0.4, 0.6, 0.99],
    },
  },
};

const About = () => {
  return (
    <section
      className={styles.container}
      variants={about}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className={styles.inner}>
        <Title text="About Me" />
        <motion.div
          className={styles.about_article}
          animate={{
            transition: {
              staggerChildren: 0.2,
            },
          }}
        >
          <motion.h2
            className={styles.about_subheader}
            variants={subTitle}
            initial="initial"
            animate="animate"
          >
            My Journey
          </motion.h2>
          <motion.p
            className={styles.summary_text}
            variants={para}
            initial="initial"
            animate="animate"
          >
            <i>2004 - 2016</i>
            <br />I started my professional journey as a customer support
            associate. Later on, went on to become a team manager leading high
            performing teams for more than ten years.
          </motion.p>
          <motion.p
            className={styles.summary_text}
            variants={para}
            initial="initial"
            animate="animate"
          >
            <i>2016 - 2018</i>
            <br />
            In 2016, I made an important career move to follow my passion. I
            switched my career from operations to technology. Starting as a
            business support manager supporting the portfolio managing team.
            Here is when I started putting my technology knowledge to use by
            building landing pages on organizations internal SharePoint domain.
          </motion.p>
          <motion.p
            className={styles.summary_text}
            variants={para}
            initial="initial"
            animate="animate"
          >
            <i>2018 - 2021</i>
            <br />
            Based on my experience building landing pages on SharePoint, I
            joined the SharePoint development team which was in charge of 50
            plus SharePoint sites frontending for various business verticals.
            Our team was responsible for building landing pages, create
            productivity tools and troubleshoot issues for these sites.
            <br />
            <br />I also started learning{" "}
            <b>React, TypeScript, NextJS, Node, MongoDB and Express</b> during
            this time and went on to create many personal projects, frontend and
            fullstack. I currently have 58 public repository on github.
          </motion.p>
          <motion.p
            className={styles.summary_text}
            variants={para}
            initial="initial"
            animate="animate"
          >
            <i>2021 - current</i>
            <br />
            Due to org requirements, I moved to release management team and
            supported monthly release cycles for Pega based applications.
            <br />I also kept pace with upskilling, learning{" "}
            <b>AWS, JWT, GraphQL, Postgres, Python</b>
          </motion.p>
        </motion.div>
        <div>
          <a href="/ShijuNambiar.pdf" className={styles.download} download>
            Download resume
          </a>
        </div>
        <div className={styles.about_article}>
          <h2 className={styles.about_subheader}>Career Timeline</h2>

          {work.map((w) => (
            <section className={styles.about_card} key={w.title}>
              <h3 className={styles.card_partition}>{w.tenure}</h3>
              <div className={styles.card_content}>
                <h3 className={styles.title}>{w.title}</h3>
                <h4 className={styles.organization}>{w.organization}</h4>
                <div className={styles.description}>
                  <h6 className={styles.desc_title}>Responsibilities</h6>
                  <ul className={styles.text}>
                    {w.description.map((desc) => (
                      <li className={styles.responsibility} key={desc}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
