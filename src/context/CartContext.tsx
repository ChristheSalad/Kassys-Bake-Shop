// src/context/CartContext.tsx
import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { Product, CartItem } from '../features/products/types';

// 1. Define what data/functions will be available globally
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  cartTotalCount: number; // For the badge (e.g., "3" items)
}

// 2. Create the Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// 3. Create the Provider Component
// This acts as the wrapper that holds the state
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // LOGIC: Add Item
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      // Check if item already exists
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // If yes, just increase quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If no, add new item with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // LOGIC: Remove Item (Simple version: removes completely)
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // LOGIC: Calculate total items (e.g., 2 cookies + 1 brownie = 3 items)
  const cartTotalCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartTotalCount }}>
      {children}
    </CartContext.Provider>
  );
};

// 4. Create a custom hook for easy access
// Instead of importing useContext everywhere, we just use this hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};