import React from 'react'
import styled from 'styled-components';


interface props{
  tamano: 0|1|2|3|4|5
  children?: React.ReactNode;
  parrafo?: boolean
}
export const Titulos = ({children, tamano, parrafo}: props) => {
  const tamanhos = [6,3.75,3,2.2,1.5,1.25]

  const valTamano = parrafo? 1 : tamanhos[tamano];
  const Conteiner = styled.div`
    font-size:  ${valTamano}rem
  `;
  
  return (
    <Conteiner>
      {children}
    </Conteiner>
  )
}

//${(parrafo? 1rem: ${tamanhos[tamano]} rem}) ;
/*(${parrafo}) => {
  ${parrafo}? return 1rem:  ${tamanhos[tamano]}rem
    }
*/