import React from 'react';
import styles from './Projects.module.scss';
import ProjectCard from './ProjectCard/ProjectCard';
import data from '@/data';

function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <h2>Мои проекты </h2>
            <p>
                Вот некоторые из отобранных проектов, которые демонстрируют мой подход к веб разработке.
            </p>
            <div className={styles.projectList}>
                {data.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;