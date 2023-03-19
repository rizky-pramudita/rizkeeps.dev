import React from 'react'

const ProjectCount = () => {
  return (
    <div className="flex flex-row w-[40%] m-5 py-4 px-8 rounded-lg gap-12 justify-center" >
        <div className='flex flex-col bg-fuschia rounded-lg text-center w-[35%]'>
            <h1 className='text-9xl font-bold text-white py-4'>3</h1>
            <p className='text-md font-thin text-white'>Projects</p>
        </div>
        <div className='flex flex-col bg-fuschia rounded-lg text-center w-[35%]'>
            <h1 className='text-9xl font-bold text-white py-4'>10</h1>
            <p className='text-md font-thin text-white'>Study Cases</p>
        </div><div className='flex flex-col bg-fuschia rounded-lg text-center w-[35%]'>
            <h1 className='text-9xl font-bold text-white py-4'>3</h1>
            <p className='text-md font-thin text-white'>Certifications & Awards</p>
        </div>
    </div>
  )
}

export default ProjectCount