import { CustomFormButtonType } from '@/types/type'
import React from 'react'

const CustomFormButton = ({handleClick,label,type}:CustomFormButtonType) => <button type={type} className='text-sm leading-5 text-white transition-colors duration-150 bg-[#E46A76] border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-punchPink px-8 py-2  h-fit mb-2 self-end' onClick={handleClick}>{label}</button>

export default CustomFormButton
