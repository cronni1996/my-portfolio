import React from 'react';
import styles from './ProjectCard.module.scss';

function ProjectCard({ project }) {
    return (
        <div className={styles.projectCard}>
            <div className={styles.image}>
                <img src={project.image} alt={project.name} />
            </div>
            <div className={styles.info}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className={styles.projectInfo}>
                    <h1>Project info</h1>
                    <p>
                        <span>Год:</span> {project.year}
                    </p>
                    <p>
                        <span>Роль:</span> {project.role}
                    </p>
                </div>
                <div className={styles.links}>
                    <a href={project.liveDemo} className={styles.liveDemo}>
                        Проект
                    </a>
                    <a href={project.github} className={styles.github}>
                        Просмотр на GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;