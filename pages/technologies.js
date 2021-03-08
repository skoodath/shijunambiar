import HeaderWrapper from '../components/headerwrapper';
import PageTitle from '../components/pagetitle';
import WorkMenu from '../components/work/menu';
import WorkCard from '../components/work/workcard';
import styles from  '../styles/technology.module.scss'

const Technologies = () => {
  return (
    <>
      <HeaderWrapper />
      <PageTitle text={'Technologies'} />
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <ul className={styles.techlist}>
            <li className={styles.techlistitem}>Adobe XD</li>
            <li className={styles.techlistitem}>Figma</li>
            <li className={styles.techlistitem}>Prototypes</li>
            <li className={styles.techlistitem}>Wireframes</li>
            <li className={styles.techlistitem}>HTML</li>
            <li className={styles.techlistitem}>CSS</li>
            <li className={styles.techlistitem}>JavaScript</li>
            <li className={styles.techlistitem}>TypeScript</li>
            <li className={styles.techlistitem}>ReactJS</li>
            <li className={styles.techlistitem}>Redux</li>
            <li className={styles.techlistitem}>Angular</li>
            <li className={styles.techlistitem}>Sass</li>
            <li className={styles.techlistitem}>Styled-components</li>
            <li className={styles.techlistitem}>Node</li>
            <li className={styles.techlistitem}>Express</li>
            <li className={styles.techlistitem}>MongoDB</li>
            <li className={styles.techlistitem}>JWT</li>
            <li className={styles.techlistitem}>git</li>
            <li className={styles.techlistitem}>Agile</li>
            <li className={styles.techlistitem}>JIRA</li>
            <li className={styles.techlistitem}>Web hosting</li>
            <li className={styles.techlistitem}>Continuous Deployment</li>

          </ul> 
        </div>
        <div className={styles.inner}>
          <WorkCard />
        </div>
      </div>
      <WorkMenu />
    </>
  )
}

export default Technologies;