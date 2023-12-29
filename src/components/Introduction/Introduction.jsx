import React from 'react'
import styles from "./Introduction.module.css";

function Introduction() {

  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>

        <h1>Let’s Introduce Ourself</h1>

        <div className={styles.line}>
        </div>

        <div className={styles.rightHalf}>
            <h2>Criminal Lawyer</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exercitation.
            </p>
        </div>
    </div>
    </div>
  )

}

export default Introduction