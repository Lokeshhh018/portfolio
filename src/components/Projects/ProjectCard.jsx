//import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import projects from "../../data/projects";

export const ProjectCard = () => {
  return (
    <div>
      {projects.map((project, index) => {
        const { title, imageSrc, description, skills, demo, source } = project;

        return (
          <div key={index} className={styles.container}>
            <img
              src={project.imageSrc}
              alt={`Image of ${title}`}
              className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
              {skills.map((skill, id) => (
                <li key={id} className={styles.skill}>
                  {skill}
                </li>
              ))}
            </ul>
            <div className={styles.links}>
              <a href={demo} className={styles.link}>
                Demo
              </a>
              <a href={source} className={styles.link}>
                Source
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;