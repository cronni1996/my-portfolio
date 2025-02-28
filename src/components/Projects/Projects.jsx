import React from 'react';
import styles from './Projects.module.scss';
import ProjectCard from './ProjectCard/ProjectCard';
import data from '@/data';

function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <h2>Featured Projects</h2>
            <p>
                Here are some of the selected projects that showcase my passion for
                front-end development.
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