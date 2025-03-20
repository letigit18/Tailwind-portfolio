import React from 'react';

const projectsData = [
  {
    title: 'Project 1: Multi-lingual Job Portal',
    description: 'This website is developed by Next JS and Express JS. It connects job seekers and recruiters with exceptional features.',
    videoUrl: 'wenchijobs_sequence.mp4', // Replace with your video URL
    githubLink: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Health Advisory and Content Management System',
    description: 'An online store built with React and Tailwind CSS.',
    videoUrl: 'DemoHMS.mp4', // Replace with your video URL
    githubLink: 'https://github.com/yourusername/project2',
  },
  {
    title: 'School management system(on progress)',
    description: 'A simple todo list application with React.',
    videoUrl: 'DemoSMS.mp4',//replace with your video url
    githubLink: 'https://github.com/yourusername/project3',
  },
    {
        title: 'Power BI Integration with React App.',
        description: 'A weather application that displays current weather conditions.',
        videoUrl: 'DemoKaytics.mp4',
        githubLink: 'https://github.com/yourusername/weather-app',
    },
    {
      title: 'Phsical Fitness Content Management System',
      description: 'A responsive calculator application built with React.',
      videoUrl: 'DemoNMS.mp4',
      githubLink: 'https://github.com/yourusername/react-calculator',
  },
   
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <b className="text-xl text-center mb-[20px]">My Projects</b>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[20px]">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <video src={project.videoUrl} controls className="w-full aspect-video" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;