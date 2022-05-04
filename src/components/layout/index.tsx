import styled, { CSSProperties } from "styled-components";
import Header from "../header";
import { Container, Footer} from './styles';

interface props{
  children: React.ReactElement, 
  bFotter?: boolean
}
function Layout(props: props) {
  const  {children, bFotter = true} = props
  return (
    <>
        <Header ></Header>
       
        <div style={{height: "calc(100% - 150px)"}}>
            {children}
        </div>
        { bFotter &&
          <Footer>
            <h3>Footer</h3>
          </Footer>
        }
        
    </>
  );
}

export default Layout;

