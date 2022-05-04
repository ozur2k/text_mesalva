import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContenidoChildrens } from '../../components/aprendizado/ContenidoChildrens';
import { Lista } from '../../components/aprendizado/Lista'
import Layout from '../../components/layout'

import { SidebarContainer, Contentcontainer, Footer } from '../../components/layout/styles';
import { ICursoConteudos } from '../../model/IDatos';

import api from '../../services/api';


const Body = styled.div`
  height: 0;
  margin: 0;
  
  
`;
const Contenedor = styled.div`
    display: flex;
    flex-direction: row ;
    
`;


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
     
      <Body>  
      <Layout></Layout> 
        <Contenedor>
          <Contentcontainer>
              
              {datos && 
                <>
                {datos.result.children.map(
                  (item, i) => <ContenidoChildrens key={i} type={item.type} index={i} contenido={item.data}/>)}
                <br />
                </>
              }
               <Footer><h3>Footer</h3></Footer>
          </Contentcontainer>
          
          <SidebarContainer>
            <Lista updateContenido={getList}/>
            
          </SidebarContainer>
          
          
        </Contenedor>
        
      </Body>
      
    </>
  )
}

export default Curso;
