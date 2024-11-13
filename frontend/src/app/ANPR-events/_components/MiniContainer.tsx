import { EventCardMiniContainerPropType } from '@/types/type'
import React from 'react'

const MiniContainer = ({label,value}:EventCardMiniContainerPropType) => {
  return (
    <div className='flex gap-2 text-black items-center justify-between'>
        <p className="font-bold">{label}:</p>
        <span>{value}</span>
      
    </div>
  )
}

export default MiniContainer
