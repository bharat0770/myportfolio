import React from 'react'
import image1 from "../assets/myProfile.png"
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandThreejs } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";


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
        image: image1,
        info: "i made it i made iti made it i made iti made it v v i made it v  v i made itvi made iti made iti made it",
        title: "chat application",
        techStack: [<SiRedux />,
        <SiExpress />,
        <FaNodeJs />,
        <RiNextjsFill />,
        <SiChakraui />,
        <SiMongodb />],
        viewLink: "depLink",
        sourceLink: "gitLInk",
    },
    {
        image: image1,
        info: "i made it i made iti made it i made iti made it v v i made it v  v i made itvi made iti made iti made it",
        title: "chat application",
        techStack: [<SiRedux />,
        <SiExpress />,
        <FaNodeJs />,
        <RiNextjsFill />,
        <SiChakraui />,
        <SiMongodb />], viewLink: "depLink",
        sourceLink: "gitLInk",
    },
    {
        image: image1,
        info: "i made it i made iti made it i made iti made it v v i made it v  v i made itvi made iti made iti made it",
        title: "chat application",
        techStack: [<SiRedux />,
        <SiExpress />,
        <FaNodeJs />,
        <RiNextjsFill />,
        <SiChakraui />,
        <SiMongodb />], viewLink: "depLink",
        sourceLink: "gitLInk",
    }, {
        image: image1,
        info: "i made it i made iti made it i made iti made it v v i made it v  v i made itvi made iti made iti made it",
        title: "chat application",
        techStack: [<SiRedux />,
        <SiExpress />,
        <FaNodeJs />,
        <RiNextjsFill />,
        <SiChakraui />,
        <SiMongodb />], viewLink: "depLink",
        sourceLink: "gitLInk",
    },
]
function Projects() {
    return (
        //  <div className='w-full grid grid-cols-2 gap-5 justify-center items-center  px-4'> 
        <div className='w-full flex flex-col gap-5 lg:gap-20 justify-center items-center  lg:px-10'>

            {
                projectList.map((i, idx) => (
                    <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[30rem]  rounded-lg shadow-lg gap-5 overflow-hidden">
                        <div className="w-full lg:w-[50%]">
                            <img src={i.image} alt="" className=' size-full object-center object-cover rounded-lg ' />
                        </div>
                        <div className='w-full lg:w-[50%]'>
                            <div className='h-auto lg:h-[60%]'>
                                <h1 className='text-center text-xl lg:text-4xl my-2 text-blue-900' >{i.title || "hello app"} </h1>
                                <p className='text-md lg:text-xl p-1'>
                                    {i.info}
                                    </p>
                            </div>
                            <div className='h-[20%] lg:flex gap-5 justify-evenly text-2xl lg:text-5xl grid grid-cols-6 px-5  py-2'>
                                {i.techStack.map((i, idx) => (<div>{i}</div>))}
                            </div>
                            <div className='py-2 lg:h-[20%] flex justify-evenly items-center'>
                {
                    i.viewLink && 
        <button class="relative cursor-pointer group overflow-hidden text-md lg:text-xl px-1 py-1 lg:px-9 lg:py-3 text-blue-800 border-2 border-blue-900 bg-white rounded-lg">
          <span class="relative z-10 group-hover:text-white">View Live</span>
          <span class="absolute left-0 top-0 w-0 h-full bg-blue-900 transition-all duration-200 ease-out group-hover:w-full  opacity-100 "></span>
        </button>
                }
{
    i.sourceLink && 
        <button class="relative group overflow-hidden text-md lg:text-xl px-1 py-1 lg:px-9 lg:py-3 text-blue-800 border-2 border-blue-900 bg-white rounded-lg">
          <span class="relative z-10 group-hover:text-white">Source Code</span>
          <span class="absolute left-0 top-0 w-0 h-full bg-blue-900 transition-all duration-200 ease-out group-hover:w-full  opacity-100 "></span>
        </button>

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
                                // <button className='relative h-[100rem] bg-red'>
                                // <a href={i.viewLink} className='relative bg-white text-xl text-blue-900 border-2 rounded-2xl border-blue-900 h-full'>
                                // view website
                                // </a>
                                // <span className='absolute left-0 top-0 bg-blue-900 w-0 h-full group-hover:w-full '>
                                    
                                // </span>
                                // </button>
                                // <a href={i.sourceLink} className='bg-white text-xl text-blue-900 border-2 rounded-2xl border-blue-900 px-10 py-4'>souce code</a>