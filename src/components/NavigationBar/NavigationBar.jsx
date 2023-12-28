import React from 'react'
import styles from "./Navigationbar.module.css";
import {ReactComponent as AppLogo} from "../../assets/Vector.svg"

function NavigationBar() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.applogo}>
            <AppLogo />
            <p>ISSTUDIO</p>
        </div>z
        <div className={styles.paraNav}>
            <p>Home</p>
            <p>Attorneys</p>
            <p>Practice Areas</p>
            <p>About Us</p>
        </div>
        <button className={styles.buttonNav}>Contact Now</button>
    </div>
  )
}

export default NavigationBar