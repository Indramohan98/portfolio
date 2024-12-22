import React from 'react';
import { BookOpen, Coffee } from 'lucide-react';
import aboutMeImage from "../assets/images/Software-developer.jpg"

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
            <p className="text-lg text-gray-600">
              I'm a passionate Full Stack Developer with 1.5+ years of experience in building web applications. 
              I specialize in React, Node.js, and modern web technologies.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Coffee className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">Coffee Enthusiast</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">Lifelong Learner</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={aboutMeImage}
              alt="Workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;