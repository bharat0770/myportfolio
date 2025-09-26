import React from 'react'
import { LuMousePointer2 } from "react-icons/lu";
import myProfile from "../assets/myProfile.png"; 
function AboutMeCard() {
    return (
        <div className='w-full flex flex-col lg:flex-row gap-8 justify-center items-center'>
            <div className="image w-full lg:w-[40%]   flex justify-center items-center" >
                <img src={myProfile} alt="my profile" className='object-cover object-center size-full rounded-full shadow-lg'/>
            </div>
            <div className='w-full lg:w-[60%] flex flex-col  gap-5 break-words'>
                <p>
                    Hi everyone! I'm based in Mumbai, India. I hold a Bachelor’s degree in Banking and Insurance and developed a passion for technology through a boot camp at Masai School. With over 3 years of experience as a Software Engineer,
                    I focus on building innovative solutions and staying updated with the ever-changing tech industry.
                </p>
                <p className='flex w-full justify-start'>
                Outside of coding, I enjoy engaging in a variety of activities:
                </p>
                <div className='flex flex-col items-start  break-words'>    
                    <p className='text-blue-800 flex gap-5 size-10 w-full'><LuMousePointer2/> Playing Games</p>
                    <p className='text-blue-800 flex gap-5 size-10 w-full'><LuMousePointer2/> Solving Complex Problems</p>
                    <p className='text-blue-800 flex gap-5 size-10 w-full'><LuMousePointer2/> Exploring Algorithms and Data Structures</p>
                    <p className='text-blue-800 flex gap-5 size-10 w-full'><LuMousePointer2/> Watching Movies and Anime Series</p>
                    <p className='text-blue-800 flex gap-5 size-10 w-full'><LuMousePointer2/> Listening to Music</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMeCard