import { Button } from '~/components/Elements';
import { ContentLayout } from '~/components/Layout/ContentLayout';
import { ProductList } from '../components';

export const SalesSection = () => {
  return (
    <ContentLayout title="Sales">
      <ProductList />
      <Button variant="danger" size="lg">
        Test button
      </Button>
    </ContentLayout>
  );
};
