import Head from 'next/head';
import LandingPage from './home';
import Footer from '../components/footer';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home: Shiju Nambiar</title>
      </Head>

      <main>
        <LandingPage />
      </main>
    </>
  )
}

export default Home;