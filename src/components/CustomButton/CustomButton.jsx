import styled from '@emotion/styled';
import styles from "./CustomButton.module.css";
import React from 'react'

function CustomButton({ children }) {
  return (
    <button className={styles.cusB}>{children}</button>
  )
}

export default CustomButton;