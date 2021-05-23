import Head from 'next/head';
import Brand from '../components/brand';
import Landing from '../components/home/landing';
import Menu from '../components/menu';

const Home = () => {
  return (
    <>
      <Head>
        <title>Shiju Nambiar: Home page and how to connect</title>
      </Head>

      <main>
        <Menu />
        <Landing />
      </main>
    </>
  )
}

export default Home;