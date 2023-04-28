import React from 'react'

const ProjectShelf = () => {
  return (
    <div className=' bg-grey-card m-5 rounded-lg flex flex-col'>
        <div className='title flex flex-row items-center justify-between m-3'>
            <h1 className='text-lg text-white font-bold'>Portfolio, Blogs, Study Cases</h1>
            <a className='text-xs text-iris-60 underline'>Others &gt;&gt;&gt; </a>
        </div>
        <div className='card-container flex flex-row m-3 gap-4 items-center justify-between'>
            <div className='card w-[30%] h-[220px] outline outline-light-grey rounded-lg p-3'>
                <h1 className='text-xl font-extrabold text-white'>GAMIFICATION ON LEARNING EXPERIENCE</h1>
                <p className='text-xs text-fuschia-60 py-2'>A Development through learning gamification on Mobile Virtual Lab.</p>
                <p className='text-xs text text-iris-80'>March 2023</p>
                <a className='text-yellow-acc text-xs font-semibold' href='#'>Read More</a>
            </div>
            <div className='card w-[30%] h-[220px] outline outline-light-grey rounded-lg p-3'>
                <h1 className='text-xl font-extrabold text-white'>GAMIFICATION ON LEARNING EXPERIENCE</h1>
                <p className='text-xs text-fuschia-60 py-2'>A Development through learning gamification on Mobile Virtual Lab.</p>
                <p className='text-xs text text-iris-80'>March 2023</p>
                <a className='text-yellow-acc text-xs font-semibold' href='#'>Read More</a>
            </div>
            <div className='card w-[30%] h-[220px] outline outline-light-grey rounded-lg p-3'>
                <h1 className='text-xl font-extrabold text-white'>GAMIFICATION ON LEARNING EXPERIENCE</h1>
                <p className='text-xs text-fuschia-60 py-2'>A Development through learning gamification on Mobile Virtual Lab.</p>
                <p className='text-xs text text-iris-80'>March 2023</p>
                <a className='text-yellow-acc text-xs font-semibold' href='#'>Read More</a>
            </div>  
        </div>
    </div>
  )
}

export default ProjectShelf