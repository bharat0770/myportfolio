import React from 'react'
import { FaMoon } from "react-icons/fa";
function Navbar() {
  return (
    <div className=' w-full py-10 text-sm lg:text-xl overflow-hidden'>
      <div className='flex justify-between items-center'>
        <div className="text-blue-500">
          Bs.
        </div>
        <div className='relative flex gap-1 lg:gap-5 flex-wrap capitalize'>
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
         
          {/* <button className='  hover:text-blue-900 cursor-pointer '><FaMoon/></button> */}
        </div>
      </div>

    </div>
  )
}

export default Navbar; 