import React from 'react'
import 'material-icons/iconfont/material-icons.css';
interface props{
  children: React.ReactNode
  color: string
}
export const Icons = ({children, color}: props) => {
  return (
    <>
      <span className="material-icons" style={{color: color}}>
        {children}  
      </span>   
    </>
  )
}
