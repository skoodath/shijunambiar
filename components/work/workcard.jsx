import { FiLink, FiGithub } from "react-icons/fi";
import styles from "../../styles/work.module.scss";

const WorkCard = ({ ...work }) => {
  const {
    src,
    alt,
    url,
    github,
    title,
    description,
    techstack,
    image,
    width,
    height,
  } = work;

  return (
    <article className={styles.card_wrapper}>
      <div className={styles.card_inner}>
        <h3 className={styles.project_title}>{title}</h3>
        <div className={styles.card_image}>
          <img
            src={src}
            alt={alt}
            className={image}
            width={width}
            height={height}
          />
          <div className={styles.project_desc}>
            <p className={styles.project_desc__text}>{description}</p>
            <div className={styles.project_button__wrapper}>
              <a href={url} target="blank" className={styles.view_link}>
                <FiLink />
              </a>
              <a href={github} target="blank" className={styles.view_link}>
                <FiGithub />
              </a>
            </div>
          </div>
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
    </article>
  );
};

export default WorkCard;
