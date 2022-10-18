import styles from "../styles/about.module.scss";
import work from "../components/data/work.json";
import Title from "../common/Title";

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <Title text="About Me" />
        <div className={styles.about_article}>
          <h2 className={styles.about_subheader}>My Journey</h2>
          <p className={styles.summary_text}>
            <i>2004 - 2016</i>
            <br />I started my professional journey as a customer support
            associate. Later on, went on to become a team manager leading high
            performing teams for more than ten years.
          </p>
          <p className={styles.summary_text}>
            <i>2016 - 2018</i>
            <br />
            In 2016, I made an important career move to follow my passion. I
            switched my career from operations to technology. Starting as a
            business support manager supporting the portfolio managing team.
            Here is when I started putting my technology knowledge to use by
            building landing pages on organizations internal SharePoint domain.
          </p>
          <p className={styles.summary_text}>
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
          </p>
          <p className={styles.summary_text}>
            <i>2021 - current</i>
            <br />
            Due to org requirements, I moved to release management team and
            supported monthly release cycles for Pega based applications.
            <br />I also kept pace with upskilling, learning{" "}
            <b>AWS, JWT, GraphQL, Postgres, Python</b>
          </p>
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
