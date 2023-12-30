import React from 'react'
import styles from "./Subscribe.module.css";

function Subscribe() {
  return (
    <div className={styles.wrapper}>

        <div className={styles.contentBox}>

            <h1>Subscribe Our Newsletter</h1>

            <div className={styles.inputDiv}>

                <input id="nameInput" className={styles.input1} type="text" placeholder="Name:" />

                <input id="emailInput" className={styles.input2} type="email" placeholder="Enter your email:" />

            
                <button className={styles.btnS}>SEND</button>

            </div>

        </div>

    </div>
  )
}

export default Subscribe;