import React, { useEffect } from 'react'
let TimeLine = [

    {
        time: "june 2021",
        content: "started learning basics of webDev along with college curriculum"
    },
    {
        time: "march 2022",
        content: "completed hsc in commerce scored 89%"
    },
    {
        time: "august 2022",
        content: " enrolled in BCA (Bachelors in Computer Application)"
    },
    {
        time: "june 2025",
        content: "completed BCA scored 9.034 cgpa"
    },
    {
        time: "july 2025",
        content: "started working under an experienced developer on a client project"
    }
].reverse();
function TimeLineCard() {
    useEffect(() => {
        const timeLineCards = document.querySelectorAll(".timeLineCard");
        const observer = new IntersectionObserver((entries) => {
            entries.map((i, idx) => {
                if (i.isIntersecting) {
                    i.target.classList.remove("opacity-0", "-translate-x-24");
                    i.target.classList.add("opacity-100", "translate-x-0");
                } else {
                    i.target.classList.add("opacity-0", "-translate-x-24");
                    i.target.classList.remove("opacity-100", "translate-x-0");

                }

            })
        })

        timeLineCards.forEach((i) => observer.observe(i));
    }, []);

    return (
        <div className='w-full flex flex-col justify-center  gap-20
        items-center text-xl'>
            <h1 className='text-center text-2xl lg:text-4xl text-gray-600'>My Learning <span className='text-blue-500'>Journey</span></h1>

            {
                TimeLine.map((i, idx) => (
                    idx % 2 == 0 ?
                        <div className='w-full flex justify-between' key={idx}>
                            <div className='w-[50%] text-sm lg:text-2xl flex flex-col justify-center items-center text-gray-400 font-bold'>
                                {i.time}
                            </div>

                            <div className='w-1 m-1 bg-gray-700 rounded-lg '>

                            </div>

                            <div className='relative text-sm lg:text-2xl px-2 timeLineCard w-[50%]  lg:px-[8rem]  z-20 rounded-sm min-h-[10rem] bg-white shadow-lg flex flex-col justify-center items-center opacity-0 -translate-x-24 transition-all duration-700 ease-out group'>
                                {i.content}
                                <div className={`absolute bg-green-500 w-10 h-10 top-0 right-0 z-10 rounded-md [clip-path:polygon(0_0,_100%_100%,_100%_0)] transition-all overflow-hidden duration-300 ease-in-out group-hover:top-0 group-hover:size-40 group-hover:[clip-path:circle(50%_at_82%_12%)]`}></div>
                            </div>
                        </div>
                        :
                        <div key={idx} className='w-full flex justify-between'>

                            <div className='relative text-sm lg:text-2xl px-2 timeLineCard w-[50%] rounded-sm min-h-[10rem] lg:px-[8rem] bg-white shadow-lg flex flex-col justify-center items-center opacity-0 -translate-x-24 group transition-all duration-700 ease-out '>
                                {i.content}
                                <div className={`absolute bg-pink-500 w-10 h-10 top-0 left-0 z-10 rounded-md  [clip-path:polygon(0%_0%,_0%_93%,_100%_0%)] transition-all overflow-hidden duration-300 ease-in-out group-hover:top-0 group-hover:size-40 group-hover:[clip-path:circle(50%_at_8%_12%)]`} style={{ clipPath: '' }}></div>

                                {/* <div className={`absolute bg-pink-500 w-10 h-10 top-0 left-0 z-10 rounded-md   [clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_50%_70%,_0_100%)]`}  style={{ clipPath: '' }}></div> */}

                            </div>


                            <div className='w-1 m-1 bg-gray-700 rounded-lg '>

                            </div>
                            <div className='w-[50%] text-sm lg:text-2xl  flex flex-col justify-center items-center text-gray-400 font-bold'>
                                {i.time}
                            </div>
                        </div>

                ))
            }
        </div >
    )
}

export default TimeLineCard



