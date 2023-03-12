import { useShoppingCartContext } from '~/stores/ShoppingCart';
import { CartBill } from './CartBill';

export const Cart = () => {
  const { cartProducts } = useShoppingCartContext();
  return (
    <div className="col-span-3 h-full overflow-y-hidden rounded-2xl border-2 border-gray-200 lg:col-span-3">
      <div className="flex h-full w-full flex-col rounded-2xl bg-white shadow-lg">
        <div className="h-2/3 overflow-y-auto overflow-x-hidden">
          <div className="flex h-full w-full flex-col"></div>
        </div>
        <CartBill cartProducts={cartProducts} />
      </div>
    </div>
  );
};
