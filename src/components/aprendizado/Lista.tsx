import React, { useEffect, useState } from 'react'
import {ItemLista} from './ItemLista'

import api from '../../services/api';
import { ICursos } from '../../model/IDatos';

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