import styles from '../styles/title.module.scss';


const PageTitle = ({text}) => {
    return (
            <div className={styles.wrapper}>
              <div className={styles.inner}>
                <h2 className={styles.text}>{text}</h2>
              </div>
            </div>
    )
}

export default PageTitle;