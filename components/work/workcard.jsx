import styles from "../../styles/work.module.scss";
import ViewButton from "./workbutton";

const WorkCard = ({ ...work }) => {
  const {
    src,
    alt,
    url,
    title,
    description,
    techstack,
    caption,
    image,
    width,
    height,
  } = work;

  return (
    <a href={url} className={styles.card_wrapper} target="_blank">
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
        </div>
        <div className={styles.project_container}>
          <div className={styles.project_desc}>
            <div className={styles.project_desc_row_one}>
              <h4 className={styles.project_subtitle}>About Project</h4>
              <p className={styles.project_desc_text}>{description}</p>
            </div>
            <div className={styles.project_desc_row_two}>
              <h4 className={styles.project_subtitle}>Technology Stack</h4>
              <p className={styles.project_desc_text}>{techstack}</p>
            </div>
          </div>

          {/* <ViewButton link={url} caption={caption} /> */}
        </div>
      </div>
    </a>
  );
};

export default WorkCard;
