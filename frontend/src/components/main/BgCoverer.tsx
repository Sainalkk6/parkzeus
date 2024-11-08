import React, { SetStateAction } from 'react'

const BgCoverer = ({setShowModal}:{setShowModal:React.Dispatch<SetStateAction<boolean>>}) => <div onClick={()=>setShowModal(false)} className='bg-black opacity-20 fixed inset-0 z-20'/>

export default BgCoverer
