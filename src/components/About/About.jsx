import React from 'react'

import  styles  from "./About.module.css"
import { getImageUrl } from '../../utils';

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    className={styles.aboutImage}
                    src={getImageUrl("about/baymax.jpeg")}
                    alt="Me and baymax :)"
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/webdevelopment.png")} alt="Web development icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                Enjoy developing responsive web pages using JSX CSS and REACT
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/work.png")} alt="Working on laptop icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Work</h3>
                            <p>
                                Actively seeking summer co-op/internship opputunities offering software
                                development experience
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/textbook.png")} alt="Reading icon" />
                        <div className={styles.aboutItemText}>
                        <h3>Learning</h3>
                            <p>
                                Currently self-teaching myself mobile application development  
                                using various texts
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};