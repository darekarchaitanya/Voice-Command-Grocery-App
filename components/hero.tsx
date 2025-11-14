import { Mic, ArrowRight, Leaf } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-orange-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="relative z-10 px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand tagline */}
          <div className="inline-block mb-6">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Welcome to VoiceShop
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Shop Groceries with Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Voice</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Experience the future of grocery shopping. Simply speak your commands and let AI-powered voice recognition handle the rest. Fast, easy, and completely hands-free.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={onExploreClick}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mic className="w-5 h-5" />
              Start Shopping
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-900 text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-900 hover:text-white transition-all">
              Browse Categories
            </button>
          </div>

          {/* Feature badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: '🎤', label: 'Voice Control' },
              { icon: '⚡', label: 'Fast Checkout' },
              { icon: '🚚', label: 'Same Day Delivery' },
              { icon: '✓', label: 'Quality Guarantee' },
            ].map((feature) => (
              <div key={feature.label} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <p className="text-sm font-semibold text-gray-700">{feature.label}</p>
              </div>
            ))}
          </div>

          {/* Stats section */}
          <div className="flex justify-around text-center mb-8">
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-green-600">130+</p>
              <p className="text-gray-600 text-sm">Fresh Products</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-green-600">500+</p>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-green-600">24/7</p>
              <p className="text-gray-600 text-sm">Voice Support</p>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="flex items-center justify-center gap-2 text-green-600">
            <Leaf className="w-5 h-5" />
            <span className="text-sm font-semibold">Sustainably sourced groceries</span>
            <Leaf className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
