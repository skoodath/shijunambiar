import styles from "../../../styles/home.module.scss";
import {
  BsEnvelopeFill,
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";

const Contacts = () => {
  return (
    <section className={styles.container}>
      <article className={styles.card}>
        <section className={styles.contact_header}>
          <div className={styles.contact_image}>
            <img src="/images/profile.webp" alt="" />
          </div>
          <h3 className={styles.contact_role}>
            React | JavaScript | Web Development
          </h3>
        </section>
        <section className={styles.contact_details}>
          <ul className={styles.right}>
            <li className={styles.listitem}>
              <a href="mail:shiju.nambiar@outlook.com">
                <BsEnvelopeFill />
              </a>
            </li>
            <li className={styles.listitem}>
              <a href="https://twitter.com/spknbr">
                <BsTwitter />
              </a>
            </li>
            <li className={styles.listitem}>
              <a href="https://www.linkedin.com/in/nambiars/">
                <BsLinkedin />
              </a>
            </li>
            <li className={styles.listitem}>
              <a href="https://github.com/skoodath">
                <BsGithub />
              </a>
            </li>
            <li className={styles.listitem}>
              <a href="https://www.instagram.com/frontend.talk/">
                <BsInstagram />
              </a>
            </li>
          </ul>
        </section>
      </article>
    </section>
  );
};

export default Contacts;
