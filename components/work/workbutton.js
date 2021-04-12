import { useState } from 'react';
import styles from  '../../styles/work.module.scss';

const ViewButton = ({link}) => {

  const [changebg, setChangebg] = useState(false);

  return (
    <>
      <span className={styles.viewbutton}
        onMouseEnter={()=> setChangebg(true)}
        onMouseLeave={()=>setChangebg(false)}
      >
        <span className={styles.view_dark}></span>
        <span className={[styles.view_lite, `${changebg? styles.view_lite_fill: ''}`].join(' ')}></span>
        <span className={styles.view_text}>
            <a href={link} target="blank">Go to Site</a>
        </span>
      </span>
    </>
  )
}

export default ViewButton;