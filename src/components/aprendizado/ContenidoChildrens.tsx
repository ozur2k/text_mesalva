import React from 'react'
import { IDataresultConteudo } from '../../model/IDatos'
import { Icons } from '../micro/Icons'
import { Titulos } from '../micro/Titulos'

interface props{
  type: string
  contenido: IDataresultConteudo
  index: number
}
export const ContenidoChildrens = (props: props) => {
  const {type, contenido, index} = props
  
  const elementos = Object.keys(contenido) 

  interface propsFormat{itemAtributo: string}
  const FormatContenido = (): JSX.Element =>{
    
    let result: React.ReactNode = <span></span>
    if (type == 'video') {
      const idVideo = contenido['link'].split('v=')[1]
      const linkVideo = 'https://www.youtube.com/embed/' + idVideo 
      result = <>
      <iframe width="97%" height="100%" key={'video-'+index}
        src={linkVideo}>
      </iframe>
      </>
      
    }
    if (type == 'text') {
      result = <>
        {contenido['html']}
        
      </>
    }
    if (type == 'pdf') {
      result = <Titulos tamano={4}>
        <>
          <a href={contenido['link']}>
            <Icons>picture_as_pdf</Icons>
          </a>
          
        </>
      </Titulos>
    }
    return result
  }
  return (
    <>
      
      <FormatContenido/>
      
    </>
  )
}
