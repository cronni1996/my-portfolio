//import React from 'react';
import styles from './ProjectCard.module.scss';
import PropTypes from 'prop-types';

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
                        Превью
                    </a>
                    <a href={project.github} className={styles.github}>
                        Просмотр на GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        role: PropTypes.string.isRequired,
        liveDemo: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProjectCard;