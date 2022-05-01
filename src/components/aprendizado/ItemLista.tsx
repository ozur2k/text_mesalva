import React from 'react'
import styled from 'styled-components';
import { resultChildrenDetalles } from '../../model/IDatos';
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

export const ItemLista = ({type, title}:resultChildrenDetalles) => {

  return (
    <>
      <Conteiner>
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
