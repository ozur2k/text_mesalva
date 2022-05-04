import Image from "next/image";
import { Content, Logocontainer, OptionsContainer, Avatar, Nav  } from './styles';


function Header() {
  return (
    <>
      <Content>
 
        <Logocontainer href="http://localhost:3000/">
          <Image src='/img/logo-me-salva.svg' width={161} height={60}/>
        </Logocontainer>

        

          <OptionsContainer>
            <Avatar> 
              <Image src="/img/avatar-min.svg" width={45} height={45}/>
            </Avatar>

            <Nav>
              <Image src='/img/nav.svg' width={40} height={40}/>
            </Nav>
          
    
          </OptionsContainer>


        

      </Content>

    </>
  );
}

export default Header;