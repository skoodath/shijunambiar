import styles from "../../styles/work.module.scss";
import ViewButton from "./workbutton";
import Image from "next/image";
import DetailContext from "../context";
import { useState } from "react";

const WorkCard = ({ ...work }) => {
  const [details, setDetails] = useState(false);

  const { src, alt, url, title, description, caption, image, width, height } =
    work;

  const showDetails = () => {
    setDetails(!details);
  };

  return (
    <DetailContext.Provider value={{ details, setDetails }}>
      <article className={styles.card_wrapper}>
        <div className={styles.card_inner}>
          <h3 className={styles.desc_title}>{title}</h3>
          <div className={styles.card_image}>
            <Image
              src={src}
              alt={alt}
              className={image}
              width={width}
              height={height}
            />
          </div>
          <div
            className={
              details
                ? `${[styles.desc, styles.desc_show].join(" ")}`
                : `${[styles.desc, styles.desc_hide].join(" ")}`
            }
          >
            <p className={styles.desc_text}>{description}</p>
          </div>
          <ViewButton link={url} caption={caption} showDetails={showDetails} />
        </div>
      </article>
    </DetailContext.Provider>
  );
};

export default WorkCard;
