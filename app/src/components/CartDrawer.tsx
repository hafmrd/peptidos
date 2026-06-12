import { Link } from 'react-router';
import { X, Plus, Minus, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E6F1FB]">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-5 h-5 text-[#378ADD]" />
              <h2 className="text-lg font-bold text-[#042C53]">Your Cart</h2>
              <span className="bg-[#378ADD] text-white text-xs font-bold px-2 py-0.5">
                {totalItems}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close cart"
              className="p-2 hover:bg-[#F1EFE8] transition-colors"
            >
              <X className="w-5 h-5 text-[#5F5E5A]" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="w-16 h-16 text-[#E6F1FB] mb-4" />
                <p className="text-[#5F5E5A] font-medium mb-2">Your cart is empty</p>
                <p className="text-sm text-[#5F5E5A]/70 mb-6">Add research peptides to get started</p>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary-bio text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.productId} className="flex gap-4 p-4 bg-[#F1EFE8]/50 border border-[#E6F1FB]">
                    <div className="flex-1">
                      <h4 className="font-bold text-[#042C53] text-sm mb-1">{item.name}</h4>
                      <p className="text-xs text-[#5F5E5A] mb-2">{item.specs}</p>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                          className="p-1 bg-white border border-[#E6F1FB] hover:border-[#378ADD] transition-colors"
                        >
                          <Minus className="w-3 h-3 text-[#5F5E5A]" />
                        </button>
                        <span className="text-sm font-medium text-[#042C53] w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                          className="p-1 bg-white border border-[#E6F1FB] hover:border-[#378ADD] transition-colors"
                        >
                          <Plus className="w-3 h-3 text-[#5F5E5A]" />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="p-1 text-[#5F5E5A] hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <span className="font-bold text-[#042C53]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#E6F1FB] space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#5F5E5A]">Subtotal</span>
                <span className="text-xl font-bold text-[#042C53]">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#5F5E5A]">
                Shipping and taxes calculated at checkout. Free shipping on orders over $250.
              </p>
              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className="btn-primary-bio w-full flex items-center justify-center gap-2"
              >
                View Cart <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/checkout"
                onClick={() => setIsOpen(false)}
                className="btn-outline-bio w-full flex items-center justify-center gap-2"
              >
                Checkout <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
