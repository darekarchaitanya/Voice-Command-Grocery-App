'use client';

import { useState, useMemo } from 'react';
import { products, categories } from '@/lib/products';
import ProductCard from './product-card';
import type { Product } from '@/types';

interface ProductListProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductList({
  activeCategory,
  onCategoryChange,
  onAddToCart,
}: ProductListProps) {
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      {/* Category Tabs */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
              activeCategory === category
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-500'
            }`}
          >
            {category === 'all' ? 'All Products' : category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found in this category</p>
        </div>
      )}
    </div>
  );
}
