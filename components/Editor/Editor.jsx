import React, { useState } from 'react';
import InputControl from '../InputControl/InputControl';
import styles from "./Editor.module.css";

function Editor(props) {
    const sections = props.sections;
    const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(sections)[0]);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {Object.keys(sections).map((key) => (
                    <div key={key} className={`${styles.section} ${activeSectionKey === key ? styles.active : ""}`} onClick={() => setActiveSectionKey(key)}>
                        {sections[key]}
                    </div>
                ))}
            </div>
            <div className={styles.body}>
                <InputControl label="TItle" placeholder="Enter section title" />
            </div>
        </div>
    );
}

export default Editor;