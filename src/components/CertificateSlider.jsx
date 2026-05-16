import React from 'react'
import { LuMousePointer2 } from "react-icons/lu";
import myProfile from "../assets/myProfile5.jpeg";
import { TiltEffect } from './HoverMe';

const certificates= [
    {title : "bca", img : ""},  
    {title : "gemini genrative ai", img : ""}, 
    {title : "robotics", img : ""}, 
]
const CertificateSlider = () => {
    const up = 2; 
    return (
        <div className='w-full h-100 bg-red-500 flex justify-center items-center overflow-x-scroll relative'>
        {
            certificates.map((i, idx) => {
                return <div key={idx} className={`bg-green-400 m-1 p-1 h-[90%] w-[90%] absolute ${up == idx ? "z-100": "z-10"}`}>
                    <img src={i?.img} alt="certificate image" />
                    <p>{i.title}</p>
                </div>
            })
        } 
        </div>
    )
}

export default CertificateSlider; 