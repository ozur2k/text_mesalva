import Header from "../header";
import { Container } from './styles';

function Layout({ children }: any) {
  return (
    <>
    <Header/>

    <Container>
      { children }
    </Container>

  </>
  );
}

export default Layout;

{/* <Contentcontainer>
        { children }
      </Contentcontainer>

      <SidebarContainer>
        <Sidebar/>
      </SidebarContainer> */}