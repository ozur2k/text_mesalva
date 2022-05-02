import React from 'react'
import { IDataresultConteudo } from '../../model/IDatos'
import { Icons } from '../micro/Icons'
import parse from 'html-react-parser'
import Button from '../micro/Button'
import { Titulos } from '../micro/Titulos'
interface props{
  type: string
  contenido: IDataresultConteudo
  index: number
}
export const ContenidoChildrens = (props: props) => {
  const {type, contenido, index} = props
  
  const FormatContenido = (): JSX.Element =>{
    
    let result: JSX.Element = <span></span>
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
        <Titulos tamano={2}> 
                {contenido['title']}
        </Titulos>
        {parse(contenido['html'])}
      </>
    }
    if (type == 'pdf') {
      result = 
        <>
          <Button>
            <Icons>picture_as_pdf</Icons>
            <a href={contenido['link']} target="_blank" rel="noopener noreferrer" 
                style={{paddingLeft: 5, textDecoration: 'none', color: '#fff'}} >
              ver Documento Pdf
            </a>
          </Button>
        </>
    }
    return result
  }
  return (
    <>
      <FormatContenido/>      
    </>
  )
}
