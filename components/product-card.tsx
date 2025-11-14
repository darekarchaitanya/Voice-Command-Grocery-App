'use client';

import { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import type { Product } from '@/types';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105 overflow-hidden">
      <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.tag && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.tag}
          </div>
        )}
      </div>

      <div className="p-3">
        <h3 className="font-bold text-sm text-gray-800 line-clamp-2 mb-1">{product.name}</h3>
        <p className="text-xs text-gray-500 mb-2">{product.quantity}</p>

        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold text-green-600">₹{product.price}</span>
          {product.discount && (
            <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
              Save {product.discount}%
            </span>
          )}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-2 mb-3 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-1 hover:bg-gray-200 rounded"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="flex-1 text-center font-semibold text-sm">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-1 hover:bg-gray-200 rounded"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAdd}
          className="w-full bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Add
        </button>
      </div>
    </div>
  );
}
