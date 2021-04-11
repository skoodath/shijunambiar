import Head from 'next/head';
import LandingPage from './home';

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