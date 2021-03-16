import Link from 'next/link';
import { BsChevronCompactRight } from 'react-icons/bs';
import styles from '../styles/learnmore.module.scss';

const LearnMore = ({text, link}) => (
    <Link href={link}><a className={styles.link}>{text} <BsChevronCompactRight /></a></Link>
)

export default LearnMore;