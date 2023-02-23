import React from 'react'

export default function CustomInput({onChange,placeholder,value,type,className}){
  return(
    <input placeholder={placeholder} className={className} onChange={onChange} value={value} type={type} />
  )
}