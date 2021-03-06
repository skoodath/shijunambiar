import Link from 'next/link';
import styles from '../styles/learnmore.module.scss';

const LearnMore = ({text, link}) => (
    <Link href={link}><a className={styles.link}>{text}</a></Link>
)

export default LearnMore;