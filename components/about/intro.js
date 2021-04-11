import styles from '../../styles/about.module.scss';
import SkillCard from './skillcard';

const Introduction = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
      <section className={styles.intro_wrapper}>
      <section className={styles.intro_section_intro}>
        <div className={styles.image_wrapper}>
          <div className={styles.image_inner}>
            <img className={styles.profile} src="../../images/shiju2.JPG" alt="Shiju Nambiar" />
          </div>
          
        </div>
        <div className={styles.text_wrapper}>
          <p className={styles.introduction}>
            I am self taught software developer who is in love with web technologies. I consistently perserve to learn new skills. I am self taught software developer who is in love with web technologies. I consistently perserve to learn new skills. I am self taught software developer who is in love with web technologies. I consistently perserve to learn new skills.
          </p>
        </div>
      </section>
      <section className={styles.intro_skills_wrapper}>
        <div className={styles.intro_skills_inner}>
          <SkillCard 
            cardtitle={'Leadership'}
            carddesc='
            I am self taught software developer who is in love with web technologies. I consistently perserve to learn new skills. I am self taught software developer who is in love with web technologies. I consistently perserve to learn new skills. I am self taught software developer who is in love with web technologies. I consistently perserve to learn new skills.'
            />
        </div>
        <div className={styles.intro_skills_inner_alt}>
          <SkillCard 
            cardtitle={'Technology'} 
            carddesc='
            I am self taught software developer who is in love with web technologies. I consistently perserve to learn new skills. I am self taught software developer who is in love with web technologies. I consistently perserve to learn new skills. I am self taught software developer who is in love with web technologies. I consistently perserve to learn new skills.'
            
            />
        </div>
        <div className={styles.intro_skills_inner}>
          <SkillCard 
            cardtitle={'Networking'} 
            carddesc='
            I am self taught software developer who is in love with web technologies. I consistently perserve to learn new skills. I am self taught software developer who is in love with web technologies. I consistently perserve to learn new skills. I am self taught software developer who is in love with web technologies. I consistently perserve to learn new skills.'
            />
        </div>
      </section>
    </section>
      </div>
    </div>
    
    )
  }

export default Introduction;