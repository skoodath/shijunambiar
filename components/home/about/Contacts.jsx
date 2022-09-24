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
      <ul className={styles.right}>
        <li className={styles.listitem}>
          <BsEnvelopeFill />
          <span className={styles.listitem_text}>
            shiju.nambiar@outlook.com
          </span>
        </li>
        <li className={styles.listitem}>
          <BsTwitter />
          <span className={styles.listitem_text}>twitter.com/spknbr</span>
        </li>
        <li className={styles.listitem}>
          <BsLinkedin />
          <span className={styles.listitem_text}>linkedin/snambiar</span>
        </li>
        <li className={styles.listitem}>
          <BsGithub />
          <span className={styles.listitem_text}>github/skoodath</span>
        </li>
        <li className={styles.listitem}>
          <BsInstagram />
          <span className={styles.listitem_text}>
            instagram.com/nambiarshaiju
          </span>
        </li>
      </ul>
    </>
  );
};

export default Contacts;
