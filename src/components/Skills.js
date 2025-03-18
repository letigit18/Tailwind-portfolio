import React, { useState, useEffect } from 'react';

const SkillBar = ({ skill, percentage }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prevWidth) => {
        if (prevWidth >= percentage) {
          clearInterval(interval);
          return percentage;
        }
        return prevWidth + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill}</span>
        <span>{width}%</span>
      </div>
      <div className="bg-gray-200 rounded-full h-2">
        <div
          className={`progress-bar h-2 rounded-full transition-width duration-1000 ease-in-out bg-red-500`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    { skill: 'HTML', percentage: 90 },
    { skill: 'CSS', percentage: 85 },
    { skill: 'JavaScript', percentage: 75 },
    { skill: 'Tailwind CSS', percentage: 95 },
    { skill: 'Python', percentage: 80 },
    { skill: 'React', percentage: 88 },
    { skill: 'Node.js', percentage: 70 },
    { skill: 'Express.js', percentage: 65 },
    { skill: 'SQL', percentage: 82 },
  ];

  return (
    <div className="w-full p-4 sm:p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {skillsData.map((skill) => (
          <SkillBar key={skill.skill} skill={skill.skill} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  );
};

export default Skills;