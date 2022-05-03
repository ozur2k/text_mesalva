import React, {useState} from 'react'
import { IDataresultConteudo, IOpcRespuestas } from '../../model/IDatos'
import { Icons } from '../micro/Icons'
import parse from 'html-react-parser'
import Button from '../micro/Button'
import { Titulos } from '../micro/Titulos'
interface props{
  type: string
  contenido: IDataresultConteudo
  index: number
}

const OpcRespuestasPreguntas = ({text, isCorrect, opcSelecCorrecta}:IOpcRespuestas) => {

  return (
    <>
      <div className='quest'>
        <input type="checkbox" name={'radio-opc'} id={text}  value={text}
              onClick={() => opcSelecCorrecta?opcSelecCorrecta(isCorrect): undefined}/>
        <label>{text}</label>
      </div>
    </>
  )
}

export const ContenidoChildrens = (props: props) => {
  const {type, contenido, index} = props
  const [mostrarCorreccion, setMostrarCorreccion] = useState(false)
  const FormatContenido = (): JSX.Element =>{
    let result: JSX.Element = <span></span>
    if (type == 'video') {
      const idVideo = contenido['link'].split('v=')[1]
      const linkVideo = 'https://www.youtube.com/embed/' + idVideo 
      result = <>
      <iframe width="100%" height="100%" key={'video-'+index}
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
    if (type == 'exercise') {
      const opcSelecCorrecta = (isCorrect: boolean): boolean => {
        setMostrarCorreccion(isCorrect)
        //alert('holaaaa')
        return isCorrect
      }
      result = <>
        {parse(contenido['question'])}
        {contenido['answers']?.map((item, i) => 
                <OpcRespuestasPreguntas key={i} text={item.text} isCorrect={item.isCorrect} 
                opcSelecCorrecta={opcSelecCorrecta}/>)}
        { mostrarCorreccion &&
          <>
          {parse(contenido['correction'])}
          </>
        }
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




