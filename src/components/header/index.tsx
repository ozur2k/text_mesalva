import Image from "next/image";
import Link from "next/link";
import { Content, Logocontainer, OptionsContainer, Avatar, Nav  } from './styles';


function Header() {
  return (
    <>
      <Content>

        <Logocontainer>
          <Link href='/' passHref> 
           <Image src='/img/logo-me-salva.svg' width={161} height={60}/>
          </Link>
          
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