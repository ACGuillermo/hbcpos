import { useShoppingCartContext } from '~/stores/ShoppingCart';
import { type CartProduct } from '~/types';

type CartItemProps = {
  product: CartProduct;
};
export const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const { drecreaseProductQuantity, increaseProductQuantity } =
    useShoppingCartContext();
  return (
    <div className="flex h-20 w-full flex-row items-center justify-between border-b border-gray-200 px-4">
      <div className="flex w-3/4 flex-row items-center justify-start">
        <div className="flex w-2/3 flex-col items-start justify-center">
          <span className="text-sm font-semibold text-gray-700">
            {product.name}
          </span>
          <span className="text-xs font-medium text-gray-500">
            {product.price} € x {product.quantity}
          </span>
        </div>
        <div className="flex w-1/3 flex-row items-center justify-end"></div>
      </div>
    </div>
  );
};
