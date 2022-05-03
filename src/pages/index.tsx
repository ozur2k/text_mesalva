import type { NextPage } from 'next'
import Image from 'next/image';

import Layout from "../components/layout";
import { Footer } from '../components/layout/styles';
import PagPrincipal from '../components/PagPrincipal'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
      </Layout>

      <PagPrincipal></PagPrincipal>
      <Footer> <p>asdas</p> </Footer>
    </>
  )
}

export default Home
