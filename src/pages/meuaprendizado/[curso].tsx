import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ContenidoChildrens } from '../../components/aprendizado/ContenidoChildrens';
import { Lista } from '../../components/aprendizado/Lista'
import Layout from '../../components/layout'

import { SidebarContainer, Contentcontainer, Footer } from '../../components/layout/styles';
import { Icons } from '../../components/micro/Icons';
import { ICursoConteudos } from '../../model/IDatos';

import api from '../../services/api';

const Body = styled.div`
  height: 0;
  margin: 0;
`;
const Contenedor = styled.div`
    display: flex;
    flex-direction: row ; 
    @media(max-width: 800px) {
    flex-direction: column;
   // position: relative;
  }
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
      <Layout bFotter={false}>
        <>
        <Contenedor>
          <Contentcontainer>
              
              {datos && 
                <>
                {datos.result.children.map(
                  (item, i) => <ContenidoChildrens key={i} type={item.type} index={i} contenido={item.data}/>)}
                <br />
                </>
              }
               
          </Contentcontainer>
          
          <SidebarContainer>
            <Lista updateContenido={getList}/>
            
          </SidebarContainer>
          
        </Contenedor>
        <Footer>
               <p>Copyright @2022 | Me Salva! Cursos e Consultorias Ltda.</p>
                <fieldset> </fieldset>
                <a>Home</a>
                <a>Ajuda</a>
                <a>Planos</a>
                <a>Termos de Uso</a>
                <Icons color={'white'}>whatsapp</Icons>
               </Footer>
        
        </>
        </Layout>   
      </Body>
      
    </>
  )
}

export default Curso;
