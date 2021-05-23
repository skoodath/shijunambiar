import Head from 'next/head';
import Brand from '../components/brand';
import Menu from '../components/globalmenu';
import WorkCard from '../components/work/workcard';

const Work = () => {

  return (
    <>
      <Head>
          <title>Projects and skills</title>
        </Head>
      <Menu />
      <WorkCard />
    </>
  )
}

export default Work;