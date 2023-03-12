import { Button } from '~/components/Elements';
import { ContentLayout } from '~/components/Layout/ContentLayout';
import { ProductList } from '../components';

export const SalesSection = () => {
  return (
    <ContentLayout title="Sales">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-10">
          <ProductList />
        </div>
        <div className="md:hidden">hello</div>
      </div>
    </ContentLayout>
  );
};
