import React, { createContext,useMemo, useState, ReactNode } from 'react';

type CartItem = {
  id: number;
  title: string;
  image: string;
  description: string;
  count: number;
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'count'>) => void;
  totalCount: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);




export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const totalCount = useMemo(() => cart.reduce((sum, item) => sum + item.count, 0), [cart]);

  const addToCart = (item: Omit<CartItem, 'count'>) => {

    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, count: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart,totalCount  }}>
      {children}
    </CartContext.Provider>
  );
};

