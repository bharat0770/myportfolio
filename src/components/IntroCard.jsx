import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillFile } from "react-icons/ai";
import { HiPhone } from "react-icons/hi";

const contactIcons = [
    { link: "https://github.com/bharat0770", icon: <AiOutlineGithub /> },
    { link: "https://www.linkedin.com/in/bharat-suthar-89ba47373/", icon: <AiFillLinkedin /> },
    { link: "mailto:bharatsuthar9324@gmail.com", icon: <AiFillMail /> },
    { link: "AiFillFile", icon: <AiFillFile /> },
    { link: "HiPhone", icon: <HiPhone /> },
]
const animatedTextArr = [
    'Tech Savvy',
    1000,
    'Tech Enthusiast',
    1000,
    'Web Developer',
    1000,
]
function IntroCard() {
    return (
        <div id='home' className='w-full flex flex-col justify-center items-center gap-4 lg:gap-8 '>
            <h1 className='text-2xl lg:text-5xl break-words'>Hi, I am <span className='text-blue-500'>Bharat Suthar</span> </h1>
            <TypeAnimation
                sequence={animatedTextArr}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                className='text-xl lg:text-3xl'
                repeat={Infinity}
            />
            <p className='break-all '>
                Dedicated Full Stack Developer passionate about building dynamic web applications. Proficient in utilizing modern frameworks and libraries to deliver scalable and innovative solutions.
            </p>

            <div className="flex gap-5 justify-center w-full px-10">
                {contactIcons.map((i, idx) => {
                    return <a key={idx} target='_blank' className='relative  text-blue-900 hover:scale-125 transition-all duration-200 group text-2xl lg:text-4xl' href={i.link}> {i.icon}
                        <div className='absolute left-0 -bottom-1 h-1 z-10 bg-blue-800  w-0 transition-all duration-150 ease-out group-hover:w-full'></div>
                    </a>
                })}
            </div>
        </div>
    )
}

export default IntroCard






