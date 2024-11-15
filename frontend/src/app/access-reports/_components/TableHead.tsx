import React from 'react'

const TableHead = ({label,width}:{label:string,width?:string}) => <label className={`pl-1 text-sm font-medium text-gray-900  py-3 text-left ${width ? width :"" }`}>{label}</label>

export default TableHead
