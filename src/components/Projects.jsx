import React from 'react'
import { GrMysql } from "react-icons/gr";
import { SiMongodb, SiThreedotjs } from "react-icons/si";
import { FaCss3, FaCss3Alt, FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";
// import image1 from "../assets/event.png"

const image1 = null;
const GsapIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className='size-20'
        fill={"currentColor"} viewBox="0 0 24 24" {...props} >
        {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
        <path d="m7.83,11.76h0s-.26,1.15-.26,1.15c-.01.06-.08.11-.15.11h-.32s-.04.02-.05.04c-.29.99-.69,1.68-1.21,2.09-.45.35-1,.51-1.73.51-.66,0-1.1-.21-1.48-.63-.5-.55-.7-1.46-.58-2.55.22-2.05,1.29-4.12,3.34-4.12.62,0,1.11.19,1.45.57.36.41.54,1.02.54,1.82,0,.07-.06.13-.13.13h-1.5c-.05,0-.1-.05-.1-.1-.01-.55-.18-.82-.5-.82-.58,0-.91.78-1.09,1.21-.25.6-.38,1.26-.35,1.92.01.3.06.73.35.91.26.16.62.05.84-.12.22-.17.4-.48.47-.75.01-.04.01-.07,0-.08-.01-.01-.04-.02-.06-.02h-.39s-.08-.02-.11-.05c-.02-.02-.03-.06-.02-.09l.26-1.14c.01-.06.07-.1.13-.11h0s2.53,0,2.53,0c0,0,.01,0,.02,0,.07,0,.11.07.11.14h0Z"></path><path d="m12.18,10.45c0,.07-.06.13-.13.13h-1.38c-.09,0-.17-.07-.17-.16,0-.4-.14-.6-.42-.6s-.47.18-.47.48c0,.34.19.65.74,1.18.72.68,1.01,1.28,1,2.08-.02,1.29-.9,2.12-2.23,2.12-.68,0-1.2-.18-1.54-.54-.35-.36-.51-.9-.48-1.59,0-.07.06-.13.13-.13h1.43s.08.02.1.05c.02.03.03.06.03.09-.02.25.03.43.13.54.06.07.15.1.26.1.26,0,.42-.19.42-.51,0-.28-.08-.53-.57-1.03-.63-.61-1.19-1.24-1.17-2.23.01-.58.24-1.1.64-1.48.43-.4,1.01-.61,1.69-.61.68,0,1.2.2,1.53.58.32.36.47.88.46,1.54h0Z"></path><path d="m16.47,15.43v-6.84c.01-.07-.05-.13-.12-.13,0,0,0,0,0,0h-2.14c-.07,0-.1.06-.12.1l-3.1,6.82h0s0,0,0,0c-.03.08.03.17.12.17h1.5c.08,0,.13-.02.16-.08l.3-.71c.04-.09.04-.1.15-.1h1.43c.1,0,.1,0,.1.1l-.03.66c0,.07.06.13.13.13,0,0,0,0,0,0h1.51s.07-.02.1-.04c.02-.02.03-.06.03-.09Zm-2.65-2.28s-.02,0-.03,0c-.02,0-.03-.02-.03-.04,0,0,0,0,0,0,0-.01,0-.02.01-.04l1.07-2.65s.02-.05.03-.08c.02-.04.04-.04.05-.01,0,.02-.12,2.72-.12,2.72-.01.1-.01.11-.11.11h-.86s0-.01,0-.01h0s0,0,0,0Z"></path><path d="m19.51,8.46h-1.14c-.06,0-.13.03-.14.1l-1.58,6.86s0,.06.02.09c.03.03.07.05.11.05h1.42c.08,0,.13-.04.14-.1,0,0,.17-.78.17-.78.01-.06,0-.11-.06-.14-.03-.01-.05-.03-.08-.04l-.25-.13-.24-.13-.09-.05s-.03-.02-.02-.04c0-.03.02-.05.05-.05h.78c.23,0,.47-.01.69-.05,1.61-.3,2.68-1.59,2.71-3.34.03-1.5-.81-2.26-2.48-2.26,0,0,0,0,0,0Zm-.39,4.08h-.03c-.07,0-.08,0-.08,0,0,0,.45-1.98.45-1.98.01-.06.01-.09-.02-.11-.05-.02-.7-.37-.7-.37-.02,0-.03-.02-.02-.04,0-.03.02-.05.05-.05h1.04c.32,0,.5.3.49.79-.01.85-.42,1.74-1.17,1.77h0Z"></path>
    </svg>
);

{/* <GrMysql size={10}/>
<FaJs size={10}/>
<FaReact size={10}/>
<TbBrandThreejs size={10}/>
<FaHtml5 size={10}/>
<IoLogoCss3 size={10}/>
<RiTailwindCssFill size={10}/>

<SiRedux size={10}/>,
    <SiExpress size={10} />,
    <FaNodeJs size={10} />,
    <RiNextjsFill size={10} />,
    <SiChakraui size={10} />, */}
// <SiMongodb size={10} />
const projectList = [
    {
        image: "/chat.png",
        info: "A real-time chat application with authentication, state management, and a responsive UI. Built for seamless messaging across devices.",
        title: "Chat Application",
        techStack: [
            <RiNextjsFill />,
            <SiChakraui />,
            <SiRedux />,
            <FaNodeJs />,
            <SiExpress />,
            <SiMongodb />
        ],
        viewLink: "https://chat-front-end24.vercel.app/login",
        sourceLink: "gitLInk",
    },
    {
        image: "/event.png",
        info: "A full-stack event management system where users can create, manage, and register for events. Integrated with a database for smooth event handling.",
        title: "Event Management System",
        techStack: [
            <RiNextjsFill />,
            <RiTailwindCssFill />,
            <FaNodeJs />,
            <SiExpress />,
            <SiMongodb />
        ],
        viewLink: "https://event-management-frontend-25.vercel.app/",
        sourceLink: "gitLInk",
    },
    {
        image: "zentry.png",
        info: "A clone of the Zentry website built with animations and smooth transitions to showcase modern frontend development techniques.",
        title: "Zentry Clone",
        techStack: [
            <RiReactjsFill />,
            <GsapIcon />,
            <RiTailwindCssFill />,
        ],
        viewLink: "https://zentry-clone25.vercel.app/",
        sourceLink: "gitLInk",
    },
    {
        image: image1,
        info: "A Three.js powered project that renders and displays 3D models in the browser, enabling interactive visualization.",
        title: "ThreeJs Model Rendering",
        techStack: [
            <FaReact />,
            <RiTailwindCssFill />,
            <SiThreedotjs />,
        ],
        viewLink: "https://3d-model-three-js.vercel.app/",
        sourceLink: "gitLInk",
    },
    {
        image: image1,
        info: "A 3D rotating sphere built using Three.js, HTML, CSS, and JavaScript to demonstrate WebGL and 3D rendering capabilities.",
        title: "3D Sphere",
        techStack: [
            <FaHtml5 />,
            <FaCss3Alt />,
            <FaJs />,
            <SiThreedotjs />,
        ],
        viewLink: "https://3d-rotating-sphere-3js.netlify.app/",
        sourceLink: "gitLInk",
    },
    {
        image: image1,
        info: "An infinite tunnel animation created using Three.js, delivering a visually immersive 3D effect directly in the browser.",
        title: "Infinite Tunnel",
        techStack: [
            <FaHtml5 />,
            <FaCss3Alt />,
            <FaJs />,
            <SiThreedotjs />,
        ],
        viewLink: "https://infinite-tunnel-3js.netlify.app/",
        sourceLink: "gitLInk",
    },
    {
        image: image1,
        info: "A 3D Earth globe model with rotation and interactive effects using Three.js to simulate planet visualization in real-time.",
        title: "Earth Model",
        techStack: [
            <FaHtml5 />,
            <FaCss3Alt />,
            <FaJs />,
            <SiThreedotjs />,
        ],
        viewLink: "https://earth-globe-model-3js.netlify.app/",
        sourceLink: "gitLInk",
    },
];




function Projects() {
    return (
        //  <div className='w-full grid grid-cols-2 gap-5 justify-center items-center  px-4'> 
        <div className='w-full flex flex-col gap-5 lg:gap-20 justify-center items-center ' id='projects'>
            <h1 className='text-center text-3xl lg:text-4xl text-gray-600'>My <span className='text-blue-500'>Projects</span></h1>

            {
                projectList.map((i, idx) => (
                    <div key={idx} className="w-full flex flex-col lg:flex-row h-auto lg:h-[20rem] xl:h-[30rem]  rounded-lg shadow-lg  overflow-hidden">
                        {/* <div className="w-full lg:w-[50%]">
                            <img src={i.image} alt="" className=' size-full object-center object-cover rounded-lg ' />
                        </div> */}
                        <div className="w-full lg:w-[60%]">
                            {/* <img src={i.image} alt="" className=' size-full object-center object-cover rounded-lg ' /> */}
                            {
                                !i.image ?
                                    <iframe src={i.viewLink} className=' size-full object-center object-cover rounded-lg '   ></iframe>
                                    :
                                    <img src={i.image} alt="project image" className='object-center object-fill size-full' />
                            }
                        </div>
                        <div className='w-full lg:w-[40%] px-8'>
                            <div className='h-auto xl:h-[60%]'>
                                <h1 className='text-center text-xl xl:text-4xl my-2 text-blue-900' >{i.title || "hello app"} </h1>
                                <p className='text-md xl:text-xl p-1'>
                                    {i.info}
                                </p>
                            </div>
                            <div className='h-[20%] lg:flex gap-5 justify-evenly items-center text-2xl lg:text-4xl  xl:text-5xl grid grid-cols-6 lg:px-5  py-2'>
                                {i.techStack.map((i, idx) => (<div key={idx}>{i}</div>))}
                            </div>
                            <div className='py-2 lg:h-[20%] flex justify-evenly items-center'>
                                {
                                    i.viewLink &&
                                    <a href={i.viewLink} target="_blank" className="relative cursor-pointer group overflow-hidden text-md lg:text-xl px-1 py-1 lg:px-9 lg:py-3 text-blue-800 border-2 border-blue-900 bg-white rounded-lg">
                                        <span className="relative z-10 group-hover:text-white">View Live</span>
                                        <span className="absolute left-0 top-0 w-0 h-full bg-blue-900 transition-all duration-200 ease-out group-hover:w-full  opacity-100 "></span>
                                    </a>
                                }
                                {
                                    i.sourceLink &&
                                    <a href={i.viewLink} target="_blank" className="relative group overflow-hidden text-md lg:text-xl px-1 py-1 lg:px-9 lg:py-3 text-blue-800 border-2 border-blue-900 bg-white rounded-lg">
                                        <span className="relative z-10 group-hover:text-white">Source Code</span>
                                        <span className="absolute left-0 top-0 w-0 h-full bg-blue-900 transition-all duration-200 ease-out group-hover:w-full  opacity-100 "></span>
                                    </a>


                                }

                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


export default Projects


