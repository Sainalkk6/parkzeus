import React from 'react'

const Navbar = () => {
  return (
    <div className='z-10 py-4 bg-white shadow-md'>
      <div className='flex gap-2 items-center justify-end'>
        <div className='container w-fit flex items-center justify-end h-full px-2 md:px-6 '>
          <button className='p-2 rounded-full bg-gray-200 focus:outline-none flex items-center justify-center mr-[3px]'>
            <img src="/user.svg" alt="" />
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
