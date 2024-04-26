
import { useEffect } from 'react';
import { NextPage } from 'next';

const Home: NextPage = () => {
  // Added so home is not empty
  
  useEffect(() => {
  
  }, []);
  return <>
  <h2>Home Container</h2>
  </>;
};
export const getServerSideProps = async () => {
  return { props: {} };
};

export default Home;