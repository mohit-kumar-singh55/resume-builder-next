import React from 'react';
import { ArrowDown } from 'react-feather';
import Editor from '../Editor/Editor';
import styles from "./Body.module.css";

function Header() {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];

    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Other",
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Resume Builder</h2>
            <div className={styles.toolbar}>
                <div className={styles.colors}>
                    {
                        colors.map((color) => (
                            <span className={styles.color} key={color} style={{ backgroundColor: color }} />
                        ))
                    }
                </div>
                <button>Download<ArrowDown /></button>
            </div>
            <div className={styles.main}>
                <Editor sections={sections} />
            </div>
        </div>
    );
}

export default Header;