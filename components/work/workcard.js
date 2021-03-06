import styles from '../../styles/work.module.scss';

const WorkCard = () => {
    return(
        <article className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.imagewrapper}>
                    <img src="/images/shiju2.jpg" alt="sample image" className={styles.image}/>
                </div>
                <div className={styles.desc}>
                    <p>Built on React, a site to manage this and that</p>
                </div>
            </div>
        </article>
    )
}

export default WorkCard;