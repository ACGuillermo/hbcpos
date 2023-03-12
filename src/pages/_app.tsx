import { type AppType } from 'next/app';
import { MainLayout } from '~/components/Layout';

import { api } from '~/utils/api';
import { ShoppingCartProvider } from '~/stores/ShoppingCart';

import '~/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <ShoppingCartProvider>
        <Component {...pageProps} />
      </ShoppingCartProvider>
    </MainLayout>
  );
};

export default api.withTRPC(MyApp);
