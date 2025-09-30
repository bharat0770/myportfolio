    import React from 'react'
    import { LuMousePointer2 } from "react-icons/lu";
    import myProfile from "../assets/myProfile3.jpeg"; 

    const hobbiesArr = [
        "reading books on varied topics", 
        "cooking and trying recipes from different region and culture",
        "following latest updates in anime", 
        "following trends regarding gaming industries", 
    ]
    function AboutMeCard() {
        return (
            <div className='w-full flex flex-col gap-5'>
                <h1 className='text-center text-3xl lg:text-4xl text-gray-600'>About <span className='text-blue-500'>Me</span></h1>
            <div className='w-full flex flex-col lg:flex-row gap-8 justify-center items-center' id='about'>

                <div className="image w-full lg:w-[40%]    flex justify-center items-center" >
                    <img src={myProfile} alt="my profile" className='object-cover object-center lg:max-h-100 lg:max-w-100 max-h-50 max-w-50 inset-0 rounded-full shadow-lg'/>
                </div>
                <div className='w-full lg:w-[60%] flex flex-col  gap-5 break-words'>
                    <p>
                        Hi everyone! I'm a developer from Mumbai, India. I hold a Bachelor’s degree in Computer Applications and developed a passion for technology.
                        I focus on building innovative solutions and staying updated with the ever-changing tech industry.
                    </p>
                    <p className='flex w-full justify-start'>
                    Outside of coding, I enjoy engaging in a variety of activities:
                    </p>
                    <div className='flex flex-col items-start  break-words'>    
                        {
                            hobbiesArr.map((i, idx) => (
                                                    <p key={idx} className='text-blue-800 flex gap-5 size-10 w-full'><LuMousePointer2/>{i}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
            </div>
        )
    }

    export default AboutMeCard