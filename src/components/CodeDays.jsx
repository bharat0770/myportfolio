import React from 'react'
import GitHubCalendar from 'react-github-calendar';
// const theme = {
//   light: ['#cce0ff', '#6699ff', '#3366ff', '#0033cc', '#001a66'],
//   dark:  ['#cccccc', '#3366ff', '#0044cc', '#002080', '#000d33'],
// };
const theme = {
  light: ['#cce0ff', '#6699ff', '#3366ff', '#0033cc', '#001a66'],
  dark:  ['#99bbff', '#3366ff', '#0044cc', '#002080', '#000d33'],
};


function CodeDays() {
  return (
    <div className='w-full flex flex-col items-center gap-20 justify-center  py-10' id='codeDays'>
      <h1 className='text-center text-3xl lg:text-4xl text-gray-600'>days I <span className='text-blue-500'>Coded</span></h1>

      <GitHubCalendar username="bharat0770" theme={theme} blockSize={15} blockRadius={10} />
    </div>
  )
}

export default CodeDays