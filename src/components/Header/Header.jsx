//import React from 'react';
import styles from './Header.module.scss';
import '@/styles/variables.scss'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Малюков Павел</div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;