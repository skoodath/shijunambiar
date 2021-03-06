import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/home/header';
import Landing from '../components/home/landing';

const LandingPage = () => {
    return (
        <>
        <Head>
          <title>Home: Shiju Nambiar</title>
        </Head>
        <Header />
        <Landing />
        </>
    )
}

export default LandingPage;