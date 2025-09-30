import React from 'react'


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

const skills = [
{name : "Mysql", icon : <GrMysql />},
{name : "Mongodb", icon : <SiMongodb />},
{name : "Js", icon : <FaJs />},
{name : "React", icon : <FaReact />},
{name : "Redux", icon : <SiRedux />},
{name : "Express", icon : <SiExpress  />},
{name : "NodeJs", icon : <FaNodeJs  />},
{name : "BrandThreejs", icon : <TbBrandThreejs />},
{name : "Html5", icon : <FaHtml5 />},
{name : "Css3", icon : <IoLogoCss3 />},
{name : "NextjsFill", icon : <RiNextjsFill />},
{name : "TailwindCssFill", icon : <RiTailwindCssFill />},
{name : "Chakraui", icon : <SiChakraui />}
]
function SkillsCard() {
    return (
        <div  className='w-full p-1 lg:p-8 flex gap-10 flex-col items-center justify-center' id='skills'> 
                    <h1 className='text-center text-3xl lg:text-4xl text-gray-600'>My <span className='text-blue-500'>Skills</span></h1>

        {/* <h1 className='flex items-center text-4xl text-blue-800 mb-10'>Skills</h1> */}
        {/* <div className='lg:grid lg:grid-cols-6 gap-1 lg:h-[20rem] w-full flex flex-wrap  justify-center'> */}
            <div className='grid lg:grid-cols-6 grid-cols-3 gap-1 lg:h-[20rem] '>
            {  

                skills.map((i, idx) => (
                    <div className=' rounded-lg flex flex-col  p-2 hover:bg-blue-50'key={idx}>
                        <div className='h-[90%] text-blue-900 flex justify-center items-center m-4 text-5xl lg:text-7xl '>
                            {i.icon}
                        </div>
                        <div className='flex justify-center'>
                            {i.name}
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default SkillsCard
