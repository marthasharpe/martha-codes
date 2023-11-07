import React from "react";
import ProjectCarousel from "./carousel/ProjectCarousel";
import { projectData } from "./projectData.js";
import "./Projects.css";

const Projects = () => {
  const featuredProjects = projectData.filter((project) => project.featured);

  return (
    <div id="projects" className="projects-container">
      <h2 className="title">Projects</h2>
      <ProjectCarousel projects={featuredProjects} />
    </div>
  );
};

export default Projects;
