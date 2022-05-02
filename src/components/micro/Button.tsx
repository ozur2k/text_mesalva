import React from 'react'
import styled from 'styled-components';

const ButtonStyle = styled.button`
    padding: 5px;
    display: flex;
    align-items: center;
    background-color: #ed4343;
    color: #fff;
    border: solid 1px #4c0707;
    border-radius: 4px;
    text-transform: capitalize;
    margin: 12px 0;
`;
const Button = ({children}: any) => {
  return (
    <>
      <ButtonStyle >
        {children}
      </ButtonStyle>
    </>
  )
}

export default Button