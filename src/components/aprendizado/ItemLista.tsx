import React from 'react'
import styled from 'styled-components';
import { resultChildren } from '../../model/IDatos';
import { Icons } from '../micro/Icons';

const Conteiner = styled.div`
  display: flex;
  h3{
    margin: 8px 0;
  }
  h6{
    margin: 8px 0; 
  }
`;

const ConteIcons = styled.div`
  margin-top: 10px ;
  margin-right:  5px;
  margin-bottom: 8px;
`;

interface props{
  updateContenido: (slugCurso?: string | undefined) => Promise<string | void>
  data: resultChildren
}
export const ItemLista = ({data, updateContenido}:props) => {
  const {type, title} = data
  return (
    <>
      <Conteiner onClick={() => updateContenido(data.slug)}>
        <ConteIcons>
          <Icons> 
          play_circle_filled
          </Icons>
        </ConteIcons>
        <div>
          {title && 
          <h3> {title}</h3>
          }
          
          <h6>
            <i>play</i>
            <b>5m</b>
          </h6>
        </div>
      </Conteiner>
    </>
  )
}
