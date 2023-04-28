import React from 'react'

const AboutMe = () => {
  return (
    <div className='bg-grey-card rounded-lg m-5 p-5 flex flex-col gap-4'>
        <h1 className='text-white font-extrabold text-2xl'>About Me</h1>
        <p className='text-white font-medium text-justify'>I am a self-driven student who puts the most interest in Digital Product design and development. I believe that any ideation and development based on empathy and concern supported by detailed data-driven strategic thinking is a start of a big impact. This idea is something I always bring to any project I have been working for.</p>
        <div className='skillTable grid grid-cols-3 w-[100%] text-xs font-bold text-white gap-4'>
            <button className='bg-iris rounded-lg py-1 px-1'>PRODUCT ANALYSIS</button>
            <button className='bg-blue rounded-lg py-1 px-1'>PRODUCT MANAGEMENT</button>
            <button className='bg-pale-orange rounded-lg py-1 px-1'>SOFTWARE ENGINEERING</button>
            <button className='bg-red rounded-lg py-1 px-1'>UI/UX DESIGN</button>
            <button className='bg-pink-acc rounded-lg py-1 px-1'>UX</button>
        </div>
    </div>
  )
}

export default AboutMe