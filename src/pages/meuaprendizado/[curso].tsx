import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { ContenidoChildrens } from '../../components/aprendizado/ContenidoChildrens';
import { Lista } from '../../components/aprendizado/Lista'
import Contenido from '../../components/Contenido';
import Layout from '../../components/layout'

import { SidebarContainer, Contentcontainer } from '../../components/layout/styles';
import { ICursoConteudos } from '../../model/IDatos';

import api from '../../services/api';

const Curso = () => {
  const [datos, setDatos] = useState<ICursoConteudos | undefined>(undefined)
  
  const getList = async(slugCurso?: string) => {
    const urlSlug = slugCurso? slugCurso: 'introducao-a-geografia'
    const result = await api.get('desafio-mesalva-web/'+ urlSlug).then(res => {
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
              {datos.result.children.map(
                (item, i) => <ContenidoChildrens key={i} type={item.type} index={i} contenido={item.data}/>)}
              </>
            }
          </Contenido>
        </Contentcontainer>

        <SidebarContainer>
          <Lista updateContenido={getList}/>
        </SidebarContainer>
      </Layout> 
    </>
  )
}

export default Curso
