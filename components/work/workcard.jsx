import styles from "../../styles/work.module.scss";
import ViewButton from "./workbutton";

const WorkCard = ({ ...work }) => {
  const { src, alt, url, title, description, caption, image, width, height } =
    work;

  return (
    <article className={styles.card_wrapper}>
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
        <h3 className={styles.desc_title}>{title}</h3>
        <div className={styles.desc}>
          <p className={styles.desc_text}>{description}</p>
        </div>
        <ViewButton link={url} caption={caption} />
      </div>
    </article>
  );
};

export default WorkCard;
