import React, { useEffect, useState } from 'react'
import {ItemLista} from './ItemLista'

import api from '../../services/api';
import { ICursos } from '../../model/IDatos';
import styled from 'styled-components';
import { Titulos } from '../micro/Titulos';


export const P = styled.div`
  background-color: #e93636db;
  color:#fff;
  padding: 20px;
  border-style: none;
  width: 100%;
  text-align: center;
  border-bottom: solid 3px  #c9c9c9db;
  
`;

interface props{
  updateContenido: (slugCurso?: string | undefined) => Promise<string | void>
}
export const Lista = ({updateContenido}: props) => {

  const [datosDetalles, setDatosDetalles] = useState<ICursos | undefined>(undefined)

  const getList = async() => {
    const result = await api.get('desafio-mesalva-web').then(res => {
      console.log('Curso detalles')
      console.log(res.data)
      setDatosDetalles(res.data)
    }).catch( error => {
      console.log('algo salio mal')
      return 'error'
    })
    return result
  }
  useEffect(() => {
    getList()
  }, [])

  return (
    <>
      <P>
      <Titulos tamano={4}>
        <h2>Geografia</h2> 
      </Titulos>
      </P>
      {datosDetalles && 
      <>
          {datosDetalles.result.children.map((item, i) => 
                  <ItemLista data={item} key={i}
                            updateContenido={updateContenido}/> )}
      </> 
      }
    </>
  )
}