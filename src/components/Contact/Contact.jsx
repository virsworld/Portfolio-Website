import React from 'react';

import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

export const Contact = () => {
    return (
        <footer className={styles.container} id="contact" >
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>I'd love to hear from you!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img 
                        src={getImageUrl("contact/emailIcon.png")} 
                        alt="Email icon"
                    />
                    <a href="mailto:virpatel71@gmail.com" target="_blank">virpatel71@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img 
                        src={getImageUrl("contact/linkedinIcon.png")} 
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/vir-patel/" target="_blank">linkedin.com/in/vir-patel</a>
                </li>
                <li className={styles.link}>
                    <img 
                        src={getImageUrl("contact/githubIcon.png")} 
                        alt="GitHub icon"
                    />
                    <a href="https://github.com/virsworld" target="_blank" >github.com/virsworld</a>
                </li>
            </ul>
        </footer>
    );
};