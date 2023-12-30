import React from 'react'
import styles from "./TeamCard.module.css";

function TeamCard({children, cases, imgLink}) {
  return (
    <div className={styles.wrapper}>
        
        <div className={styles.contentSection}>

            <div className={styles.adjustImg}>
                <img src={imgLink} alt={children}></img>
            </div>

            <div className={styles.data}>
                <h3>{children}</h3>
                <p>{cases} cases</p>

            </div>
        </div>
    </div>
  )
}

export default TeamCard