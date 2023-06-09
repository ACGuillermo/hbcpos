import { Button } from '~/components/Elements';
import { ConfirmationModal } from '~/components/Elements/ConfirmationModal';
import { useShoppingCartContext } from '~/stores/ShoppingCart';
import { CartBill } from './CartBill';
import { CartItem } from './CartItem';
import { TrashIcon } from '@heroicons/react/24/solid';
import { type CartProduct } from '~/types';
import React from 'react';

const CartHeader = ({ cartProducts }: { cartProducts: CartProduct[] }) => {
  const itemsCount = cartProducts.length;
  const productsLabel = itemsCount > 1 ? 'productos' : 'producto';

  return (
    <div className="flex flex-col">
      <h3 className="text-lg font-medium">Pedido actual</h3>
      <p className="text-sm text-gray-500">
        {itemsCount} {productsLabel}
      </p>
    </div>
  );
};

const ProductList = ({ cartProducts }: { cartProducts: CartProduct[] }) => (
  <div className="flex h-full w-full flex-col px-4">
    {cartProducts?.map((product) => (
      <CartItem key={product.id} product={product} />
    ))}
  </div>
);

export const Cart = () => {
  const { cartProducts, deleteCart } = useShoppingCartContext();
  const [isDone, setIsDone] = React.useState(false);

  const handleDeleteCart = () => {
    deleteCart();
    setIsDone(true);
  };

  const getTrashButtonClass = (length: number) =>
    length < 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer';

  return (
    <div className="col-span-3 h-full overflow-y-hidden rounded-2xl border-2 border-gray-200 lg:col-span-3">
      <div className="flex h-full w-full flex-col rounded-2xl bg-white shadow-lg">
        <div className="sticky flex h-16 w-full items-center justify-between px-4">
          <CartHeader cartProducts={cartProducts} />
          <ConfirmationModal
            title="Empty Cart"
            isDone={isDone}
            body={'Are you sure you want to empty your cart?'}
            triggerButton={
              <button
                disabled={cartProducts.length < 1}
                className={getTrashButtonClass(cartProducts.length)}
              >
                <TrashIcon
                  onClick={() => setIsDone(false)}
                  className="h-6 w-6 text-red-500"
                />
              </button>
            }
            confirmButton={
              <Button
                variant="danger"
                size="md"
                disabled={cartProducts.length <= 0}
                onClick={() => handleDeleteCart()}
              >
                Empty Cart
              </Button>
            }
            icon="danger"
          />
        </div>
        <div className="h-2/3 overflow-y-auto overflow-x-hidden">
          <ProductList cartProducts={cartProducts} />
        </div>
        <div className="mb-4 h-1/3 w-full pt-3">
          <CartBill cartProducts={cartProducts} />
        </div>
      </div>
    </div>
  );
};
