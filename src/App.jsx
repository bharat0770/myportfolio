import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import IntroCard from './components/IntroCard'
import AboutMeCard from './components/AboutMeCard'
import TimeLineCard from './components/TimeLineCard'
import SkillsCard from './components/SkillsCard'
import Projects from './components/Projects'
import Footer from './components/Footer'
import CodeDays from './components/CodeDays'


function App() {

  return (
    <>
      <div className='min-h-screen w-full overflow-hidden flex flex-col items-center lg:gap-40 md:px-10 2xl:px-80 px-5 gap-10'>

        {/* navbar */}  
        <Navbar />
        {/* intro card*/}
        <IntroCard />
        {/* about me */}
        <AboutMeCard />
        {/* my timeline  */}
        <TimeLineCard />
        {/* skills*/}        
        <SkillsCard />
        {/* days i code  */}

        <CodeDays />
        {/* projects */}
        <Projects />
        {/* get in touch */}
        <Footer />
  
      </div>

    </>
  )
}

export default App


