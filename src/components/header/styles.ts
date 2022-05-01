import styled from 'styled-components';

export const Content = styled.div`
    
    -webkit-box-align: center;
    align-items: center;
    box-shadow: rgb(0 0 0 / 13%) 0px 4px 8px;
    color: white;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    left: 0px;
    width: 100%;
    height: 64px;
    position: fixed;
    top: 0px;
    z-index: 19;  

    padding: 10px ; 
    background-color: #ed4343;
`;

export const Conter = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; 
`;
export const Logocontainer = styled.div`
    display: block;
    cursor: pointer;
`;
export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
export const Avatar = styled.div`
  flex: 0 0 40px;
  margin-left:20px;
  position: relative;
  cursor: pointer;
`;

export const Nav = styled.div`
  flex: 0 0 40px;
  margin-left:10px;
  position: relative;
  cursor: pointer;
`;