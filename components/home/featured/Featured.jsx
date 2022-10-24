import styles from "../../../styles/home.module.scss";
import { ButtonPrimary } from "../../../common/Button";
import Title from "../../../common/Title";
import showcase from "../../data/showcase";
import ProjectButton from "../../../common/ProjectButton";

const Featured = () => {
  return (
    <section className={styles.featured_container}>
      <Title text="Featured Projects" />
      <div className={styles.featured_list}>
        {showcase.map((item) => (
          <article className={styles.featured_listitem} key={item.id}>
            <h4 className={styles.featured_title}>{item.title}</h4>
            <p className={styles.featured_desc}>{item.description}</p>
            <div className={styles.featured_image_container}>
              <img
                src={item.src}
                alt={item.alt}
                className={styles.featured_image}
                width="100%"
              />
            </div>
            <ProjectButton livesite={item.url} github={item.github} />
          </article>
        ))}
      </div>
      <ButtonPrimary text="More Projects" route="projects" />
    </section>
  );
};

export default Featured;
