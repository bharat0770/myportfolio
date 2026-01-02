import React, { useState } from 'react'
import { FaMoon } from "react-icons/fa";
function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className=' w-full py-5  md:py-10 text-sm lg:text-xl overflow-hidden'>
      <div className='flex justify-between items-center'>
        <div className="text-blue-500">
          Bs.
        </div>
        <div className='relative hidden md:flex gap-1 lg:gap-5 flex-wrap capitalize '>
          <a href="#home" className='relative hover:text-blue-800 group'>
            home
            <div className='absolute left-0 -bottom-1 h-1 z-10 bg-blue-800  w-0 transition-all duration-150 ease-out group-hover:w-full'></div>
          </a>
          <a href="#about" className='relative hover:text-blue-800 group'>
            about
            <div className='absolute left-0 -bottom-1 h-1 z-10 bg-blue-800  w-0 transition-all duration-150 ease-out group-hover:w-full'></div>
          </a>
          <a href="#skills" className='relative hover:text-blue-800 group'>
            skills
            <div className='absolute left-0 -bottom-1 h-1 z-10 bg-blue-800  w-0 transition-all duration-150 ease-out group-hover:w-full'></div>
          </a>
          <a href="#projects" className='relative hover:text-blue-800 group'>
            projects
            <div className='absolute left-0 -bottom-1 h-1 z-10 bg-blue-800  w-0 transition-all duration-150 ease-out group-hover:w-full'></div>
          </a>
          <a href="#footer" className='relative hover:text-blue-800 group'>
            contact
            <div className='absolute left-0 -bottom-1 h-1 z-10 bg-blue-800  w-0 transition-all duration-150 ease-out group-hover:w-full'></div>
          </a>
          {/* <a href="https://drive.google.com/file/d/1dE4gM5Jja5B2SvGjyMk-dGi6fxZlX6cD/view?usp=sharing" target='_blank' className='relative hover:text-blue-800 group'> */}

          <a href="https://drive.google.com/file/d/1VwSqB5fjBB5f1G0wX9eNNudwvKjbU75E/view?usp=sharing" target='_blank' className='relative hover:text-blue-800 group'>

            resume
            <div className='absolute left-0 -bottom-1 h-1 z-10 bg-blue-800  w-0 transition-all duration-150 ease-out group-hover:w-full'></div>
          </a>

          {/* <button className='  hover:text-blue-900 cursor-pointer '><FaMoon/></button> */}
        </div>


        <div className='z-10 md:hidden'>
          <div className='nav-icon text-blue-400 font-bold' onClick={() => setNavOpen(!navOpen)}>⋮</div>
          {
            navOpen && <div className='nav-list absolute right-0 z-50  min-w-[10rem] rounded-xl shadow-lg  overflow-scroll bg-white p-4 flex flex-col gap-5'>
              <a href="#home" className='relative hover:text-blue-800 group'>
                home
                <div className='absolute left-0 -bottom-1 h-1 z-10 bg-blue-800  w-0 transition-all duration-150 ease-out group-hover:w-full'></div>
              </a>
              <a href="#about" className='relative hover:text-blue-800 group'>
                about
                <div className='absolute left-0 -bottom-1 h-1 z-10 bg-blue-800  w-0 transition-all duration-150 ease-out group-hover:w-full'></div>
              </a>
              <a href="#skills" className='relative hover:text-blue-800 group'>
                skills
                <div className='absolute left-0 -bottom-1 h-1 z-10 bg-blue-800  w-0 transition-all duration-150 ease-out group-hover:w-full'></div>
              </a>
              <a href="#projects" className='relative hover:text-blue-800 group'>
                projects
                <div className='absolute left-0 -bottom-1 h-1 z-10 bg-blue-800  w-0 transition-all duration-150 ease-out group-hover:w-full'></div>
              </a>
              <a href="#footer" className='relative hover:text-blue-800 group'>
                contact
                <div className='absolute left-0 -bottom-1 h-1 z-10 bg-blue-800  w-0 transition-all duration-150 ease-out group-hover:w-full'></div>
              </a>  <a href="https://drive.google.com/file/d/1dE4gM5Jja5B2SvGjyMk-dGi6fxZlX6cD/view?usp=sharing" target='_blank' className='relative hover:text-blue-800 group'>
                resume
                <div className='absolute left-0 -bottom-1 h-1 z-10 bg-blue-800  w-0 transition-all duration-150 ease-out group-hover:w-full'></div>
              </a>

            </div>
          }

        </div>

        {/* <button className='  hover:text-blue-900 cursor-pointer '><FaMoon/></button> */}
      </div>

    </div>
  )
}

export default Navbar; 