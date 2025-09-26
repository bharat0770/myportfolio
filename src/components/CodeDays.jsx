import React from 'react'
import GitHubCalendar from 'react-github-calendar';

function CodeDays() {
  return (
    <div className='w-full flex justify-center  py-10'>
<GitHubCalendar username="grubersjoe" theme={{
  light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
  dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
}} />  
</div>
)
}

export default CodeDays