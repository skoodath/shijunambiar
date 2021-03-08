import styles from '../../styles/technology.module.scss';

const WorkCard = () => {
    return(
        <article className={styles.card_wrapper}>
            <div className={styles.card_inner}>
                <div className={styles.card_image}>
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