import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Associate Software Engineer',
    company: 'Genzeon Pvt Ltd',
    period: 'May 2023 - Present',
    description: 'Worked development of multiple projects for front-end role using React, CSS, MUI',
  },
  {
    title: 'Post Graduation Diploam in Advance Computing',
    company: 'CDAC Pune',
    period: 'Sep 2022 - Mar 2023',
    description: 'Completed an intensive training program in web development, focusing on modern JavaScript frameworks, responsive design, and backend technologies. Gained hands-on experience in building full-stack web applications, working with databases, and deploying scalable solutions.',
  },
  {
    title: 'Graduation',
    company: 'SGSITS Indore',
    period: '2018 - 2021',
    description: 'Gained comprehensive knowledge of mechanical systems, thermodynamics, and manufacturing processes. Worked on projects involving CAD design, material science, and robotics. Developed strong problem-solving skills and a foundation in engineering principles.',
  },
  
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-gray-900"></div>
                </div>

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-gray-600" />
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="mt-2 text-gray-700">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;