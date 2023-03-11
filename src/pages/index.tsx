import { type NextPage } from 'next';
import { DashboardSection } from '~/features/dashboard';
import { api } from '~/utils/api';

const Dashboard: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: 'from Dashboard' });

  return <DashboardSection />;
};

export default Dashboard;
