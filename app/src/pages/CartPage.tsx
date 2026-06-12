import { useEffect } from 'react';
import { Link } from 'react-router';
import {
  ShoppingCart, ArrowRight, Trash2, Plus, Minus,
  Shield, Truck, Snowflake, CreditCard, ArrowLeft
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { calcShipping, calcTax, calcGrandTotal } from '../lib/pricing';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  const shipping = calcShipping(totalPrice);
  const tax = calcTax(totalPrice);
  const grandTotal = calcGrandTotal(totalPrice);

  useEffect(() => {
    document.title = 'Shopping Cart — BIOHACKS PHARMACEUTICAL';
    return () => { document.title = 'BIOHACKS PHARMACEUTICAL'; };
  }, []);

  return (
    <div className="min-h-screen bg-[#F1EFE8] pt-20">
      {/* Header */}
      <div className="bg-[#042C53] py-12">
        <div className="max-w-7xl mx-auto section-padding">
          <h1 className="text-3xl font-bold text-white mb-2">Shopping Cart</h1>
          <p className="text-[#85B7EB]/80">
            Review your items and proceed to checkout.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto section-padding py-12">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="w-16 h-16 text-[#E6F1FB] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#042C53] mb-2">Your cart is empty</h2>
            <p className="text-[#5F5E5A] mb-8">Add research peptides to get started.</p>
            <Link to="/catalog" className="btn-primary-bio inline-flex items-center gap-2">
              Browse Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#5F5E5A]">{totalItems} item{totalItems !== 1 ? 's' : ''}</span>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear Cart
                </button>
              </div>

              {items.map((item) => (
                <div key={item.productId} className="bg-white border border-[#E6F1FB] p-6 flex flex-col sm:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="font-bold text-[#042C53] mb-1">{item.name}</h3>
                    <p className="text-sm text-[#5F5E5A] mb-3">{item.specs}</p>
                    <div className="text-lg font-bold text-[#042C53]">${item.price} <span className="text-sm font-normal text-[#5F5E5A]">/ unit</span></div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-[#E6F1FB] bg-white">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="p-2 hover:bg-[#F1EFE8] transition-colors"
                      >
                        <Minus className="w-4 h-4 text-[#5F5E5A]" />
                      </button>
                      <span className="w-10 text-center font-bold text-[#042C53]">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        aria-label={`Increase quantity of ${item.name}`}
                        className="p-2 hover:bg-[#F1EFE8] transition-colors"
                      >
                        <Plus className="w-4 h-4 text-[#5F5E5A]" />
                      </button>
                    </div>

                    <div className="text-right min-w-[80px]">
                      <div className="font-bold text-[#042C53]">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.productId)}
                      aria-label={`Remove ${item.name} from cart`}
                      className="p-2 text-[#5F5E5A] hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}

              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 text-sm text-[#378ADD] font-medium hover:text-[#185FA5] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-[#E6F1FB] p-6 sticky top-24">
                <h2 className="text-lg font-bold text-[#042C53] mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#5F5E5A]">Subtotal</span>
                    <span className="font-medium text-[#042C53]">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#5F5E5A]">Shipping</span>
                    <span className="font-medium text-[#042C53]">
                      {shipping === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#5F5E5A]">Estimated Tax</span>
                    <span className="font-medium text-[#042C53]">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-[#E6F1FB] pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="font-bold text-[#042C53]">Total</span>
                    <span className="text-xl font-bold text-[#042C53]">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="btn-primary-bio w-full flex items-center justify-center gap-2 mb-4"
                >
                  <CreditCard className="w-4 h-4" />
                  Proceed to Checkout
                </Link>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#5F5E5A]">
                    <Truck className="w-4 h-4 text-[#378ADD]" />
                    Free shipping on orders over $250
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#5F5E5A]">
                    <Snowflake className="w-4 h-4 text-[#378ADD]" />
                    Cold-chain shipping included
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#5F5E5A]">
                    <Shield className="w-4 h-4 text-[#378ADD]" />
                    CoA provided with every order
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
