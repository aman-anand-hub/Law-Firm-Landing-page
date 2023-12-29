import React from 'react'
import styles from "./SwiperComponennt.module.css";
import SwiperButton from './SwiperButton/SwiperButton.jsx';

function SwiperComponent() {
  return (
    <div className={styles.wrapper}>

        <div className={styles.content}>

            <div className={styles.header}>

                <p>what says our happy Clients</p>

                <div className={styles.btnSection}>
                    <SwiperButton type={"left"} />
                    <SwiperButton type={"right"}/>
                </div>

            </div>

            <div className={styles.carouselDiv}>
                
            </div>

        </div>

    </div>
  )
}

export default SwiperComponent