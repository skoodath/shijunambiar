import styles from "../../styles/profile.module.scss";

const Profile = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.image_inner}>
        <img
          className={styles.profile}
          src="../../images/profile.png"
          alt="Shiju Nambiar"
        />
      </div>
    </section>
  );
};

export default Profile;
