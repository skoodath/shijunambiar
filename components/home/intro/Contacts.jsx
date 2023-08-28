import styles from "../../../styles/home.module.scss";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaMastodon,
} from "react-icons/fa";

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
            <a href="mailto:me@shijunambiar.com">
              <FaEnvelope />
            </a>
          </li>
          <li className={styles.listitem}>
            <a href="https://twitter.com/shaijun">
              <FaTwitter />
            </a>
          </li>
          <li className={styles.listitem}>
            <a href="https://www.linkedin.com/in/nambiars/">
              <FaLinkedinIn />
            </a>
          </li>
          <li className={styles.listitem}>
            <a href="https://github.com/skoodath">
              <FaGithub />
            </a>
          </li>
          <li className={styles.listitem}>
            <a href="https://www.instagram.com/nambiarshaiju/">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Contacts;
