import React, { useEffect } from 'react';
import Web from '../assets/web.png';
import Design from '../assets/design.png';
import Photographer from '../assets/photographer.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const services = [
    {
      title: "Fullstack Developer",
      description: "Web applications, mobile apps, desktop software, and 3D experiences",
      icon: Web,
      color: "bg-indigo-50",
      textColor: "text-indigo-700",
      borderColor: "border-indigo-300",
      delay: 100
    },
    {
      title: "UX/UI Designer",
      description: "User-centered design for web, mobile, and desktop interfaces",
      icon: Design,
      color: "bg-purple-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-300",
      delay: 300
    },
    {
      title: "Photography",
      description: "Professional product photography and visual storytelling",
      icon: Photographer,
      color: "bg-pink-50",
      textColor: "text-pink-700",
      borderColor: "border-pink-300",
      delay: 500
    }
  ];

  return (
    <section 
      id='services' 
      className="w-full min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            data-aos="fade-down"
          >
            My Services
          </h2>
          <div 
            className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"
            data-aos="fade-down"
            data-aos-delay="100"
          ></div>
          <p 
            className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={service.delay}
              className={`flex flex-col items-center p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${service.color} border-t-4 ${service.borderColor}`}
            >
              <div className="mb-6 p-4 bg-white rounded-full shadow-md">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-20 h-20 object-contain"
                />
              </div>
              
              <h3 className={`text-2xl font-bold mb-3 ${service.textColor}`}>
                {service.title}
              </h3>
              
              <p className="text-lg text-gray-600 text-center mb-6">
                {service.description}
              </p>
              
              <button 
                className={`mt-auto px-6 py-3 rounded-lg font-medium transition-colors ${service.textColor} hover:text-white border ${service.borderColor} hover:bg-gradient-to-r from-indigo-500 to-purple-600`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;