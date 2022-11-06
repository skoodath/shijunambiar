import styles from "../../../styles/home.module.scss";
import {
  BsEnvelopeFill,
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";
import {
  FaGithubSquare,
  FaLinkedin,
  FaEnvelopeSquare,
  FaInstagramSquare,
  FaTwitterSquare,
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
            <a href="mail:shiju.nambiar@outlook.com">
              <FaEnvelopeSquare />
            </a>
          </li>
          <li className={styles.listitem}>
            <a href="https://twitter.com/spknbr">
              <FaTwitterSquare />
            </a>
          </li>
          <li className={styles.listitem}>
            <a href="https://www.linkedin.com/in/nambiars/">
              <FaLinkedin />
            </a>
          </li>
          <li className={styles.listitem}>
            <a href="https://github.com/skoodath">
              <FaGithubSquare />
            </a>
          </li>
          <li className={styles.listitem}>
            <a href="https://www.instagram.com/frontend.talk/">
              <FaInstagramSquare />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Contacts;
