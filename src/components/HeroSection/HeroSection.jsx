import React from "react";
import styles from "./HeroSection.module.css";
import {ReactComponent as HeroImage} from "../../assets/heroimg.svg";
import MailIcon from '@mui/icons-material/Mail';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CustomButton from "../CustomButton/CustomButton.jsx";
import {ReactComponent as MailI} from "../../assets/mailIcon.svg";

function HeroSection() {
    return(
        <div className={styles.wrapper}>

            {/* text and all */}
            <div className={styles.paraDiv}>

                <h1>You don't have to</h1>
                <h2>Fight them Alone.</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus libero doloremque aliquam ducimus. Soluta molestias nesciunt laboriosam ab error quos delectus ipsa fugit! Minima perferendis soluta aliquam harum reiciendis!
                </p>

                <TextField
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailI className={styles.iconMail} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end" >
                      <CustomButton>
                        Let's Talk
                      </CustomButton>
                    </InputAdornment>
                  ),
                  sx: {
                        '--Input-minHeight': '74px',
                        marginTop: '3rem',
                        width: '70%',
                        backgroundColor: 'var(--color--primary)',
                        borderRadius: '43px', 
                        '& input::placeholder': {
                            color: '#ffffff', 
                            fontFamily: 'Inter', 
                          },
                          '& input': {
                            color: '#ffffff', 
                          },
                          '& input:focus': {
                            border: 'none',
                            outline: 'none',
                            boxShadow: 'none',
                          },
                    },
                    }}
                    placeholder="Enter your email address"
                />

            </div>

            {/* image */}
            <div className={styles.imageDiv}>
                <HeroImage className={styles.imageSize} />
            </div>
        </div>
    )
}

export default HeroSection;
