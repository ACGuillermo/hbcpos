import { ProductCard } from './ProductCard';
import { type Product } from '~/types';

const list: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Product 1 description',
    price: 100,
    image: 'https://via.placeholder.com/250?text=No+Image',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Product 2 description',
    price: 200,
    image: 'https://via.placeholder.com/250?text=No+Image',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Product 3 description',
    price: 300,
    image: 'https://via.placeholder.com/250?text=No+Image',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Product 4 description',
    price: 400,
    image: 'https://via.placeholder.com/250?text=No+Image',
  },
  {
    id: 5,
    name: 'Product 4',
    description: 'Product 4 description',
    price: 400,
    image: 'https://via.placeholder.com/250?text=No+Image',
  },
  {
    id: 6,
    name: 'Product 4',
    description: 'Product 4 description',
    price: 400,
    image: 'https://via.placeholder.com/250?text=No+Image',
  },
  {
    id: 7,
    name: 'Product 4',
    description: 'Product 4 description',
    price: 400,
    image: 'https://via.placeholder.com/250?text=No+Image',
  },
  {
    id: 8,
    name: 'Product 4',
    description: 'Product 4 description',
    price: 400,
    image: 'https://via.placeholder.com/250?text=No+Image',
  },
  {
    id: 9,
    name: 'Product 4',
    description: 'Product 4 description',
    price: 400,
    image: 'https://via.placeholder.com/250?text=No+Image',
  },
];

export const ProductList = () => {
  return (
    <div className="mt-2 grid grid-cols-3 gap-y-10 gap-x-4 lg:grid-cols-3 xl:grid-cols-5">
      {list.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
