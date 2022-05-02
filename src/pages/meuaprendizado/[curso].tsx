import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { ContenidoChildrens } from '../../components/aprendizado/ContenidoChildrens';
import { Lista } from '../../components/aprendizado/Lista'
import Contenido from '../../components/Contenido';
import Layout from '../../components/layout'

import { SidebarContainer, Contentcontainer } from '../../components/layout/styles';
import { Titulos } from '../../components/micro/Titulos';
import { ICursoConteudos } from '../../model/IDatos';

import api from '../../services/api';

const Curso = () => {
  const [datos, setDatos] = useState<ICursoConteudos | undefined>(undefined)
  
  const getList = async() => {
    const result = await api.get('desafio-mesalva-web/introducao-a-geografia').then(res => {
      console.log('Curso contenido')
      console.log(res.data)
      setDatos(res.data)
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
      <Layout> 
        <Contentcontainer>
          <Contenido>
            {datos && 
              <>
               {/* <Titulos tamano={2}> 
                {datos.result.title}
              </Titulos>
              <Titulos tamano={4} parrafo> 
                {datos.result.description}
              </Titulos> */}
              
              {datos.result.children.map(
                (item, i) => <ContenidoChildrens key={i} type={item.type} index={i} contenido={item.data}/>)}
              
              </>
            }
          </Contenido>
        </Contentcontainer>

        <SidebarContainer>
          <Lista />
        </SidebarContainer>
      </Layout> 
    </>
  )
}

export default Curso

/*
<img src="https://static.vakinha.com.br/uploads/vakinha/image/126396/IMG-20170212-WA0002.jpg?ims=700x410" /> 
*/