import React from 'react'
import styles from "./SwiperButton.module.css";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

function SwiperButton({ type }) {
  return (
    <button className={styles.btnS}>
        {
            type === "left" ? 
            (<WestIcon />) : (<EastIcon />)
        }
    </button>
  )
}

export default SwiperButton;