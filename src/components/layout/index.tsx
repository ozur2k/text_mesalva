import Header from "../header";
import Sidebar from "../Sidebar";
import { Container, SidebarContainer, Contentcontainer } from './styles';

function Layout({ children }: any) {
  return (
    <>
    <Header/>

    <Container>
      { children }
      {/* <Contentcontainer>
        { children }
      </Contentcontainer>

      <SidebarContainer>
        <Sidebar/>
      </SidebarContainer> */}

    </Container>

  </>
  );
}

export default Layout;