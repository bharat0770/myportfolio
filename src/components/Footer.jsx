import React from 'react'

import { TypeAnimation } from 'react-type-animation';
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillFile } from "react-icons/ai";
import { HiPhone } from "react-icons/hi";

const contactIcons = [
{link : "AiOutlineGithub", icon : <AiOutlineGithub />},
{link : "AiFillLinkedin", icon : <AiFillLinkedin />},
{link : "AiFillMail", icon : <AiFillMail />},
{link : "AiFillFile", icon : <AiFillFile />},
{link : "HiPhone", icon : <HiPhone />},
]
function Footer() {
  return (
    <div className='w-full flex flex-col gap-10 justify-center items-center p-10'>
      <h1 className='text-center text-xl lg:text-4xl text-blue-900'>Get In Touch</h1>
      <div className="flex justify-between w-full lg:w-1/2">
          {
            contactIcons.map((i, idx) => (
            <a href={i.link} target='_blank' className='hover:text-purple-900 text-2xl lg:text-5xl  text-blue-800 hover:scale-125 transition-all duration-150'>{i.icon}</a>
            ))
          }      
      </div>
    </div>
  )
}

export default Footer