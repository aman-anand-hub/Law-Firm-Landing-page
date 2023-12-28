import React from "react";
import styles from "./Header.module.css";
import NavigationBar from "../NavigationBar/NavigationBar.jsx";
import HeroSection from "../HeroSection/HeroSection.jsx"

function Header() {
    return (

        <div className={styles.wrapper}>

            <div className={styles.contentDiv}>
                <NavigationBar />
                <HeroSection />
            </div>

        </div>

        
    )
}

export default Header;