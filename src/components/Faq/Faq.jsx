import React from 'react';
import styles from "./Faq.module.css";
import CustomAccordion from './CustomAccordion/CustomAccordion';

function Faq() {
  return (
    <div className={styles.wrapper}>

        <div className={styles.contentDiv}>

            <div className={styles.item1}>
                <h1>FAQ</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </div>

            <div className={styles.item2}>

                <p className={styles.para1}>Do I need a personal injury report?
                </p>

                <p className={styles.para2}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
                </p>

                <div className={styles.line}></div>

                <CustomAccordion 
                para1={"How much is my case worth?"} 
                para2={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."} />

                <div className={styles.line}></div>

                <CustomAccordion 
                para1={"What should I do right after car accidect"} 
                  para2={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."} />

                  <div className={styles.line}></div>

                <CustomAccordion 
                para1={"How much is my case worth?"} 
                para2={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."} />

            </div>

        </div>

    </div>
  )
}

export default Faq