import styles from "../../styles/work.module.scss";

const WorkCard = ({ work }) => {
  const {
    src,
    alt,
    url,
    github,
    title,
    description,
    techstack,
    image,
  } = work;

  return (
    <li className={styles.card_wrapper}>
      <div className={styles.card_inner}>
        <div className={styles.header}>
          <div className={styles.card_image}>
            <img
              src={src}
              alt={alt}
              className={image}
              width="100%"
              height="auto"
            />
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.project_button__wrapper}>
          <h3 className={styles.site_link}>
            <a href={url} target="blank">
              {title}
            </a>
            </h3>
            <a href={github} target="blank" className={styles.source_link}>
              <code>Github</code>
            </a>
          </div>
          <div className={styles.project_desc}>
            <p className={styles.project_desc__text}>{description}</p>
          </div>
          <ul className={styles.project_skills}>
            {techstack &&
              techstack.map((tech) => (
                <li key={tech} className={styles.project_skill__text}>
                  {tech}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default WorkCard;
