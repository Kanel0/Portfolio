import React, { useState, useEffect } from 'react';
import { MdPlace, MdDownload } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';
import Anelka from '../assets/figure.jpg';
import CV from '../document/CV.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const response = await fetch(CV);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Anelka_Donga_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("anelka.donga@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="about"
      className="flex justify-center items-center bg-gradient-to-br from-indigo-50 to-purple-50 w-full py-10 lg:py-20"
    >
      <div
        className="flex flex-col lg:flex-row bg-white shadow-xl rounded-2xl w-full max-w-6xl mx-4 overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {/* Profile Image */}
        <div className="lg:w-2/5 w-full relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-purple-900/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src={Anelka}
            alt="Anelka Donga"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex space-x-4">
              <a href="https://github.com/Kanel04" className="bg-white p-2 rounded-full hover:bg-indigo-100 transition-colors">
                <FaGithub className="text-indigo-800 text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/anelka-donga-289b8122a/" className="bg-white p-2 rounded-full hover:bg-indigo-100 transition-colors">
                <FaLinkedin className="text-indigo-800 text-xl" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full hover:bg-indigo-100 transition-colors">
                <FaTwitter className="text-indigo-800 text-xl" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full hover:bg-indigo-100 transition-colors">
                <FaDribbble className="text-indigo-800 text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-3/5 w-full p-6 lg:p-10 flex flex-col justify-center">
          <div className="mb-6">
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
              FULLSTACK DEVELOPER
            </span>
          </div>
          
          <h1 className="font-bold text-3xl lg:text-4xl text-gray-800 leading-tight">
            JAOSOA Donga <span className="text-indigo-600">Anelka</span>
          </h1>
          
          <div className="mt-6 space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Passionate fullstack developer specializing in creating elegant digital experiences. 
              With expertise across the stack and a keen eye for design, I build solutions that 
              balance functionality with aesthetics.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Active contributor to the developer community as a member of 
              <span className="font-semibold text-indigo-600"> Google Developers Groups GDG Mahajanga</span>. 
              I thrive in collaborative environments and enjoy tackling complex challenges.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <MdPlace className="text-xl text-indigo-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-gray-500 text-sm font-medium">Location</h3>
                <a
                  href="https://www.google.com/maps/place/Ambohimandamina/@-15.7165647,46.3427353,17z/data=!3m1!4b1!4m6!3m5!1s0x2203fbc7d5078047:0xd2cab551c012a77b!8m2!3d-15.7165647!4d46.344924!16s%2Fg%2F11jsghnl3k"
                  className="text-gray-800 font-medium hover:text-indigo-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ambohimandamina, Mahajanga
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-gray-500 text-sm font-medium">Email</h3>
                <button 
                  onClick={copyEmail}
                  className="text-gray-800 font-medium hover:text-indigo-600 transition-colors relative"
                >
                  jaosoadongaanelka@gmail.com
                  {copied && (
                    <span className="absolute -top-6 left-0 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              className="flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={handleDownload}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Downloading...
                </>
              ) : (
                <>
                  <MdDownload className="mr-2 text-xl" />
                  Download CV
                </>
              )}
            </button>
            
            <button 
              className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-8 rounded-xl transition-colors duration-300"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;