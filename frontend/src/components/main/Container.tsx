"use client"
import React, { useState } from 'react'
import DevicesRegister from './DevicesRegister'
import CameraContainer from './CameraContainer'
import { useGetDevicesQuery } from '@/customhooks/devices/useGetDevices'

const Container = () => {
  const {data} = useGetDevicesQuery()
  return (
    <main className='overflow-y-auto p-10 h-full'>
      <DevicesRegister/>
      <CameraContainer data={data}/>
    </main>
  )
}

export default Container
