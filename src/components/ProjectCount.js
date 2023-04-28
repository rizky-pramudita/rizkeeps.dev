import React from 'react'

const ProjectCount = () => {
  return (
    <div className="flex flex-row m-5 rounded-lg gap-6 justify-between items-center" >
        <div className='flex flex-col bg-fuschia rounded-lg text-center w-[33%] py-4'>
            <h1 className='text-9xl font-bold text-white py-10'>3</h1>
            <p className='text-md font-thin text-white'>Projects</p>
        </div>
        <div className='flex flex-col bg-yellow-acc rounded-lg text-center w-[33%] py-4'>
            <h1 className='text-9xl font-bold text-white py-10'>10</h1>
            <p className='text-md font-thin text-white'>Study Cases</p>
        </div>
        <div className='flex flex-col bg-purple-p rounded-lg text-center w-[33%] py-4'>
            <h1 className='text-9xl font-bold text-white py-10'>3</h1>
            <p className='text-md font-thin text-white'>Certifications & Awards</p>
        </div>
    </div>
  )
}

export default ProjectCount