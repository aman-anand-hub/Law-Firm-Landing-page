import React from 'react';
import styles from "./Footer.module.css";
import Navbar from "../NavigationBar/NavigationBar.jsx";

function Footer() {
  return (
    <div className={styles.wrapper}>

        <div className={styles.item1}>
            <Navbar footer />
        </div>

        <div className={styles.item2}>
            <p>© 2020 Acme. All right reserved.</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </div>

    </div>
  )
}

export default Footer