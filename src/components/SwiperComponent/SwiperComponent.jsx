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
        <ContentBox imgLink={emp1} ceo>Jane Cooper</ContentBox>,
        <ContentBox imgLink={emp2} ceo>Devon Lane</ContentBox>,
        <ContentBox imgLink={emp3} ceo>Robert Fox</ContentBox>,
        <ContentBox imgLink={emp1} ceo>Jane Cooper</ContentBox>,
        <ContentBox imgLink={emp2} ceo>Devon Lane</ContentBox>,
        <ContentBox imgLink={emp3} ceo>Robert Fox</ContentBox>,
        <ContentBox imgLink={emp1} ceo>Jane Cooper</ContentBox>,
        <ContentBox imgLink={emp2} ceo>Devon Lane</ContentBox>,
        <ContentBox imgLink={emp3} ceo>Robert Fox</ContentBox>,
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

        <div className={styles.header}>
            <p>What says our happy Clients</p>
        </div>

            <div className={styles.content}>
                <Swiper
                  modules={{ Navigation }}
                  spaceBetween={40}
                  slidesPerView={3}
                  style={{padding: "140px 30px"}}
                  initialSlide={0}
                  allowTouchMove
                >  
                    <Controls arr={array}/>

                    <div className={styles.carouselBtns}>
                        <LeftNavigationButton />
                        <RightNavigationButton />    
                    </div>

                    <div className={styles.swiperSlide}>
                        {array.map((item, index) => (
                            <SwiperSlide key={index}>
                            {item}
                            </SwiperSlide>
                        ))}
                    </div>

                </Swiper>
            </div>
    </div>
  )
}

export default SwiperComponent;