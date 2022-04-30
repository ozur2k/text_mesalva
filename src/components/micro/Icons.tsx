import React from 'react'
import 'material-icons/iconfont/material-icons.css';
export const Icons = ({children}: any) => {
  return (
    <>
      <span className="material-icons">
        {children}  
      </span>   
    </>
  )
}
