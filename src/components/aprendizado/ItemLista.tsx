import React from 'react'
import styled from 'styled-components';
import { ICursos, resultChildren } from '../../model/IDatos';
import { Icons } from '../micro/Icons';
import { Lista } from './Lista';

const Conteiner = styled.button`
  display: flex;
  width: 100%;
  background-color: #fff; 
  border: none;
  
  h3{
    margin: 8px 0;
    text-align: left
    
  }
  h6{
    margin: 8px 0; 
    text-align: left;
  }
  :hover{
    background-color: #e0e0e0  ;
    cursor: pointer;
  }
  :focus{
    background-color: #e0e0e0;
  }
`;

const ConteIcons = styled.div`
  margin-top: 10px ;
  margin-right:  10px;
  margin-left:  10px;
  margin-bottom: 8px;
`;

interface props{
  updateContenido: (slugCurso?: string | undefined) => Promise<string | void>
  data: resultChildren
  index: number
  updateCookie: (itemLista: resultChildren, index: number) => void
}
export const ItemLista = ({data, updateContenido, index, updateCookie}:props) => {
  const {type, title} = data

  const controlClick = () => {
    updateContenido(data.slug)
    updateCookie(data, index)
  }
  return (
    <>
      <Conteiner onClick={() => controlClick()}>
        <ConteIcons>
          <Icons color={data.asistido?'#f14141':'#978c8c' }> 
            {(data.type == 'text')? 'description':
             (data.type == 'video')? 'play_circle_filled':
             'quiz'
            }
          </Icons>
        </ConteIcons>
        <div>
          {title && 
          <h3> {title}</h3>
          }
          
          <h6>
            <i>play </i>
            <b>5m</b>
          </h6>
        </div>
        <br />
      </Conteiner>
    </>
  )
}
