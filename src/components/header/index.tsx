import Image from "next/image";
import { Container, Logocontainer, Conter, OptionsContainer, Avatar, Nav  } from './styles';

import Search from '../micro/inputs/search'

function Header() {
  return (
    <>
      <Container>

        <Logocontainer>
          <Image src='/img/logo-me-salva.svg' width={161} height={60}/>
        </Logocontainer>

        <Conter>

          <OptionsContainer>
            <Avatar> 
              <img src="	https://cdn.mesalva.com/img/user/anonymous/avatar-min.svg" width={45} height={45} />
            </Avatar>

            <Nav>
              <Image src='/img/nav.svg' width={31} height={31} />
            </Nav>
          
            <Search/>

          </OptionsContainer>


        </Conter>

      </Container>

    </>
  );
}

export default Header;