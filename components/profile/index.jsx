import styles from "../../styles/profile.module.scss";
import Image from "next/image";
import profilePic from "../../public/images/profile.webp";

const Profile = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.image_inner}>
        <Image
          src={profilePic}
          alt="Picture of Shiju Nambiar"
          className={styles.profile}
          width="280"
          height="335"
        />
      </div>
    </section>
  );
};

export default Profile;
