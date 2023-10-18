import React from "react";
import CarouselCard from "./carouselCard/CarouselCard";
import "./ProjectCarousel.css";

const ProjectCarousel = ({ projects }) => {
  return (
    <div className="carousel-container">
      {projects.map((project) => (
        <CarouselCard project={project} />
      ))}
    </div>
  );
};

export default ProjectCarousel;
