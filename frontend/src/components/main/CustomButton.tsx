import { CustomButtonPropType } from '@/types/type'
import React from 'react'

const CustomButton = ({handleClick,label}:CustomButtonPropType) => <button className='pl-4 py-2 uppercase text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left' onClick={handleClick}>{label}</button>

export default CustomButton
