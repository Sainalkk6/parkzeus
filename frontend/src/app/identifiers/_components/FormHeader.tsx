import React from 'react'

const FormHeader = () => {
  return (
    <div className='flex space-x-2'>
      <button className='inline-block mr-2 text-[#005691] underline underline-offset-8'>Add Identifier</button>
      <button className='inline-block mr-2 text-gray-400'>Upload CSV file</button>
    </div>
  )
}

export default FormHeader
