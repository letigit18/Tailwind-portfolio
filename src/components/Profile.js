import React from 'react'
const Profile = ()=>{
    return(
        <div className='w-full h-auto py-10 px-[20px]'>
            <b className='text-center text-xl relative'>
                Profile Summary
                <span className='absolute w-8 h-[2px] bg-red-500 left-[30%] top-[27px] rounded animate-ping opacity-90'>
                </span>     
            </b>
            <p className='text-justify mt-[10px] leading-normal text-slate-700'>
            I'm Letera Tesfaye, a full-stack developer with an MSc. in Computer Science (Addis Ababa University, 2019) and a BSc. in Information Systems (Madda Walabu University, 2014). My career spans academia, where I focused on research and community projects, and the banking sector as a Database Administrator, gaining expertise in system optimization and scalable solutions.

Currently, I develop full-stack applications, leveraging both front-end and back-end technologies, including React, Next JS, Express JS, MySQL, Mongo DB, Node.js, Python, SQL, Bootstrap, and Tailwind CSS. I'm dedicated to delivering innovative, reliable solutions that address real-world challenges and enhance organizational efficiency.
            </p>
        </div>
    )
}
export default Profile;