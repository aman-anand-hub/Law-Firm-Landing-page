import React from 'react'
import styles from "./Team.module.css";
import TeamCard from "./TeamCard/TeamCard.jsx";
import mem1 from "../../assets/mem1.png";
import mem2 from "../../assets/mem2.png";
import mem3 from "../../assets/mem3.png";
import mem4 from "../../assets/mem4.png";
import mem5 from "../../assets/mem5.png";
import mem6 from "../../assets/mem6.png";


function Team() {
  return (
    <div className={styles.wrapper}>
        <p>Our Team</p>
        
        <div className={styles.teamSection}>

            <TeamCard cases={301} imgLink={mem1} className={styles.item1}>Danial Def</TeamCard>

            <TeamCard cases={850} imgLink={mem2} className={styles.item2}>Sanfole</TeamCard>

            <TeamCard cases={470} imgLink={mem3} className={styles.item3}>Cesforila</TeamCard>

            <TeamCard cases={180} imgLink={mem4} className={styles.item4}>Colleen</TeamCard>

            <TeamCard cases={212} imgLink={mem5} className={styles.item5}>Haldone</TeamCard>

            <TeamCard cases={350} imgLink={mem6} className={styles.item6}>Nik Joe</TeamCard>

        </div>
    </div>
  )
}

export default Team