'use client';

import { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import type { CartItem } from '@/types';

interface CheckoutProps {
  cartItems: CartItem[];
  onOrderPlaced: () => void;
  onCancel: () => void;
}

export default function Checkout({ cartItems, onOrderPlaced, onCancel }: CheckoutProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    address: '',
    city: '',
    pincode: '',
    deliverySlot: '9-11 AM',
    paymentMethod: 'cash',
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  ) + 50;

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (
      formData.fullName &&
      formData.mobileNumber &&
      formData.address &&
      formData.city &&
      formData.pincode
    ) {
      onOrderPlaced();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-green-50 to-yellow-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <button
          onClick={onCancel}
          className="flex items-center gap-2 text-green-600 font-bold mb-6 hover:text-green-700"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Shopping
        </button>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Checkout</h1>

          {/* Steps */}
          <div className="flex gap-4 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1">
                <div
                  className={`h-2 rounded-full ${
                    s <= step ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                />
                <p className="text-xs font-semibold mt-2 text-gray-600">
                  {s === 1 ? 'Delivery Details' : s === 2 ? 'Review Order' : 'Confirmation'}
                </p>
              </div>
            ))}
          </div>

          {/* Step 1: Delivery Details */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  placeholder="9876543210"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Delivery Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                  rows={3}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Mumbai"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pincode
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="400001"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Delivery Slot
                </label>
                <select
                  name="deliverySlot"
                  value={formData.deliverySlot}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                >
                  <option>9-11 AM</option>
                  <option>11-1 PM</option>
                  <option>1-3 PM</option>
                  <option>3-5 PM</option>
                  <option>5-7 PM</option>
                </select>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-all mt-6"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Review Order */}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="bg-gray-50 rounded-lg p-4 space-y-2 max-h-48 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm">
                    <span>
                      {item.product.name} x {item.quantity}
                    </span>
                    <span className="font-semibold">
                      ₹{item.product.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t-2 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">
                    ₹{cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="font-semibold">₹50</span>
                </div>
                <div className="flex justify-between text-lg font-bold bg-green-50 p-2 rounded">
                  <span>Total</span>
                  <span className="text-green-600">₹{total}</span>
                </div>
              </div>

              <h3 className="font-bold mt-6 mb-2">Payment Method</h3>
              <div className="space-y-2">
                {['cash', 'upi', 'card'].map((method) => (
                  <label key={method} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={formData.paymentMethod === method}
                      onChange={handleInputChange}
                      className="w-4 h-4"
                    />
                    <span className="font-semibold capitalize">
                      {method === 'cash'
                        ? 'Cash on Delivery'
                        : method === 'upi'
                        ? 'UPI'
                        : 'Credit/Debit Card'}
                    </span>
                  </label>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border-2 border-green-500 text-green-500 font-bold py-3 rounded-lg hover:bg-green-50 transition-all"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-all"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="text-center space-y-6 py-8">
              <div className="flex justify-center">
                <div className="bg-green-100 rounded-full p-6">
                  <Check className="w-12 h-12 text-green-600" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Order Placed Successfully!
                </h2>
                <p className="text-gray-600">
                  Your order will be delivered on the selected time slot. (This is a demo)
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-left">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Delivery Address:</span> {formData.address}, {formData.city} - {formData.pincode}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <span className="font-semibold">Slot:</span> {formData.deliverySlot}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <span className="font-semibold">Total Amount:</span> ₹{total}
                </p>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-all"
              >
                Back to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
