import React from 'react'
import { Lista } from '../../components/aprendizado/Lista'
import Contenido from '../../components/Contenido';
import Layout from '../../components/layout'

import { SidebarContainer, Contentcontainer } from '../../components/layout/styles';
import { Titulos } from '../../components/micro/Titulos';

function Curso() {
  return (
    <>
      <Layout> 
        <Contentcontainer>
          <Contenido titulo='Titulo' descricion='juan' >
            <>
              <Titulos tamano={2}> 
                Titulo del documento
              </Titulos>
              <Titulos tamano={4} parrafo> 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste rem magni cum itaque doloremque incidunt fugiat alias temporibus autem, consectetur impedit fugit commodi, minima, numquam totam nihil placeat a repudiandae? 
              </Titulos>

            </>
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