import { ContentLayout } from '~/components/Layout/ContentLayout';
import { ProductList } from '../components';

export const SalesSection = () => {
  return <ContentLayout title="Sales">{<ProductList />}</ContentLayout>;
};
