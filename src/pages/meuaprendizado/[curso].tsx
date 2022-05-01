import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Lista } from '../../components/aprendizado/Lista'
import Contenido from '../../components/Contenido';
import Layout from '../../components/layout'

import { SidebarContainer, Contentcontainer } from '../../components/layout/styles';
import { Titulos } from '../../components/micro/Titulos';
import { IDatos } from '../../model/IDatos';

import api from '../../services/api';

const Curso = () => {
  const [datos, setDatos] = useState<IDatos | undefined>(undefined)
  
  const getList = async() => {
    const result = await api.get('desafio-mesalva-web').then(res => {
      //console.log(res.data)
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
          <Contenido  >
            {datos && 
              <>
               <Titulos tamano={2}> 
                {datos.result.title}
              </Titulos>
              <Titulos tamano={4} parrafo> 
                {datos.result.description}
              </Titulos>
              <img src="https://static.vakinha.com.br/uploads/vakinha/image/126396/IMG-20170212-WA0002.jpg?ims=700x410" /> 
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

const result = axios.get('https://bff-qa.mesalva.com/json/pages/desafio-mesalva-web')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  }
  );
*/