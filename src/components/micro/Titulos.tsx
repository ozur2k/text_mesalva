import React from 'react'

interface props{
  tamano: 0|1|2|3|4|5
  children?: React.ReactNode;
  parrafo?: boolean
}

export const Titulos = ({children, tamano, parrafo}: props) => {
  const tamanhos = [6,3.75,3,2.2,1.5,1.25];
  const valTamano = parrafo? 1 : tamanhos[tamano];
  return (
    <div style={{fontSize: valTamano + 'rem'}}>
      {children}
    </div>
  )
}