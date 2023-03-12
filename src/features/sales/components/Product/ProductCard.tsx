import Image from 'next/image';
import React from 'react';
import { useShoppingCartContext } from '~/stores/ShoppingCart';
import { type Product } from '~/types';

type ProductCardProps = {
  product: Product;
  increaseProductQuantity: (product: Product) => void;
};

export const ProductCard: React.FC<ProductCardProps> = React.memo(
  ({ product, increaseProductQuantity }) => {
    return (
      <div
        className="flex w-48 flex-col rounded-md border-[1px] border-black border-opacity-20 bg-white p-2 shadow-xl hover:cursor-pointer lg:w-64"
        onClick={() => increaseProductQuantity(product)}
      >
        <Image
          src={product.image}
          width={250}
          height={250}
          alt={product.name}
          className="rounded-md"
        />
        <div className="flex flex-col">
          <h5 className="text-lg line-clamp-1">{product.name}</h5>
          <p>${product.price}</p>
        </div>
      </div>
    );
  },
);

ProductCard.displayName = 'ProductCard';
