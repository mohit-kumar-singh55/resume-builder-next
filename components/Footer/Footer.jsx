import React from 'react';
import { GitHub, Instagram, Linkedin, Mail } from 'react-feather';
import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.container}>
            <a href="mailto:mohitkumarsingh12344@gmail.com"><Mail /></a>
            <a href="https://instagram.com/sniper.mks_55" target="blank" rel="noreferrer"><Instagram /></a>
            <a href="https://www.linkedin.com/in/mohit-kumar-singh-128ab4217/" target="blank" rel="noreferrer"><Linkedin /></a>
            <a href="https://github.com/mohit-kumar-singh55" target="blank" rel="noreferrer"><GitHub /></a>
        </div>
    );
}

export default Footer;
