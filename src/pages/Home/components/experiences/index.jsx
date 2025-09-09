import React, { useEffect } from 'react';
import { MdWork, MdLocationOn, MdCalendarToday, MdCode, MdBusiness, MdPeople } from 'react-icons/md';
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiElectron } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const experiences = [
    {
      id: 1,
      company: "MajSoft",
      position: "Odoo Developer",
      location: "Mahajanga",
      period: "January 2024 – April 2025",
      type: "Full-time",
      description: "Experienced Odoo Developer specialized in creating, customizing, and integrating software solutions. As a Python development expert, I configure and test functionalities to meet specific client needs while providing training and technical support to ensure project success.",
      responsibilities: [
        "Custom Odoo module development and integration",
        "Network administration and backup management for Odoo systems",
        "Customer support lead ensuring smooth ERP system experience",
        "Training and technical support for clients",
        "Data security and integrity management through backup strategies"
      ],
      technologies: [
        { name: "Python", icon: FaPython, color: "text-blue-500" },
        { name: "Odoo", icon: FaDatabase, color: "text-purple-600" }, // Using FaDatabase as placeholder for Odoo
        { name: "Database", icon: FaDatabase, color: "text-green-600" }
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      company: "Commune Urbaine Mahajanga",
      position: "Fullstack Developer",
      location: "Mahajanga",
      period: "December 2022 – Present",
      type: "Contract",
      description: "Frontend Developer specialized in React JS, React TS, Electron JS, and Node JS. I created responsive and dynamic user interfaces. With advanced expertise in these technologies, I design modern web applications and cross-platform desktop applications.",
      responsibilities: [
        "Develop responsive and dynamic user interfaces with React",
        "Build cross-platform desktop applications with Electron JS",
        "Implement modern web applications with TypeScript",
        "Focus on quality and innovation to meet user needs",
        "Collaborate with backend teams for seamless integration"
      ],
      technologies: [
        { name: "React", icon: FaReact, color: "text-cyan-500" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Electron", icon: SiElectron, color: "text-indigo-600" }
      ],
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 3,
      company: "Gasikara Digital",
      position: "Fullstack Developer",
      location: "Mahajanga",
      period: "November 2024 – January 2025",
      type: "Contract",
      description: "Frontend Development with React JS and Dolibarr ERP customization. Designed intuitive user interfaces, integrated backend APIs, and customized ERP modules based on specific business needs.",
      responsibilities: [
        "Design and implement intuitive and responsive user interfaces",
        "Integrate backend APIs to display dynamic data",
        "Optimize performance and fix bugs for smooth user experience",
        "Configure and adapt Dolibarr modules for specific company needs",
        "Develop custom features to improve business process management"
      ],
      technologies: [
        { name: "React", icon: FaReact, color: "text-cyan-500" },
        { name: "Dolibarr", icon: FaDatabase, color: "text-purple-600" }
      ],
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <div id="experience" className="bg-gradient-to-br from-gray-50 to-indigo-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-6">
            <MdWork className="text-3xl text-indigo-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Professional <span className="text-indigo-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A journey through innovative projects and challenging roles that shaped my expertise 
            in fullstack development and ERP solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-200 via-purple-200 to-cyan-200 rounded-full"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex items-center mb-12 lg:mb-20 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-white border-4 border-indigo-400 rounded-full z-10 shadow-lg"></div>

              {/* Content Card */}
              <div className={`w-full lg:w-5/12 ml-20 lg:ml-0 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}>
                <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                  {/* Company Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${exp.color} mb-3`}>
                        {exp.type}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                        {exp.position}
                      </h3>
                      <div className="flex items-center text-indigo-600 font-semibold mb-2">
                        <MdBusiness className="mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
                        <div className="flex items-center">
                          <MdLocationOn className="mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <MdCalendarToday className="mr-1" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <MdPeople className="mr-2 text-indigo-600" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                        <li key={idx} className="flex items-start text-gray-600 text-sm">
                          <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <MdCode className="mr-2 text-indigo-600" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center bg-gray-50 hover:bg-indigo-50 px-3 py-2 rounded-lg transition-colors group/tech"
                        >
                          {tech.icon && (
                            <tech.icon className={`mr-2 text-lg ${tech.color} group-hover/tech:scale-110 transition-transform`} />
                          )}
                          <span className="text-gray-700 font-medium text-sm">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Experience;