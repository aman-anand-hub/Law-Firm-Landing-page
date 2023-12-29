import React, { useEffect, useState } from 'react';
import styles from "./LeftNavigationButton.module.css";
import WestIcon from '@mui/icons-material/West';

import { useSwiper } from "swiper/react";

function LeftNavigationButton() {

    const swiper= useSwiper();

    const [isBegin, setIsBegin]= useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function() {
            setIsBegin(swiper.isBeginning);
        }, [swiper]);
    })

  return (
    <button 
        className={styles.swiperBtn}
        onClick={() => swiper.slidePrev()}
        style={isBegin ? { backgroundColor: 'var(--color--white)' } : null}
    >   <WestIcon />
    </button>
  )
}

export default LeftNavigationButton;