import React, { useEffect, useState } from 'react'
import {ItemLista} from './ItemLista'

import api from '../../services/api';
import { ICursos } from '../../model/IDatos';
import { Titulos } from '../../components/micro/Titulos';


export const Lista = () => {

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
          {datosDetalles.result.children.map((item, i) => <ItemLista type='ggg' title={item.title} slug='dd' key={i}/>)}
      </> 
      }
    </>
  )
}

/*
<Titulos tamano={5}> 
          {datosDetalles.result.type} 
          </Titulos>
          <Titulos tamano={4}> 
          {datosDetalles.result.title} 
          </Titulos>
       
        
        
        <Titulos tamano={5}> 
        {datosDetalles.result.type} 
        </Titulos>
        <Titulos tamano={4}> 
        {datosDetalles.result.title} 
        </Titulos>

*/