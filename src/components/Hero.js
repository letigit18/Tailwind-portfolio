import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
const Hero = ()=>{
    const [text] = useTypewriter({
        words: ['Javascript Dev', 'React Dev', 'Next JS Dev', 'PHP Dev', 'Express JS', 'REST API', 'SOAP API', 'Tailwind', 'CSS', 'MySQL', 'MongoDB'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 20
    })
    return(
        <div className='w-full h-[60vh] bg-slate-100 p-5 flex justify-between items-center'>
            <div className='flex flex-col space-y-2 w-[250px]'>
                <b className='text-lg font-sans '>Hi, I'm Letera Tesfaye, <b className="text-red-500">Full Stack Developer.</b></b>
                <p className='font-bold text-xlg'>  {text}</p>
    
              
                <div className='flex space-x-2'>
                    <a href="#" className='text-slate-200 px-3 py-2 bg-blue-900 hover:bg-red-500 transition easy-in duration-300 cursor-pointer rounded-md'>Download CV</a>
                    <a href="#" className='text-slate-200 px-3 py-2 bg-red-500 hover:bg-blue-900 cursor-pointer rounded-md transition easy-in duration-300'>Github link</a>
                </div>
            </div>
            <div class="flex justify-center items-center gap-8 flex-wrap h-[300px] bg-gray-100 mr-[20px]">
 
  
                <div class="relative w-[200px] h-[200px] rounded-full overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-60 hover:rotate-12 hover:shadow-2xl animate-pulse">
                    <img src="LT.jpg" alt="My profile image" class="object-cover w-full h-[230px]" />
                </div>
            </div>
 
            

</div>
    
    )
}
export default Hero;