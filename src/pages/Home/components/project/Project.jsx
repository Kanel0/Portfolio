import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Project() {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping experience with cart functionality and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: 'https://ecommerce-demo.com',
      codeLink: 'https://github.com/yourusername/ecommerce',
      image: 'ecommerce-thumb.jpg' // Replace with actual image paths
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates and team management features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      demoLink: 'https://taskapp-demo.com',
      codeLink: 'https://github.com/yourusername/task-manager',
      image: 'taskapp-thumb.jpg'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather forecasting application with location-based services.',
      technologies: ['JavaScript', 'Weather API', 'Geolocation'],
      demoLink: 'https://weather-app-demo.com',
      codeLink: 'https://github.com/yourusername/weather-app',
      image: 'weather-thumb.jpg'
    },
    {
      id: 4,
      title: 'Fitness Tracker',
      description: 'Workout and nutrition tracking application with progress analytics.',
      technologies: ['React Native', 'Redux', 'Express'],
      demoLink: 'https://fitnesstracker-demo.com',
      codeLink: 'https://github.com/yourusername/fitness-tracker',
      image: 'fitness-thumb.jpg'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a selection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="h-56 bg-gray-200 border-2 border-dashed rounded-t-xl flex items-center justify-center text-gray-400">
                Project Image
                {/* Replace with actual image: */}
                {/* <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                /> */}
              </div>
              
              <div className="p-6">
                {/* Project Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
                
                {/* Project Description */}
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a 
                    href={project.demoLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-1"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors flex-1"
                  >
                    <FaGithub className="mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;