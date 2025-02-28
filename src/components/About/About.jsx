//import React from 'react';
import styles from './About.module.scss';
import data from '@/data';

function About() {
    return (
        <section id="about" className={styles.about}>
            <h1>About Me</h1>
            <div>
                <h2>
                    {data.aboutMeShort}
                </h2>
                <p>
                    {data.aboutMeText}
                </p>
                <a href="#more" className={styles.moreLink}>
                    More About Me
                </a>
            </div>
        </section>
    );
}

export default About;