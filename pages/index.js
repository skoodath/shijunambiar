import Head from 'next/head';
import Brand from '../components/brand';
import Landing from '../components/home/landing';
import Menu from '../components/menu';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home: Shiju Nambiar</title>
      </Head>

      <main>
        <Brand />
        <Menu />
        <Landing />
      </main>
    </>
  )
}

export default Home;