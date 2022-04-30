import Header from "../header";
import Sidebar from "../Sidebar";
import { Container, SidebarContainer, Contentcontainer } from './styles';

function Layout({ children }) {
  return (
    <>
    <Header> </Header>

    <Container>

      <Contentcontainer>
        { children }
      </Contentcontainer>

      <SidebarContainer>
        <Sidebar>
          
        </Sidebar>
      </SidebarContainer>

    </Container>

  </>
  );
}

export default Layout;