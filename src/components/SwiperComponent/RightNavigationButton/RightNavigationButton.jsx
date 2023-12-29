import React, {useEffect, useState} from 'react'
import styles from "./RightNavigationButton.module.css";
import EastIcon from '@mui/icons-material/East';
import { useSwiper } from 'swiper/react';

function RightNavigationButton() {

    const swiper= useSwiper();
    const [isEnd, setIsEnd]= useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", function(){
            setIsEnd(swiper.isEnd);
        })
    }, [swiper]);

  return (
    <button 
        className={styles.swiperBtn}
        style={isEnd ? { backgroundColor: 'var(--color--white)' } : null}
        onClick={() => swiper.slideNext()}
    >   <EastIcon />
    </button>
  )
}

export default RightNavigationButton;