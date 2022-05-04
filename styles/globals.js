import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @media (max-width: 600px){
    display:block;
  }
  }
  body {
    margin: 0;
    padding: 0;
    
  }
`;

export default GlobalStyle;