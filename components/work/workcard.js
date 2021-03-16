import styles from '../../styles/technology.module.scss';

const WorkCard = ({imgsrc, alttext, desc, sitelink}) => {
    return(
        <article className={styles.card_wrapper}>
            <div className={styles.card_inner}>
                <div className={styles.card_image}>
                    <img src={imgsrc} alt={alttext} className={styles.image}/>
                </div>
                <div className={styles.desc}>
                    <p className={styles.desc_text}>{desc}</p>
                    <a 
                      href={sitelink} 
                      target="blank" 
                      className={styles.worksite}>
                        visit site
                     </a>
                </div>
            </div>
        </article>
    )
}

export default WorkCard;