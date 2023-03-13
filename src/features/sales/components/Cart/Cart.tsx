import { useShoppingCartContext } from '~/stores/ShoppingCart';
import { CartBill } from './CartBill';
import { CartItem } from './CartItem';

export const Cart = () => {
  const { cartProducts } = useShoppingCartContext();
  console.log(cartProducts);
  return (
    <div className="col-span-3 h-full overflow-y-hidden rounded-2xl border-2 border-gray-200 lg:col-span-3">
      <div className="flex h-full w-full flex-col rounded-2xl bg-white shadow-lg">
        <div className="h-2/3 overflow-y-auto overflow-x-hidden">
          <div className="flex h-full w-full flex-col">
            {cartProducts?.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="mb-4 h-1/3 w-full pt-3">
          <CartBill cartProducts={cartProducts} />
        </div>
      </div>
    </div>
  );
};
