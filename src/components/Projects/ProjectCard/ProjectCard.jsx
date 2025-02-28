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
                    <p>
                        <span>Year:</span> {project.year}
                    </p>
                    <p>
                        <span>Role:</span> {project.role}
                    </p>
                </div>
                <div className={styles.links}>
                    <a href={project.liveDemo} className={styles.liveDemo}>
                        Live Demo
                    </a>
                    <a href={project.github} className={styles.github}>
                        See on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;