import { type NextPage } from 'next';
import { ClientsSection } from '~/features/clients';
import { api } from '~/utils/api';

const Clients: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: 'from Clients' });

  return <ClientsSection />;
};

export default Clients;
