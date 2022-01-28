import React, { useState } from 'react';
import styles from "./InputControl.module.css";

function InputControl({ label, ...props }) {
    return (
        <div className={styles.container}>
            {label && <label>{label}</label>}
            <input type="text" {...props} style={{backgroundColor:"transparent"}} />
        </div>
    );
}

export default InputControl;