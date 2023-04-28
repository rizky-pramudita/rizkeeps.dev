import React from 'react'

const Quote = () => {
  return (
    <div className='flex flex-col bg-grey-card m-5 p-4 rounded-lg'>
        <h1 className='font-bold text-xl sm:text-2xl md:text-4xl text-white' >BRING IDEAS AND ANALYSIS TO BE A REAL IMPACT</h1>
        <div className='flex flex-col sm:flex-row text-white text-lg font-bold gap-4 pt-3'>
            <button className='bg-iris-80 rounded-lg py-1 px-2'>📤 MY RESUME</button>
            <button className='bg-fuschia-80 rounded-lg py-1 px-2'>🙌 CONTACT ME</button>
        </div>
    </div>
  )
}

export default Quote