import React from 'react'
import styles from "./Navigationbar.module.css";
import {ReactComponent as AppLogo} from "../../assets/Vector.svg";
import {ReactComponent as Instagram} from "../../assets/instagram.svg";
import {ReactComponent as Facebook} from "../../assets/facebook.svg";
import {ReactComponent as Twitter} from "../../assets/twitter.svg";
import {ReactComponent as Pintrest} from "../../assets/pintrest.svg";

function NavigationBar({ footer }) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.applogo}>
            <AppLogo />
            <p>ISSTUDIO</p>
        </div>
        <div className={styles.paraNav}>
            <p>Home</p>
            <p>Attorneys</p>
            <p>Practice Areas</p>
            <p>About Us</p>
        </div>

        {
          footer ? 
          (
            <div className={styles.socialApps}>
              <Instagram className={styles.socialIcon} />
              <Facebook className={styles.socialIcon} />
              <Twitter className={styles.socialIcon} />
              <Pintrest className={styles.socialIcon} />
            </div>
          ) :
          (
            <button className={styles.buttonNav}>Contact Now</button>
          )
        }
        

    </div>
  )
}

export default NavigationBar