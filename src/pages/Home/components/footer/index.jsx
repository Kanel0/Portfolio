import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-black text-white py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start">
          <a href="#home" className="text-2xl font-bold mb-4 transition hover:text-gray-300">
            Portfolio.
          </a>
          <p className="text-gray-400 text-center md:text-left">
            Creating digital experiences that inspire and engage
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            {[
              ['Home', '#home'],
              ['About', '#about'],
              ['Skills', '#skills'],
              ['Services', '#services'],
              ['Contact', '#contact']
              ['Project', '#project']
            ].map(([title, url]) => (
              <a
                key={title}
                href={url}
                className="text-gray-300 hover:text-white transition hover:underline underline-offset-4"
              >
                {title}
              </a>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="mb-4 font-semibold">Connect with me</h3>
          <div className="flex space-x-6">
            <SocialIcon 
              href="https://www.facebook.com/leader.poseidon" 
              icon={<FaFacebook />}
              colorHover="hover:text-blue-600"
            />
            <SocialIcon 
              href="https://www.instagram.com/dongaanelka/" 
              icon={<BsInstagram />}
              colorHover="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
              special
            />
            <SocialIcon 
              href="https://twitter.com/DongaAnelka" 
              icon={<FaTwitter />}
              colorHover="hover:text-blue-400"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-gray-400">
        <p>© {currentYear} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Social Icon Sub-component
const SocialIcon = ({ href, icon, colorHover, special }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 rounded-full transition-all duration-300 ${
      special 
        ? 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500' 
        : 'bg-gray-800 hover:bg-gray-700'
    } ${colorHover}`}
  >
    <span className={`text-xl ${special ? 'text-white' : ''}`}>
      {icon}
    </span>
  </a>
);

export default Footer;