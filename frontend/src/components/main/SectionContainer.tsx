import React, { ReactNode } from 'react'

const SectionContainer = ({children}:{children:ReactNode}) => {
  return (
    <div className='bg-white p-5 rounded-md shadow-sm border mt-4'>
      {children}
    </div>
  )
}

export default SectionContainer
