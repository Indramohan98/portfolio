import React from 'react';

interface SkillProgressProps {
  name: string;
  percentage: number;
}

const SkillProgress = ({ name, percentage }: SkillProgressProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700">{name}</span>
        <span className="text-gray-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gray-800 h-2 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default SkillProgress;