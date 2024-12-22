import React from 'react';
import ProjectCard from './ProjectCard';
import { featuredProjects } from './projectsData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Featured Projects</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience in web development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;