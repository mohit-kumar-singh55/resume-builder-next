import React, { useState, useRef } from 'react';
import { ArrowDown } from 'react-feather';
import Editor from '../Editor/Editor';
import Resume from '../Resume/Resume';
import styles from "./Body.module.css";

function Header() {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];

    const resumeRef = useRef();

    const [activeColor, setActiveColor] = useState(colors[0]);

    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achievements",
        summary: "Summary",
        other: "Other",
    };

    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail: {},
        },
        [sections.workExp]: {
            id: sections.workExp,
            sectionTitle: sections.workExp,
            details: [],
        },
        [sections.project]: {
            id: sections.project,
            sectionTitle: sections.project,
            details: [],
        },
        [sections.education]: {
            id: sections.education,
            sectionTitle: sections.education,
            details: [],
        },
        [sections.achievement]: {
            id: sections.achievement,
            sectionTitle: sections.achievement,
            points: [],
        },
        [sections.summary]: {
            id: sections.summary,
            sectionTitle: sections.summary,
            detail: "",
        },
        [sections.other]: {
            id: sections.other,
            sectionTitle: sections.other,
            detail: "",
        },
    });


    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Resume Builder</h2>
            <div className={styles.toolbar}>
                <div className={styles.colors}>
                    {
                        colors.map((color) => (
                            <span className={`${styles.color} ${activeColor === color ? styles.active : ""}`} key={color} style={{ backgroundColor: color }} onClick={() => setActiveColor(color)} />
                        ))
                    }
                </div>
                <button>Download<ArrowDown /></button>
            </div>
            <div className={styles.main}>
                <Editor sections={sections} information={resumeInformation} setInformation={setResumeInformation} />
                <Resume ref={resumeRef} sections={sections} information={resumeInformation} activeColor={activeColor} />
            </div>
        </div>
    );
}

export default Header;