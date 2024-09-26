import React from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Vir Patel</h1>
                <p className={styles.description}>
                    I'm a Computer Engineering undergraduate student at the University of Toronto. 
                    Feel free to contact me to learn more!
                </p>
                <a className={styles.contactBtn} href="https://www.linkedin.com/in/vir-patel/">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero image of me"/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};