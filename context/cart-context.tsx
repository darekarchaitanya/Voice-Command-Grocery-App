import { createContext } from 'react';
import type { CartItem, Product } from '@/types';

interface CartContextType {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  handleAddToCart: (product: Product, quantity?: number) => void;
  handleRemoveFromCart: (productId: string) => void;
  handleUpdateQuantity: (productId: string, quantity: number) => void;
  showToast: (message: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
