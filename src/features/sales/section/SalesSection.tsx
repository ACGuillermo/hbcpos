import { ContentLayout } from '~/components/Layout/ContentLayout';
import { ProductList } from '../components';
import { Cart } from '../components/Cart';

export const SalesSection = () => {
  return (
    <ContentLayout title="Sales">
      <div className="grid grid-cols-12">
        <div className="col-span-12 h-screen pb-4 lg:col-span-9 2xl:col-span-10">
          <ProductList />
        </div>
        <div className="hidden h-screen pb-4 lg:col-span-3 lg:block 2xl:col-span-2">
          <Cart />
        </div>
      </div>
    </ContentLayout>
  );
};
