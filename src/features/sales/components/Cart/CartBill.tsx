import { useEffect, useState } from 'react';
import { Button } from '~/components/Elements';
import { ConfirmationModal } from '~/components/Elements/ConfirmationModal';
import { type CartProduct } from '~/types';

interface CartBillProps {
  cartProducts: CartProduct[];
}

export const CartBill: React.FC<CartBillProps> = ({ cartProducts }) => {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    setSubtotal(
      cartProducts.reduce(
        (acc, { price, quantity }) => acc + price * quantity,
        0,
      ),
    );
  }, [cartProducts]);

  return (
    <div className="mb-4 h-1/3 w-full pt-3">
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
            <ConfirmationModal
              icon="danger"
              title="Delete User"
              isDone={false}
              triggerButton={
                <Button variant="primary" size="md" className="w-full">
                  Delete
                </Button>
              }
              confirmButton={
                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  className="bg-red-600"
                  onClick={() => console.log('delete')}
                >
                  <div>Delete User</div>
                </Button>
              }
            >
              <p className="text-sm text-gray-500">
                All of your data will be permanently removed from our servers
                forever. This action cannot be undone.
              </p>
            </ConfirmationModal>
          </div>
        </div>
      </div>
    </div>
  );
};
