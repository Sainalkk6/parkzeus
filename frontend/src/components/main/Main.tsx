import React from 'react'
import Navbar from './Navbar'
import Container from './Container'


const Main = () => {
  return (
    <div className='flex flex-col w-full md:w-3/4 lg:w-4/5 xl:w-5/6'>
      <Navbar/>
      <Container/>
    </div>
  )
}

export default Main
