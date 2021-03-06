import styles from '../styles/headerwrapper.module.scss';
import Brand from "./brandheader"
import Social from "./social"

const HeaderWrapper  = () => {
  return(
    <div className={styles.wrapper}>
      <Brand />
      <Social />
    </div>
  )
}


export default HeaderWrapper;