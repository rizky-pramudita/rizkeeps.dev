import React from 'react'

const ProfileHome = () => {
  return (
    <div className='rounded-lg flex flex-row justify-between m-5'>
        <div className='bg-iris rounded-lg w-[50%] md:h-[22rem] h-[15rem] flex items-center justify-center'>
            <img src='https://res.cloudinary.com/dg4b8sell/image/upload/v1679290175/DSCF5352-removebg-preview_v5qpub.png' alt='Rizky Pramudita' className='bg-cover object-cover bg-center h-full w-full'/>
        </div>
          <div className='flex flex-col gap-4'>
            <div className='bg-grey-card rounded-lg flex flex-col p-4 gap-5 ml-[20px]'>
                <h1 className='text-white font-regular md:text-2xl text-md'>Rizky Pramudita Setyawan</h1>
                <h1>
                    <span className='text-white font-semibold md:text-2xl sm:text-xl text-md'>Digital Product</span>
                    <span className='text-white font-semibold md:text-2xl sm:text-xl text-md'> Enthusiast</span>
                </h1>
            </div>
            <div className='grid grid-cols-4 md:py-1 md:px-1 py-2 px-2 bg-grey-card rounded-lg p-4 gap-5 ml-[20px]'>
              <button className=''>
                <img src='https://res.cloudinary.com/dg4b8sell/image/upload/v1680164096/rizkeeps/Vector_ehzki7.png' alt='Rizky-Github' className='bg-cover object-cover bg-center w-[35px]'/>
              </button>
              <button className=''>
                <img src='https://res.cloudinary.com/dg4b8sell/image/upload/v1680164096/rizkeeps/Vector-1_spce0r.png' alt='Rizky-Github' className='bg-cover object-cover bg-center w-[35px]'/>
              </button>
              <button className=''>
                <img src='https://res.cloudinary.com/dg4b8sell/image/upload/v1680164096/rizkeeps/Vector-2_jrr5dj.png' alt='Rizky-Github' className='bg-cover object-cover bg-center w-[35px]'/>
              </button>
              <button className=''>
                <img src='https://res.cloudinary.com/dg4b8sell/image/upload/v1680164097/rizkeeps/Vector-3_nj1hc4.png' alt='Rizky-Github' className='bg-cover object-cover bg-center w-[35px]'/>
              </button>
            </div>
          </div>
    </div>
  )
}

export default ProfileHome