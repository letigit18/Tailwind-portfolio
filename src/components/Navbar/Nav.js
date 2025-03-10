import React from 'react';
 const Nav = () =>{
    return(
        <div className="bg-gradient-to-r from-slate-600 to-slate-900 text-white flex items-center justify-between">
            <div className="px-[20px]">
                Logo
            </div>
            <ul className="md:flex flex-row h-16 items-center mr-5 text-[15px]">
                <li className="px-3 hover:text-white ease-in"><a href="#" className='w-50 hover:bg-slate-200 hover:text-black  duration-300 ease-in p-2 rounded'>Home</a></li>
                <li className="px-3 hover:text-red transition duration-150 ease-out hover:ease-in"><a href="#">Skills</a></li>
                <li className="px-3"><a href="#">Projects</a></li>
                <li className="px-3"><a href="#">Testimonials</a></li>
                <li className="px-3"><a href="#">Contact</a></li>
            </ul>
          

        </div>
    )
}
export default Nav;