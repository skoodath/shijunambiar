import styles from "../../styles/work.module.scss";
import ViewButton from "./workbutton";

const WorkExtra = ({ ...work }) => {
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
    <a href={url} className={styles.card_wrapper}>
      <div className={styles.card_inner}>
        <div className={styles.card_image}>
          <img
            src={src}
            alt={alt}
            className={image}
            width={width}
            height={height}
          />
        </div>
        <div className={styles.card_desc_container}>
          <h3 className={styles.desc_title}>{title}</h3>
          <div className={styles.desc}>
            <h4>About Project</h4>
            <p className={styles.desc_text}>{description}</p>

            <h4>Technology Stack</h4>
            <p className={styles.desc_text}>{techstack}</p>
          </div>

          {/* <ViewButton link={url} caption={caption} /> */}
        </div>
      </div>
    </a>
  );
};

export default Extra;
