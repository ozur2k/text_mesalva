import Image from "next/image";
import { Content, Logocontainer, Conter, OptionsContainer, Avatar, Nav  } from './styles';


function Header() {
  return (
    <>
      <Content>

        <Logocontainer>
          <Image src='/img/logo-me-salva.svg' width={161} height={60}/>
        </Logocontainer>

        <Conter>

          <OptionsContainer>
            <Avatar> 
              <Image src="/img/avatar-min.svg" width={45} height={45}/>
            </Avatar>

            <Nav>
              <Image src='/img/nav.svg' width={31} height={31}/>
            </Nav>
          
    
          </OptionsContainer>


        </Conter>

      </Content>

    </>
  );
}

export default Header;