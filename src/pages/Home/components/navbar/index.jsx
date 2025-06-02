import React, { useState, useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'react-typed';
import Anelka from '../assets/anelka-r.png';
import "./font.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    
    // Close mobile menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    { 
      icon: <AiFillLinkedin className="text-violet-700 text-xl" />, 
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anelka-donga-289b8122a/' 
    },
    { 
      icon: <BsGithub className="text-violet-700 text-xl" />, 
      label: 'GitHub',
      url: 'https://github.com/Kanel04' 
    }
  ];

  return (
    <div className="w-full">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 flex items-center"
            >
              <a 
                href="#home" 
                className="text-2xl font-bold text-gray-800 flex items-center"
              >
                <span className="text-violet-700">P</span>
                <span>ortfolio.</span>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="font-medium text-gray-700 hover:text-violet-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              
              <div className="flex space-x-4 ml-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-violet-700 transition-colors"
                  >
                    {social.icon}
                    <span className="ml-1 font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-violet-700 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex space-x-4 px-5">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-violet-700"
                    >
                      {social.icon}
                      <span className="ml-2 text-sm font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center pt-16 lg:pt-0 px-4 bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center py-12 lg:py-0">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end order-2 lg:order-1"
            data-aos="fade-right"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-violet-700 rounded-full opacity-20 blur-lg"></div>
              <img 
                src={Anelka} 
                alt="Anelka Donga" 
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>
          </motion.div>

          {/* Middle Column - Title */}
          <motion.div 
            className="text-center lg:text-left order-1 lg:order-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-aos="fade-up"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              I'm a <br />
              <Typed
                strings={[
                  'Fullstack Developer',
                  'UX/UI Designer',
                  'Creative Coder'
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="text-violet-700 block mt-2"
              />
            </h1>
            <p className="text-lg text-gray-600 mt-6 max-w-lg">
              Creating beautiful and functional digital experiences
            </p>
          </motion.div>

          {/* Right Column - Graphic Element */}
          <motion.div 
            className="hidden lg:flex justify-center items-center order-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-aos="fade-left"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-violet-700 rounded-full opacity-10 -z-10"></div>
              <div className="w-64 h-64 rounded-full flex items-center justify-center border-8 border-violet-100">
                <div className="text-center">
                  <p className="text-7xl font-bold text-violet-700">I'm</p>
                  <p className="text-xl text-gray-600 mt-2">a Developer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;