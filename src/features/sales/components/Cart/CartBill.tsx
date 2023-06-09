import { useEffect, useState } from 'react';
import { Button } from '~/components/Elements';
import { type CartProduct } from '~/types';
import { CheckoutModal } from './CheckoutModal';

interface CartBillProps {
  cartProducts: CartProduct[];
}

export const CartBill: React.FC<CartBillProps> = ({ cartProducts }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    setSubtotal(
      cartProducts.reduce(
        (acc, { price, quantity }) => acc + price * quantity,
        0,
      ),
    );
  }, [cartProducts]);

  return (
    <div className="mx-auto my-auto h-full w-11/12 rounded bg-gray-100">
      <div className="flex h-full flex-col justify-between divide-y-2 divide-dashed divide-gray-400 py-2 px-2">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Subtotal</p>
            <p className="text-sm font-medium text-gray-600">
              {subtotal.toFixed(2)} €
            </p>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-sm text-gray-500">Descuento</p>
            <p className="text-sm font-medium text-gray-600">0.00 €</p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-sm font-medium text-gray-600">
            {subtotal.toFixed(2)} €
          </p>
        </div>

        <div className="-mt-2 flex h-10 items-center rounded-md">
          <CheckoutModal
            isDone={false}
            triggerButton={
              <Button
                variant="primary"
                size="md"
                className="w-full"
                disabled={cartProducts.length <= 0}
              >
                Checkout
              </Button>
            }
          />
        </div>
      </div>
    </div>
  );
};
