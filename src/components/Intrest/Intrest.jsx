import React from 'react'
import styles from "./Intrest.module.css";
import Intrest1 from "../../assets/img1.png";
import Intrest2 from "../../assets/img2.png";
import Intrest3 from "../../assets/img3.png";
import Intrest4 from "../../assets/img4.png";
import Intrest5 from "../../assets/img5.png";
import Intrest6 from "../../assets/img6.png";

function Intrest() {
  return (
    <div className={styles.wrapper}>
        <h1>Area of Practices</h1>

        <div className={styles.imageGrid}>

          	<div className={`${styles.gridItem} ${styles.item1}`}>
          	  <img src={Intrest1} alt="buissnessLaw" clasName={styles.imgAdjust}></img>
              <p>BUISSNESS LAW</p>
          	</div>
          	<div className={`${styles.gridItem} ${styles.item2}`}>
          	  <img src={Intrest2} alt="partnershipLaw"></img>
              <p>PARTNERSHIP LAW</p>
          	</div>
          	<div className={`${styles.gridItem} ${styles.item3}`}>
          	  <img src={Intrest3} alt="realEstateLaw"></img>
              <p>REAL ESTATE LAW</p>
          	</div>
          	<div className={`${styles.gridItem} ${styles.item4}`}>
          	  <img src={Intrest4} alt="buissnessLaw2"></img>
              <p>BUISSNESS LAW</p>
          	</div>
          	<div className={`${styles.gridItem} ${styles.item5}`}>
          	  <img src={Intrest5} alt="landLordLaw"></img>
              <p>LANDLORD LAW</p>
          	</div>
          	<div className={`${styles.gridItem} ${styles.item6}`}>
          	  <img src={Intrest6} alt="elderAbuseLaw"></img>
              <p>ELDER ABUSE LAW</p>
          	</div>

      </div>

    </div> 
  )
}

export default Intrest