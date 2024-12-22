import React from 'react';
import { Code2, Layout, Database, GitBranch } from 'lucide-react';
import SkillCard from './SkillCard';
import SkillProgress from './SkillProgress';

const skillCards = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with React and modern CSS.',
    Icon: Layout,
  },
  {
    title: 'Backend Development',
    description: 'Creating scalable server-side applications with Node.js and Express.',
    Icon: Code2,
  },
  {
    title: 'Database Design',
    description: 'Designing and optimizing database schemas for performance and scalability.',
    Icon: Database,
  },
  {
    title: 'Version Control',
    description: 'Managing code versions and collaborating with teams using Git and GitHub.',
    Icon: GitBranch,
  },
];

const technicalSkills = [
  { name: 'React.js', percentage: 90 },
  { name: 'Node.js', percentage: 85 },
  { name: 'TypeScript', percentage: 80 },
  { name: 'SQL', percentage: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCards.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Technical Skills</h3>
          {technicalSkills.map((skill, index) => (
            <SkillProgress key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;