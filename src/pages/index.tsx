import type { NextPage } from 'next'
import Layout from "../components/layout";
import PagPrincipal from '../components/PagPrincipal'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <PagPrincipal></PagPrincipal>
      </Layout>

    </>
  )
}

export default Home
