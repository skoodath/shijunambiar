import Head from 'next/head';
import Landing from '../components/home/landing';
import Menu from '../components/menu';
import Work from '../components/work/work';
import About from '../components/about/about';

const Home = () => {
  return (
    <>
      <Head>
        <title>Shiju Nambiar: Home page and how to connect</title>
      </Head>

      <main>
        <Menu />
        <Landing />
        <About />
        <Work />
      </main>
    </>
  )
}

export default Home;