import React from "react";
import projectsData from "../data/projects.json";
import "./Proyectos.css";

export default function Proyectos() {
  return (
    <section id="proyectos">
      <h2>Mis Proyectos</h2>

      <div className="project-gallery">
        {projectsData.map((project) => (
          <article className="project-card" key={project.id}>
            <img
              src={`${project.imgUrl}`}
              alt={`Imagen de ${project.title}`}
              className="project-image"
            />
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-links">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
