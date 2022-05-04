import styled from 'styled-components';

export const Globals = styled.div`
  box-sizing: border-box;
`;

export const Header = styled.div`

  >img{
    width: 100%;
    height: 100%;
    max-height: 581px;
  }
  
`;

export const ListCursos = styled.div`
  
  display: grid;
  gap: 0.5rem;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  
  
  
`;

export const Curso = styled.div`

  overflow: hidden;
  padding: 1rem;
  border-radius: 0.3rem;
  box-shadow: 0 0.2rem 0.3rem rgba(0,0,0,0.4);
  color: #333;
  margin: 10px;
  
  >span {
    color: gray;
    background-color: red ;
  }
  >img{
    width: 100%;
    height: 60%;
  
  }
  >h3{
    text-align: center;
    margin: 10px 0;
  }
  
`;