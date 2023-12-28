import React from "react";
import styles from "./HeroSection.module.css";
import {ReactComponent as HeroImage} from "../../assets/heroimg.svg"

function HeroSection() {
    return(
        <div className={styles.wrapper}>

            {/* text and all */}
            <div className={styles.paraDiv}>

                <h1>You don't have to</h1>
                <h2>Fight them Alone.</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus libero doloremque aliquam ducimus. Soluta molestias nesciunt laboriosam ab error quos delectus ipsa fugit! Minima perferendis soluta aliquam harum reiciendis!
                </p>

            </div>

            {/* image */}
            <div className={styles.imageDiv}>
                <HeroImage className={styles.imageSize} />
            </div>
        </div>
    )
}

export default HeroSection;