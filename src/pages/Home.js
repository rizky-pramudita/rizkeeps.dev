import React from 'react'
import Quote from '../components/Quote'
import HeaderHome from '../components/HeaderHome'
import ProfileHome from '../components/ProfileHome'
import AboutMe from '../components/AboutMe'

export default function Home() {
  return (
    <div className='flex flex-col md:w-[50%] mx-auto'>
      <HeaderHome></HeaderHome>
      <ProfileHome></ProfileHome>
      <Quote></Quote>
      <AboutMe></AboutMe>
    </div>
  )
}