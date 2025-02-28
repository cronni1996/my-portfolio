import React from 'react';
import styles from './About.module.scss';
import data from '@/data';
import '@/styles/variables.scss'

function About() {
    return (
        <section id="about" className={styles.about}>
            <h2>About Me</h2>
            <p>{data.about}</p>
            <h3>Skills</h3>
            <ul>
                {data.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}
export default About;