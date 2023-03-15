import { Button } from '~/components/Elements';
import { useShoppingCartContext } from '~/stores/ShoppingCart';
import { type CartProduct } from '~/types';
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';

type CartItemProps = {
  product: CartProduct;
};
export const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const { drecreaseProductQuantity, increaseProductQuantity, removeFromCart } =
    useShoppingCartContext();
  return (
    <div className="mb-2 flex h-20 w-full flex-row items-center">
      <img
        src={product.image}
        alt="placeholder"
        className="mr-4 h-16 w-16 rounded-md"
      />
      <div className="items-strech flex h-full flex-col justify-start">
        <h5 className="text-md mb-2 font-bold line-clamp-1">{product.name}</h5>
        <p className="text-sm font-bold text-blue-800">{product.price}€</p>
      </div>
      <div className="ml-auto flex flex-row items-center justify-center">
        <button
          onClick={() => drecreaseProductQuantity(product)}
          disabled={product.quantity <= 1}
          className={`${
            product.quantity <= 1
              ? 'cursor-not-allowed opacity-50'
              : 'cursor-pointer'
          }`}
        >
          <MinusCircleIcon className={`h-6 w-6 text-blue-900`} />
        </button>

        <p className="w-8 text-center">{product.quantity}</p>
        <PlusCircleIcon
          className="h-6 w-6 text-blue-900"
          onClick={() => increaseProductQuantity(product)}
        />
      </div>
    </div>
  );
};
