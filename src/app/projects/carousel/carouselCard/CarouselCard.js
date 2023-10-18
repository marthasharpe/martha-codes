import React from "react";
import "./CarouselCard.css";

const CarouselCard = ({ project }) => {
  return (
    <div className="carousel-card">
      <div className="video-container">
        <iframe
          title={project.title}
          src={project.image}
          className="video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.testimony && (
          <p>
            <em>{project.testimony}</em>
          </p>
        )}
      </div>
      {project.github && (
        <div className="card-footer">
          <a href={project.github} rel="noopener noreferrer" target="_blank">
            GitHub Repo
          </a>
          <a href={project.netlify} rel="noopener noreferrer" target="_blank">
            Live Demo
          </a>
        </div>
      )}
    </div>
  );
};

export default CarouselCard;
