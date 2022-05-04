import React from 'react'
import styled from 'styled-components';

const ButtonStyle = styled.button`
    padding: 10px;
    display: flex;
    width: 11rem ;
    align-items: center;
    background-color: #ed4343;
    color: #fff;
    border: solid 1px #fff;
    border-radius: 20px;
    cursor: pointer;
    margin: auto;
    
`;
interface props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: React.ReactElement
}
const Button = (props: props) => {
  const {children, onClick} = props
  return (
    <>
      <ButtonStyle onClick={onClick}>
        {children}
      </ButtonStyle>
    </>
  )
}

export default Button