//import React from 'react';
import styles from './Contact.module.scss';
import data from '@/data';

function Contact() {
    return (

        <section className={styles.contact}>
            <div className={styles.contactLeft}>
                <div>
                    <h2>Для связи</h2>
                    <p>Мой E-Mail <a href={`mailto:${data.email}`} className={styles.emailLink}>{data.email}</a></p>
                    <p>Это моё <a href={data.resumeLink} className={styles.resumeLink}>резюме</a></p>

                    <div className={styles.socialLinks}>
                        <a href={data.linkedinLink} aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                        <a href={data.githubLink} aria-label="GitHub"><i className="fab fa-github"></i></a>
                        <a href={data.twitterLink} aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href={data.instagramLink} aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                <form className={styles.form}>
                    <label htmlFor="name">Имя</label>
                    <input type="text" id="name" name="name"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"/>

                    <label htmlFor="subject">Тема</label>
                    <input type="text" id="subject" name="subject"/>

                    <label htmlFor="message">Сообщение</label>
                    <textarea id="message" name="message" rows="5"></textarea>

                    <button type="submit">Отправить</button>
                </form>

            </div>
            <p className={styles.copyright}>© 2025 Pavel Malukow</p>
            <div>

            </div>

        </section>


    );

}

export default Contact;