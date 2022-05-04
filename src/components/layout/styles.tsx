import styled from 'styled-components';

//-----------------------layaut-------------- 
export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  position: absolute;
  top: 67px;
  display: flex;
  justify-content: flex-start;
  flex: 1 1 auto;
  min-height: 80%;
  
`;



//-----------------------Footer-------------- 
export const Footer = styled.footer`
    margin-top: 16px;
    flex-shrink: 0;
    align-items: center;
    color: white;
    justify-content: space-between;
    width: 100%;
    height: 64px; 
    background-color: #ed4343;

    /* position: fixed;
    bottom: 0px; */
    >h3{
      text-align:center;
      padding: 20px 0 ;
    }
`;

//-----------------------Curso-------------- 


export const SidebarContainer = styled.div`
  background-color: #fff ;
  
`;


export const Contentcontainer = styled.div`
  width: 100%;
  overflow-y: auto;
  
  >.quest{
    
    margin: auto;
    display: flex;
    border: solid 1px #ccc;
    padding: 10px;
    width: 30%;

    >label{
      margin:0 20px;
      
    } 
  }
  >div{
    text-align: center; 
    margin-top: 20px;
    margin-bottom: 40px ;
  }
  >iframe{
     
     width: 100%;
     height: 85%;
  }
  >h1{
    
    text-align: center; 
  }
  >h2{
    text-align: center;
  }
  >h3{
    text-align: center;
  }
  >ol{
    margin-right: 10px;
    margin: 5px 15%;
  }
  >li{
    margin: 0 40px; 
  }
  >ul{
    margin: 20px 0;
    margin: 5px 15%;
  }
  >p{
    
    margin: 40px 15%;
    
    >img{
      display: flex;
      margin: 0 auto;
    }
    >strong{
      justify-content: center;
      display: flex;
    }
  }
 
`;

