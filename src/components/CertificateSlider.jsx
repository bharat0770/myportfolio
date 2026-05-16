import React, { useEffect, useState } from 'react'
import myProfile from "../assets/myProfile5.jpeg";
import myProfile2 from "../assets/myProfile2.png";
import geminiCertificate from "../assets/geminicert.png";
import RoboitcsCertificate from "../assets/Robotics_Ai.jpeg";
import BcaCertificate from "../assets/BCA_grad_degree.jpeg";
import FirstRankCertificate from "../assets/BCA_1st_Rank.jpeg";
import ClassRep from "../assets/BCA_Class_Rep.jpeg";

import { TiltEffect } from './HoverMe';


const certificates = [
    { title: "gemini genrative ai", img: geminiCertificate },
    { title: "robotics", img: RoboitcsCertificate },
    { title: "Bachelors in Computer Application (BCA)", img: BcaCertificate },
    { title: "bca 1st Rank", img: FirstRankCertificate },
    { title: "class representative", img: ClassRep },
]
const CertificateSlider = () => {
    const [up, setUp] = useState(0);
    const list = [];
    for (let i = 0; i < certificates.length; i++) {
        list.push(i);
    }
    const [cnt, setCnt] = useState(false);
    useEffect(() => {
        if (!cnt){
            const intervalId = setInterval(() => {
                setUp((prev) => (prev + 1) % certificates.length);
            }, (1000));
            return () => {
                clearInterval(intervalId);
            }
        }
    }, [cnt]);
    return (

        <div className='w-full'>
            <h1 className='text-center text-3xl lg:text-4xl text-gray-600 mb-5'>My <span className='text-blue-500'>Certifications</span></h1>
            <div className='w-full h-80 md:h-120  flex justify-center items-center relative '>
                {
                    certificates.map((i, idx) => {
                        return <div key={idx} onClick={() => setUp(() => (up + 1) % certificates.length)} className={`rounded-lg flex-col h-[100%] w-[100%] transition-all duration-500 
                        ease-in-out absolute bg-gray-100 py-5 ${up == idx ? "scale-100 opacity-100 translate-x-0 z-50" : "translate-x-5 opacity-0 scale-95 z-10"}`}>
                            <img className='object-cover select-none rounded-md max-w-full max-h-[90%] m-auto' onClick={(e) => {
                                e.stopPropagation();
                                setCnt((prev) => !prev);
                                
                            }} src={i?.img} alt="certificate image" />
                            <p className='text-center select-none md:text-xl  text-sm capitalize my-3'>{i.title}</p>
                        </div>
                    })
                }
            </div>
            <div className='w-full text-center flex items-center justify-center'>{
                list.map((i, idx) => {
                    return <div key={idx} className={`p-1 md:p-1.5 m-1  rounded-full ${up == idx ? "bg-blue-700" : "bg-blue-300"}`}></div>
                })
            }</div>
        </div>
    )
}


export default CertificateSlider; 