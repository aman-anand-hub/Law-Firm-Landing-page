import React, { useState, useEffect } from 'react'
import styles from "./SwiperComponennt.module.css";
import ContentBox from "../ChooseUs/ContentBox/ContentBox.jsx";
import LeftNavigationButton from './LeftNavigationButton/LeftNavigationButton.jsx';
import RightNavigationButton from './RightNavigationButton/RightNavigationButton.jsx';

import emp1 from "../../assets/emp1.png";
import emp2 from "../../assets/emp2.png";
import emp3 from "../../assets/emp3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useSwiper } from 'swiper/react';

function SwiperComponent() {

    const array= 
    [
        <ContentBox>98% success rate</ContentBox>,
        <ContentBox>98% success rate</ContentBox>,
        <ContentBox>98% success rate</ContentBox>,
        <ContentBox>98% success rate</ContentBox>,
        <ContentBox>98% success rate</ContentBox>,
        <ContentBox>98% success rate</ContentBox>,
        <ContentBox>98% success rate</ContentBox>,
        <ContentBox>98% success rate</ContentBox>,
        <ContentBox>98% success rate</ContentBox>
    ];

    const swiper = useSwiper();

    const Controls= ({arr}) => {
        const { swiper }= useSwiper();
        console.log(swiper);
        useEffect(() => {
            swiper?.slideTo(0);
        }, [arr]);
        return <></>
    }

  return (
    <div className={styles.wrapper}>

        <div className={styles.content}>

            <div className={styles.header}>

                <p>What says our happy Clients</p>

            </div>

            <div>
                <Swiper
                  modules={{ Navigation }}
                  spaceBetween={40}
                  slidesPerView={3}
                  style={{padding: "20px 30px"}}
                  initialSlide={0}
                  allowTouchMove
                >  
                    <Controls arr={array}/>

                    <div className={styles.buttonDiv}>
                        <LeftNavigationButton />
                        <RightNavigationButton />
                    </div>
                    

                    {array.map((item, index) => (
                        <SwiperSlide key={index}>
                         {item}
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            
        </div>

    </div>
  )
}

export default SwiperComponent;