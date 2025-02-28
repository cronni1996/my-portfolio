//import React from 'react';
import styles from './Hero.module.scss';
import data from '@/data';

function Hero() {
    const handleContactClick = () => {
        // TODO: Добавить логику для открытия формы обратной связи или перехода к секции "Contact"
        alert('Contact button clicked!');
    };

    return (
        <section className={styles.hero}>
            <div className={styles.text}>
                <h1>{data.greeting}</h1>
                {data.name && <h2>{data.name}</h2>}
                <p>{data.title}</p>
                <div className={styles.buttons}>
                    <button className={styles.contactButton} onClick={handleContactClick}>
                        Contact Me
                    </button>
                    <a
                        href={data.linkedinLink}
                        className={styles.socialLink}
                        aria-label="LinkedIn"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        href={data.githubLink}
                        className={styles.socialLink}
                        aria-label="GitHub"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <div className={styles.image}>
                <img src={data.profileImage} alt={data.name} loading="lazy" />
            </div>
        </section>
    );
}

export default Hero;