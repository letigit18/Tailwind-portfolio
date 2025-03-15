import React, { useState, useEffect, useRef } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) { // Assuming 'md' is 768px
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav className="relative bg-gradient-to-r from-blue-900 to-blue-950 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* Logo (Left) */}
        <div className="flex items-center">
          <a href="#" className="font-bold text-xl text-white">
            Left Logo
          </a>
        </div>

        {/* Desktop Menu (Right) */}
        <div className="hidden md:flex space-x-2 text-sm">
          <a href="#" className="text-slate-200 hover:bg-white px-5 py-1 rounded hover:text-black transition ease-in-out duration-300">
            Home
          </a>
          <a href="#" className="text-slate-200 hover:bg-white px-5 py-1 rounded hover:text-black transition duration-300">
            Skills
          </a>
          <a href="#" className="text-slate-200 hover:bg-white px-5 py-1 rounded hover:text-black transition duration-300">
            Projects
          </a>
          <a href="#" className="text-slate-200 hover:bg-white px-5 py-1 rounded hover:text-black transition duration-300">
            Testimonials
          </a>
          <a href="#" className="text-slate-200 hover:bg-white px-5 py-1 rounded hover:text-black transition duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-cyan-50 shadow-md transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <a href="#" className="font-bold text-xl text-blue-600">
            Letera Tesfaye
          </a>
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-5">
          <a href="#" className="text-gray-700 hover:bg-cyan-100 hover:text-gray-950 tex-white py-2 w-full rounded  transition ease-in duration-300">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Skills
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Projects
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Testimonials
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
            Contact
          </a>
          <p className='absolute bottom-5 text-sm'>&copy; All rights reserved. Powered by Letera Tesfaye</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;