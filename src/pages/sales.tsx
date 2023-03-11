import { type NextPage } from 'next';

import { api } from '~/utils/api';

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: 'from Sales' });

  return <>{hello.data && <h1>{hello.data.greeting}</h1>}</>;
};

export default Home;
