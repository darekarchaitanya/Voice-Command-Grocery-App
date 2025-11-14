'use client';

import { Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';
import type { CartItem } from '@/types';

interface CartProps {
  items: CartItem[];
  onRemove: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onCheckout: () => void;
}

export default function Cart({
  items,
  onRemove,
  onUpdateQuantity,
  onCheckout,
}: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const deliveryCharge = subtotal > 500 ? 0 : 50;
  const total = subtotal + deliveryCharge;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 max-h-96 flex flex-col">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b-2">
        <ShoppingBag className="w-6 h-6 text-green-500" />
        <h2 className="text-xl font-bold">Cart</h2>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {items.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Your cart is empty</p>
        ) : (
          items.map((item) => (
            <div key={item.product.id} className="flex gap-3 pb-3 border-b">
              <img
                src={item.product.image || "/placeholder.svg"}
                alt={item.product.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-gray-800 truncate">
                  {item.product.name}
                </p>
                <p className="text-xs text-gray-500 mb-1">{item.product.quantity}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-green-600">₹{item.product.price}</span>
                  <div className="flex items-center gap-1 bg-gray-100 rounded px-2 py-1">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                      className="p-0.5 hover:bg-gray-200 rounded"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-semibold w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      className="p-0.5 hover:bg-gray-200 rounded"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.product.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Cart Summary */}
      {items.length > 0 && (
        <div className="border-t-2 pt-3 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-semibold">₹{subtotal}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Delivery:</span>
            <span className="font-semibold">
              {deliveryCharge === 0 ? 'Free' : `₹${deliveryCharge}`}
            </span>
          </div>
          <div className="flex justify-between text-lg font-bold bg-green-50 p-2 rounded-lg">
            <span>Total:</span>
            <span className="text-green-600">₹{total}</span>
          </div>

          <button
            onClick={onCheckout}
            className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-all mt-3"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
