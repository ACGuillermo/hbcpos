import { ProductCard } from './ProductCard';
import { type Product } from '~/types';
import { useShoppingCartContext } from '~/stores/ShoppingCart';
import React from 'react';

const list: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Product 1 description',
    price: 100,
    image: 'https://via.placeholder.com/600?text=No+Image',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Product 2 description',
    price: 200,
    image: 'https://via.placeholder.com/600?text=No+Image',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Product 3 description',
    price: 300,
    image: 'https://via.placeholder.com/600?text=No+Image',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Product 4 description',
    price: 400,
    image: 'https://via.placeholder.com/600?text=No+Image',
  },
  {
    id: 5,
    name: 'Product 4',
    description: 'Product 4 description',
    price: 400,
    image: 'https://via.placeholder.com/600?text=No+Image',
  },
  {
    id: 6,
    name: 'Product 4',
    description: 'Product 4 description',
    price: 400,
    image: 'https://via.placeholder.com/600?text=No+Image',
  },
  {
    id: 7,
    name: 'Product 4',
    description: 'Product 4 description',
    price: 400,
    image: 'https://via.placeholder.com/600?text=No+Image',
  },
  {
    id: 8,
    name: 'Product 4',
    description: 'Product 4 description',
    price: 400,
    image: 'https://via.placeholder.com/600?text=No+Image',
  },
  {
    id: 9,
    name: 'Product 4',
    description: 'Product 4 description',
    price: 400,
    image: 'https://via.placeholder.com/600?text=No+Image',
  },
];

export const ProductList = React.memo(() => {
  const { increaseProductQuantity } = useShoppingCartContext();
  return (
    <div className="mt-2 grid h-full grid-cols-1 gap-y-10 gap-x-4 overflow-y-scroll pb-4 md:grid-cols-3 2xl:grid-cols-4">
      {list.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          increaseProductQuantity={increaseProductQuantity}
        />
      ))}
    </div>
  );
});

ProductList.displayName = 'ProductList';
