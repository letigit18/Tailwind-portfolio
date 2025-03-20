import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-blue-950 w-full h-auto text-slate-200"
    >
      <div className="w-full md:w-[90%] mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/3 text-justify"
          >
            <h3 className="font-bold mb-2 text-red-500">About</h3>
            <p className="text-sm">
              This website is a personal portfolio website that showcases my
              previous works and skills I grasped throughout my professional
              journey.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-1/4"
          >
            <h3 className="font-bold mb-2 text-left text-red-500">Links</h3>
            <ul className="text-left">
              <li className="hover:text-blue-300 cursor-pointer">Home</li>
              <li className="hover:text-blue-300 cursor-pointer">Testimonials</li>
              <li className="hover:text-blue-300 cursor-pointer">My Skills</li>
              <li className="hover:text-blue-300 cursor-pointer">Projects</li>
              
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full md:w-1/4"
          >
            <div className="font-bold mb-2 text-left text-red-500">Follow me:</div>
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors duration-300"
              >
                <FaFacebook size={25} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors duration-300"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors duration-300"
              >
                <FaLinkedin size={25} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <p className="text-center text-sm text-slate-300 py-4">
        &copy; All rights reserved. Powered by Letera Tesfaye
      </p>
    </motion.div>
  );
};

export default Footer;