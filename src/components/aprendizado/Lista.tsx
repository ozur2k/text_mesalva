import React, { useEffect, useState } from 'react'
import {ItemLista} from './ItemLista'

import api from '../../services/api';
import { ICursos, resultChildren } from '../../model/IDatos';
import styled from 'styled-components';
import { Titulos } from '../micro/Titulos';

import { parseCookies, setCookie } from 'nookies'

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
  const dataCookies = parseCookies()

  const [datosDetalles, setDatosDetalles] = useState<ICursos | undefined>(undefined)
  
  const getList = async() => {
    const result = await api.get('desafio-mesalva-web').then(res => {
      console.log('Curso detalles')
      console.log(res.data)

      let tempData:ICursos = {...res.data}  
      tempData.result.children[0].asistido = true

      setDatosDetalles(tempData)
      guardarCookie(tempData)


    }).catch( error => {
      console.log('algo salio mal')
      return 'error'
    })
    return result
  }
  useEffect(() => {
    const { 'userProgreso': userProgreso } = dataCookies 
    if (!userProgreso) {
      getList()
    }else{
      setDatosDetalles(JSON.parse(userProgreso))
    }
  }, [])

  const guardarCookie = (data: any) => {
  
      setCookie(null, 'userProgreso', JSON.stringify(data), {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
  
  }

  const updateCookie = (itemLista: resultChildren, index: number) => {
    const { 'userProgreso': userProgreso } = dataCookies
    if (datosDetalles && !itemLista.asistido && userProgreso) {
      let tempData:ICursos = {...datosDetalles}  
      tempData.result.children[index] = itemLista
      tempData.result.children[index]['asistido'] = true
      guardarCookie(tempData)

      setDatosDetalles(tempData)
    }
  }

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
                  <ItemLista data={item} key={i} index={i} updateCookie={updateCookie}
                            updateContenido={updateContenido}/> )}
      </> 
      }
    </>
  )
}