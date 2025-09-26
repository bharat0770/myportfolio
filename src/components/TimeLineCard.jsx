import React, { useEffect } from 'react'
const TimeLine = [
    {
        content: "ajsklfjsklfsdafldfldfks",
        time: "2025"
    },
    {
        content: "ajsklfjsklfsdafldfldfks",
        time: "2025"
    }, {
        content: "ajsklfjsklfsdafldfldfks",
        time: "2025"
    }, {
        content: "ajsklfjsklfsdafldfldfks",
        time: "2025"
    }, {
        content: "ajsklfjsklfsdaf",
        time: "2025"
    }
]
function TimeLineCard() {
    useEffect(() => {
        const timeLineCards = document.querySelectorAll(".timeLineCard");
        const observer = new IntersectionObserver((entries) => {
            entries.map((i, idx) => {
                if (i.isIntersecting) {
                    i.target.classList.remove("opacity-0", "-translate-x-24");
                    i.target.classList.add("opacity-100", "translate-x-0");
                } else {
                    console.log("not intersecting ")
                    i.target.classList.add("opacity-0", "-translate-x-24");
                    i.target.classList.remove("opacity-100", "translate-x-0");
                    
                }
               
            })
        })

        timeLineCards.forEach((i) => observer.observe(i));
    }, []); 

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            {
                TimeLine.map((i, idx) => (
                    idx % 2 == 0 ?
                        <div className='w-full flex justify-between' key={idx}>
                            <div className='w-[50%]  flex flex-col justify-center items-center text-gray-800'>
                                {i.time}
                            </div>
                            <div className='w-1 m-1 bg-gray-700 rounded-lg '>
                                
                            </div>
                            <div className='timeLineCard w-[50%] rounded-sm min-h-[10rem] px-10 bg-white shadow-lg flex flex-col justify-center items-center opacity-0 -translate-x-24 transition-all duration-700 ease-out '>
                                {i.content}
                            </div>

                        </div>
                        :
                        <div className='w-full flex justify-between'>
                            <div className='timeLineCard w-[50%] rounded-sm min-h-[10rem] px-10 bg-white shadow-lg flex flex-col justify-center items-center opacity-0 -translate-x-24 transition-all duration-700 ease-out '>
                                {i.content}
                            </div>
                            <div className='w-1 m-1 bg-gray-700 rounded-lg '>
                                
                            </div>
                            <div className='w-[50%]  flex flex-col justify-center items-center text-gray-800'>
                                {i.time}
                            </div>
                        </div>

                ))
            }
        </div>
    )
}

export default TimeLineCard