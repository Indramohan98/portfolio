import React from 'react';
import { ArrowDown } from 'lucide-react';
import profileImage from '../assets/images/mohan.jpg';


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <img
              src={profileImage}
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <div>Hi, I'm Indramohan Lal</div>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Full Stack Developer | MERN | Tech Enthusiast
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 
              text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-500 
              transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Learn More <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;