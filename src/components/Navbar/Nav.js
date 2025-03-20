import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-scroll'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = ()=>{
    setIsMenuOpen(false)
  }
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
    <nav className="relative bg-gradient-to-r from-blue-900 to-blue-950 shadow-md z-50">
      <div className="container  flex items-center justify-between  py-5">
        {/* Logo (Left) */}
       
          
          <img src="leti logo2.png" width={70} height={60}/>
         
       

        {/* Desktop Menu (Right) */}
        <div className="hidden md:flex space-x-2 text-sm">
          <a href="#" className="text-slate-200 hover:bg-white px-5 py-2 rounded hover:text-black transition ease-in duration-300">
            Home
          </a>
          <Link  to="skills" spy={true} smooth={true} offset={-60} duration={400} className="text-slate-200 hover:bg-white px-5 cursor-pointer py-2 rounded hover:text-black transition ease-in duration-300">
            Skills
          </Link>
     
          <Link to="projects" spy={true} smooth={true} offset={-60} duration={400}  className="text-slate-200 cursor-pointer hover:bg-white px-5 py-2 rounded hover:text-black transition ease-in duration-300">
            Projects
          </Link>
          <Link to="testimonials" spy={true} smooth={true} offset={-60} duration={400}  className="text-slate-200 cursor-pointer hover:bg-white px-5 py-2 rounded hover:text-black transition ease-in duration-300">
            Testimonials
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-60} duration={400}  activeClass="bg-white" className="text-slate-200 cursor-pointer hover:bg-white px-5 py-2 rounded hover:text-black transition ease-in duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-slate-200 focus:outline-none">
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
        className={`fixed top-0 left-0 h-full w-64 bg-blue-950 shadow-md transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          
          <img src="leti logo2.png" width={70} height={60}/>
         
          <button onClick={toggleMenu} className="text-slate-200 focus:outline-none">
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
          <Link href="/" className="text-slate-200 hover:bg-white hover:text-gray-950 tex-white py-2 w-full rounded  transition ease-in duration-300" onClick={closeMenu}>
            Home
          </Link>
          <Link to="skills" className="text-slate-200 cursor-pointer hover:bg-white hover:text-gray-950 tex-white py-2 w-full rounded  transition ease-in duration-300" onClick={closeMenu}>
            Skills
          </Link>
          <Link to="projects" className="text-slate-200 cursor-pointer hover:bg-white hover:text-gray-950 tex-white py-2 w-full rounded  transition ease-in duration-300" onClick={closeMenu}>
            Projects
          </Link>
          <Link to="testimonials" className="text-slate-200 cursor-pointer hover:bg-white hover:text-gray-950 tex-white py-2 w-full rounded  transition ease-in duration-300" onClick={closeMenu}>
            Testimonials
          </Link>
          <Link to="contact" className="text-slate-200 cursor-pointer hover:bg-white hover:text-gray-950 tex-white py-2 w-full rounded  transition ease-in duration-300" onClick={closeMenu}>
            Contact
          </Link>
          <p className='absolute bottom-5 text-xs text-slate-200'>&copy; All rights reserved. Powered by Letera Tesfaye</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;