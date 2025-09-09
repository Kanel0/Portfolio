import React, { useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from "react-icons/fa";
import { MdWork } from 'react-icons/md';
import SaveLink from "../assets/savelink.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Project() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Save-link",
      description: "A full stack web application for saving and organizing your favorite links with a clean, intuitive interface. Features include user authentication, categorization, and real-time synchronization.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      demoLink: "https://save-link-sigma.vercel.app",
      codeLink: "https://github.com/Kanel0/save-link.git",
      image: SaveLink,
      category: "Full Stack",
      status: "Live",
    },
    // You can add more projects here following the same structure
  ];

  return (
    <section
      id="project"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-6">
            <MdWork className="text-3xl text-indigo-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Featured <span className="text-indigo-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here's a selection of my recent work. Each project represents a
            unique challenge and solution, showcasing my expertise in modern web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 group border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Project Image Container */}
              <div className="aspect-video w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full  transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    {project.status}
                  </span>
                </div>

                {/* Quick Action Buttons (appear on hover) */}
                <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-3 py-2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-lg hover:bg-white transition-colors text-sm font-medium"
                    >
                      <FaRocket className="mr-2" />
                      Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-800/90 backdrop-blur-sm text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium"
                    >
                      <FaCode className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h2>

                {/* Project Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <FaCode className="mr-2 text-indigo-600" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 text-sm font-medium rounded-lg border border-indigo-100 hover:from-indigo-100 hover:to-purple-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

               </div>

              {/* Decorative Element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {projects.length === 1 && (
          <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto border border-gray-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                More Projects Coming Soon
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                I'm constantly working on new and exciting projects. Stay tuned for more innovative solutions and creative implementations!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/Kanel0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <FaGithub className="mr-2" />
                  View All on GitHub
                </a>
                <button 
                  className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-8 rounded-xl transition-colors duration-300"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Collaborate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Project;