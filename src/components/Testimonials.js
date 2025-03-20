import React from 'react'
const Testimonials = ()=>{
    return(
        <div className='font-Poppins w-full py-5 h-auto bg-slate-50 text-slate-600' id="testimonials">
            <b className='text-center text-bold text-xl text-black font-bold relative'>
                Clients Testimonial
    
            
            </b>
           
            <div className='flex gap-5 p-[20px] flex-col md:flex-row justify-start sm:justify-center items-center'>
                <div className='p-[10px] border-[1px] border-red-100 bg-white h-[260px] w-[360px] rounded-lg shadow-md hover:scale-105 transition-transform ease-in duration-300'>
                  <div>
                    <p className='text-yellow-500 text-center'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    <p className='text-slate-700 text-sm text-justify'>"Great experience working with Letera. He was punctual, delivered high-quality work, and met 
                        my expectations. The React landing page for my SaaS turned out exactly as I envisioned. I will definitely hire 
                        him again" 
                    </p>
                  </div>
                  <div className='flex text-sm justify-between items-center mt-[10px]'>
                    <div className='text-left'>
                        <b>Seifu Zerihun(PhD.)</b>
                        <p><b>Principal</b> at Kaytics</p>
                        <p>+1(217)5129157</p>
                        <p>USA</p>
                    </div>
                    <img src="seifu.png" className='w-[70px] h-[70px] rounded-full'/>
                  </div>
                   
                </div>
                <div className='p-[10px] border-[1px] border-red-100 bg-white h-[260px] w-[360px] rounded-lg shadow-md hover:scale-105 transition-transform ease-in duration-300'>
                  <div>
                    <p className='text-yellow-500 text-center'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    <p className='text-slate-700 text-sm text-justify'>"Mr. Letera Tesfaye you have contributed a lot to our company in terms of your proffesionalism. We appreciate your creativeness, punctuality to take off the task and your presentation on the system for our team was unforgettable. Hope you will bring great to our country in tech. Sector" 
                    </p>
                  </div>
                  <div className='flex text-sm justify-between items-center mt-[10px]'>
                    <div className='text-left'>
                        <b>Gadisa Bekole</b>
                        <p><b>Manager, </b>Tigist Gizawu VAS</p>
                        <p>+251911507701</p>
                        <p>Addis Ababa, Ethiopia</p>
                    </div>
                    <img src="gado.jpg" className='w-[70px] h-[70px] rounded-full'/>
                  </div>
                   
                </div>
                <div className='p-[10px] border-[1px] border-red-100 bg-white h-[260px] w-[360px] rounded-lg shadow-md hover:scale-105 transition-transform ease-in duration-300'>
                  <div>
                    <p className='text-yellow-500 text-center'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    <p className='text-slate-700 text-sm text-justify'>"I wanna express my gratitude to you for the quality service you delivered to our team. We have got a remarkable Physical fitness content management system for our premium contents. Your continuing support regarding the usage of the system is always memorable. I wish you all the best dear Letera." 
                    </p>
                  </div>
                  <div className='flex text-sm justify-between items-center mt-[10px]'>
                    <div className='text-left'>
                        <b>Mathewos Tezera</b>
                        <p><b>Manager, </b>Mathewos Tezera VAS</p>
                        <p>+251920275483</p>
                        <p>Addis Ababa, Ethiopia</p>
                    </div>
                    <img src="mati.png" className='w-[70px] h-[70px] rounded-full'/>
                  </div>
                   
                </div>
            </div>
        </div>
    )
}
export default Testimonials;