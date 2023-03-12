import React, { useCallback, useContext, useState, useMemo } from 'react';
import { type CartProduct, type Product } from '~/types';

interface ShoppingCartProviderProps {
  children: React.ReactNode;
}

interface ShoppingCartContextProps {
  cartProducts: CartProduct[];
  increaseProductQuantity: (item: Product) => void;
  drecreaseProductQuantity: (item: Product) => void;
  removeFromCart: (item: Product) => void;
}

const ShoppingCartContext = React.createContext({} as ShoppingCartContextProps);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const increaseProductQuantity = useCallback(
    (product: Product) => {
      setCartProducts((prev) =>
        prev.some(({ id }) => id === product.id)
          ? prev.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            )
          : Array.from(prev).concat({ ...product, quantity: 1 }),
      );
    },
    [setCartProducts],
  );

  const drecreaseProductQuantity = useCallback(
    (product: Product) => {
      setCartProducts((prev) =>
        prev.some(({ id }) => id === product.id)
          ? prev.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
          : Array.from(prev).concat({ ...product, quantity: 1 }),
      );
    },
    [setCartProducts],
  );

  const removeFromCart = useCallback(
    (product: Product) => {
      setCartProducts((prev) => prev.filter(({ id }) => id !== product.id));
    },
    [setCartProducts],
  );

  const value = useMemo(
    () => ({
      cartProducts,
      increaseProductQuantity,
      drecreaseProductQuantity,
      removeFromCart,
    }),
    [
      cartProducts,
      increaseProductQuantity,
      drecreaseProductQuantity,
      removeFromCart,
    ],
  );

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
