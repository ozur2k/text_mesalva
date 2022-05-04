import styled, { CSSProperties } from "styled-components";
import Header from "../header";
import { Icons } from "../micro/Icons";
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
            <p>Copyright @2022 | Me Salva! Cursos e Consultorias Ltda.</p>
                <fieldset> </fieldset>
                <a>Home</a>
                <a>Ajuda</a>
                <a>Planos</a>
                <a>Termos de Uso</a>
                <Icons color={'white'}>whatsapp</Icons>
          </Footer>
        }
        
    </>
  );
}

export default Layout;

