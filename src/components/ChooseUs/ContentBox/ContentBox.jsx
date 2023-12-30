import React from 'react'
import styles from "./ContentBox.module.css";
import { ReactComponent as BoxIcon } from "../../../assets/boxIcon.svg"
import Button from "../Button/Button.jsx";

function ContentBox({ imgLink, ceo, children }) {
  return (
    <div className={styles.wrapper}>

        <div className={styles.iconDiv}>
            {
              ceo ? (
                <img src={imgLink} alt={children} className={styles.imgAdjust}></img>
              ) :
              (
                <BoxIcon style={{height: "62px", width: "62px"}}/>
              )
            }
        </div>

        <h2>{children}</h2>

        {
          ceo && <p>Ceo of Hunt</p>
        }

        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
        </p>

        <Button>Read More</Button>
        
    </div>
  )
}

export default ContentBox