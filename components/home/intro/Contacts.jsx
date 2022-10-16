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
    <>
      <section className={styles.contact_header}>
        <div className={styles.contact_image}>
          <img src="/images/profile.webp" alt="" />
        </div>
      </section>
      <section className={styles.contact_details}>
        <ul className={styles.list}>
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
    </>
  );
};

export default Contacts;
