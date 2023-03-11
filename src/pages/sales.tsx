import { type NextPage } from 'next';
import { SalesSection } from '~/features/sales';
import { api } from '~/utils/api';

const Sales: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: 'from Sales' });

  return <SalesSection />;
};

export default Sales;
