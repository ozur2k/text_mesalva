import React from 'react'
import styled from 'styled-components';
import { Icons } from './Icons';

export const Curso = styled.div`
  overflow: hidden;
  padding: 1rem;
  border-radius: 0.3rem;
  box-shadow: 0 0.2rem 0.3rem rgba(0,0,0,0.4);
  color: #333;
  margin: 10px;
  >img{
    width: 100%;
    height: 60%;
  }
  >h3{
    text-align: center;
    margin: 10px 0;
  }
`;
export interface ICard{
  titulo: string
  urlImg: string
  descrip: string
  link?: string
  Bloqueado: boolean
}
const Card = (props: ICard) => {
  const {titulo, urlImg, descrip, Bloqueado, link} = props
  return (
    <>
      <a href={Bloqueado?undefined:link} style={{textDecoration: 'none'}}>
        <Curso>
          <img src="/img/maxresdefault.jpg" alt="" />
          <h3>{titulo}</h3>
            <p>{descrip}
            </p>
            <Icons color={Bloqueado? 'red': 'green'}>{Bloqueado? 'lock': 'lock_open'}</Icons>
        </Curso> 
      </a>
      
    </>
  )
}

export default Card