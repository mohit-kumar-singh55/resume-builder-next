import React from 'react';
import Image from 'next/image';
import resumeSVG from "../../public/assets/resume.svg";
import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.heading}>Resume.MKS</h1>
                <p className={styles.heading}>Make your resume easily.<span>It&apos;s free</span></p>
            </div>
            <div className={styles.right}>
                <Image src={resumeSVG} alt="Resume" width="450px" />
            </div>
        </div>
    );
}

export default Header;
