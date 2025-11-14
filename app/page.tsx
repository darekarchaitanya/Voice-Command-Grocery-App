'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/header';
import Hero from '@/components/hero';
import VoicePanel from '@/components/voice-panel';
import ProductList from '@/components/product-list';
import Cart from '@/components/cart';
import Checkout from '@/components/checkout';
import Toast from '@/components/toast';
import { CartContext } from '@/context/cart-context';
import { useAuth } from '@/context/auth-context';
import type { CartItem, Product } from '@/types';

export default function Home() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isCheckout, setIsCheckout] = useState(false);
  const [currentCommand, setCurrentCommand] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-green-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (isCheckout) {
    return (
      <Checkout
        cartItems={cart}
        onOrderPlaced={handleOrderPlaced}
        onCancel={() => setIsCheckout(false)}
      />
    );
  }

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
    showToast(`Added ${product.name} to cart`);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      showToast('Your cart is empty');
      return;
    }
    setIsCheckout(true);
  };

  const handleOrderPlaced = () => {
    setCart([]);
    setIsCheckout(false);
    showToast('Order placed successfully! (demo)');
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const contextValue = {
    cart,
    setCart,
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateQuantity,
    showToast,
  };

  return (
    <CartContext.Provider value={contextValue}>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-green-50 to-yellow-50">
        <Header cartCount={cart.length} onCartClick={() => setIsCartOpen(!isCartOpen)} />
        <VoicePanel
          onCommand={setCurrentCommand}
          onCartAdd={handleAddToCart}
          onCategoryChange={setActiveCategory}
          showToast={showToast}
        />
        <main className="flex gap-4 p-4 lg:p-6">
          <div className="flex-1 min-w-0">
            <Hero onExploreClick={() => {
              document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
            }} />
            <section id="products-section" className="mt-8">
              <ProductList
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                onAddToCart={handleAddToCart}
              />
            </section>
          </div>
          {isCartOpen && (
            <aside className="hidden lg:block lg:w-80 lg:sticky lg:top-20 lg:h-fit">
              <Cart
                items={cart}
                onRemove={handleRemoveFromCart}
                onUpdateQuantity={handleUpdateQuantity}
                onCheckout={handleCheckout}
              />
            </aside>
          )}
        </main>
        {isCartOpen && (
          <div className="fixed bottom-0 left-0 right-0 lg:hidden z-40">
            <Cart
              items={cart}
              onRemove={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity}
              onCheckout={handleCheckout}
            />
          </div>
        )}
        {toastMessage && <Toast message={toastMessage} />}
      </div>
    </CartContext.Provider>
  );
}
