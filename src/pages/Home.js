import React from 'react'
import Quote from '../components/Quote'
import ProjectCount from '../components/ProjectCount'
import ProjectShelf from '../components/ProjectShelf'
import HeaderHome from '../components/HeaderHome'
import ProfileHome from '../components/ProfileHome'
import AboutMe from '../components/AboutMe'

export default function Home() {
  return (
    <div className='flex md:flex-row flex-col-reverse '>
      <div className='flex-grow-1 md:w-[50%] w-[100%]'>
        <Quote></Quote>
        <AboutMe></AboutMe>
      </div>
      <div className='flex-grow-1 md:w-[50%] w-[100%]'>
        <HeaderHome></HeaderHome>
        <ProfileHome></ProfileHome>
      </div>
    </div>
  )
}