import React from 'react';
import styles from "./ChooseUs.module.css";
import ContentBox from './ContentBox/ContentBox.jsx';

function ChooseUs() {
  return (
    <div className={styles.wrapper}>

        <h1>Why Choose Us?</h1>

        <div className={styles.content}>
            <ContentBox>98% Success Rate</ContentBox>
            <ContentBox>100% Success Rate</ContentBox>
            <ContentBox>100% Success Rate</ContentBox>
        </div>

    </div>
  )
}

export default ChooseUs;