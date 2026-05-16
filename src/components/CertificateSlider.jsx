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
    return (
        <div className='w-full min-h-100 bg-red-500'>
        {
            certificates.map((i, idx) => {
                return <div >
                    <img src={i?.img} alt="certificate image" />
                    <p>i.title</p>
                </div>
            })
        } 
        </div>
    )
}

export default CertificateSlider; 