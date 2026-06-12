import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  ArrowLeft, CreditCard, Shield, CheckCircle2, Truck,
  Snowflake, Lock, ChevronRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { calcShipping, calcTax, calcGrandTotal } from '../lib/pricing';

const shippingSchema = z.object({
  firstName:   z.string().min(1, 'Required'),
  lastName:    z.string().min(1, 'Required'),
  institution: z.string().optional(),
  email:       z.string().min(1, 'Required').email('Invalid email address'),
  address:     z.string().min(5, 'Required'),
  city:        z.string().min(1, 'Required'),
  state:       z.string().min(1, 'Required'),
  zip:         z.string().regex(/^\d{5}(-\d{4})?$/, 'Enter a valid ZIP (e.g. 90210)'),
});
type ShippingData = z.infer<typeof shippingSchema>;

const paymentSchema = z.object({
  cardNumber: z.string().regex(/^[\d\s]{15,19}$/, 'Invalid card number'),
  expiry:     z.string().regex(/^\d{2}\/\d{2}$/, 'Use MM/YY format'),
  cvc:        z.string().regex(/^\d{3,4}$/, 'Invalid CVC'),
});
type PaymentData = z.infer<typeof paymentSchema>;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-red-500 text-xs mt-1">{message}</p>;
}

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [placed, setPlaced] = useState(false);

  const shipping = calcShipping(totalPrice);
  const tax = calcTax(totalPrice);
  const grandTotal = calcGrandTotal(totalPrice);

  const shippingForm = useForm<ShippingData>({ resolver: zodResolver(shippingSchema) });
  const paymentForm  = useForm<PaymentData>({ resolver: zodResolver(paymentSchema) });

  useEffect(() => {
    document.title = 'Checkout — BIOHACKS PHARMACEUTICAL';
    return () => { document.title = 'BIOHACKS PHARMACEUTICAL'; };
  }, []);

  if (items.length === 0 && !placed) {
    return (
      <div className="min-h-screen bg-[#F1EFE8] pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#042C53] mb-4">Your cart is empty</h1>
          <p className="text-[#5F5E5A] mb-6">Add items to your cart before checking out.</p>
          <Link to="/catalog" className="btn-primary-bio">Browse Catalog</Link>
        </div>
      </div>
    );
  }

  if (placed) {
    return (
      <div className="min-h-screen bg-[#F1EFE8] pt-32 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto section-padding">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-[#042C53] mb-4">Order Placed!</h1>
          <p className="text-[#5F5E5A] mb-2">
            Thank you for your order. This is a demo checkout — no actual transaction was processed.
          </p>
          <p className="text-sm text-[#5F5E5A] mb-8">
            In production, you would receive an email confirmation with tracking information.
          </p>
          <Link to="/catalog" className="btn-primary-bio inline-flex items-center gap-2">
            Continue Shopping <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  const inputCls = "w-full px-4 py-3 bg-[#F1EFE8] border border-[#E6F1FB] focus:border-[#378ADD] focus:outline-none text-sm";
  const labelCls = "block text-xs text-[#5F5E5A] tracking-wider uppercase mb-2";

  return (
    <div className="min-h-screen bg-[#F1EFE8] pt-20">
      {/* Header */}
      <div className="bg-[#042C53] py-12">
        <div className="max-w-7xl mx-auto section-padding">
          <Link
            to="/cart"
            className="flex items-center gap-2 text-sm text-[#85B7EB]/80 hover:text-white transition-colors mb-4 w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cart
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Checkout</h1>
          <p className="text-[#85B7EB]/80">Complete your order securely.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto section-padding py-12">
        {/* Progress */}
        <div className="flex items-center gap-4 mb-12 max-w-2xl">
          {[
            { num: 1, label: 'Shipping' },
            { num: 2, label: 'Payment' },
            { num: 3, label: 'Review' },
          ].map((s) => (
            <div key={s.num} className="flex items-center gap-2 flex-1">
              <div className={`w-8 h-8 flex items-center justify-center text-sm font-bold ${
                step >= s.num ? 'bg-[#378ADD] text-white' : 'bg-[#E6F1FB] text-[#5F5E5A]'
              }`}>
                {s.num}
              </div>
              <span className={`text-sm ${step >= s.num ? 'text-[#042C53] font-medium' : 'text-[#5F5E5A]'}`}>
                {s.label}
              </span>
              {s.num < 3 && (
                <div className={`flex-1 h-px ${step > s.num ? 'bg-[#378ADD]' : 'bg-[#E6F1FB]'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">

            {/* Step 1 — Shipping */}
            {step === 1 && (
              <form
                onSubmit={shippingForm.handleSubmit(() => setStep(2))}
                className="bg-white border border-[#E6F1FB] p-8"
              >
                <h2 className="text-xl font-bold text-[#042C53] mb-6">Shipping Information</h2>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className={labelCls}>First Name *</label>
                    <input {...shippingForm.register('firstName')} type="text" className={inputCls} placeholder="John" />
                    <FieldError message={shippingForm.formState.errors.firstName?.message} />
                  </div>
                  <div>
                    <label className={labelCls}>Last Name *</label>
                    <input {...shippingForm.register('lastName')} type="text" className={inputCls} placeholder="Doe" />
                    <FieldError message={shippingForm.formState.errors.lastName?.message} />
                  </div>
                </div>
                <div className="mb-5">
                  <label className={labelCls}>Institution / Company</label>
                  <input {...shippingForm.register('institution')} type="text" className={inputCls} placeholder="Research Institute LLC" />
                </div>
                <div className="mb-5">
                  <label className={labelCls}>Email *</label>
                  <input {...shippingForm.register('email')} type="email" className={inputCls} placeholder="research@institution.com" />
                  <FieldError message={shippingForm.formState.errors.email?.message} />
                </div>
                <div className="mb-5">
                  <label className={labelCls}>Address *</label>
                  <input {...shippingForm.register('address')} type="text" className={inputCls} placeholder="123 Research Blvd" />
                  <FieldError message={shippingForm.formState.errors.address?.message} />
                </div>
                <div className="grid sm:grid-cols-3 gap-5 mb-8">
                  <div>
                    <label className={labelCls}>City *</label>
                    <input {...shippingForm.register('city')} type="text" className={inputCls} placeholder="City" />
                    <FieldError message={shippingForm.formState.errors.city?.message} />
                  </div>
                  <div>
                    <label className={labelCls}>State *</label>
                    <input {...shippingForm.register('state')} type="text" className={inputCls} placeholder="State" />
                    <FieldError message={shippingForm.formState.errors.state?.message} />
                  </div>
                  <div>
                    <label className={labelCls}>ZIP *</label>
                    <input {...shippingForm.register('zip')} type="text" className={inputCls} placeholder="12345" />
                    <FieldError message={shippingForm.formState.errors.zip?.message} />
                  </div>
                </div>
                <button type="submit" className="btn-primary-bio w-full flex items-center justify-center gap-2">
                  Continue to Payment <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            )}

            {/* Step 2 — Payment */}
            {step === 2 && (
              <form
                onSubmit={paymentForm.handleSubmit(() => setStep(3))}
                className="bg-white border border-[#E6F1FB] p-8"
              >
                <h2 className="text-xl font-bold text-[#042C53] mb-6">Payment Method</h2>
                <div className="space-y-4 mb-8">
                  {['Credit Card', 'PayPal', 'Bank Transfer', 'Cryptocurrency'].map((method) => (
                    <label key={method} className="flex items-center gap-4 p-4 border border-[#E6F1FB] hover:border-[#378ADD] cursor-pointer transition-colors">
                      <input type="radio" name="payment" className="w-4 h-4 accent-[#378ADD]" defaultChecked={method === 'Credit Card'} />
                      <span className="flex-1 font-medium text-[#042C53]">{method}</span>
                      {method === 'Credit Card' && <CreditCard className="w-5 h-5 text-[#378ADD]" />}
                    </label>
                  ))}
                </div>

                <div className="mb-5">
                  <label className={labelCls}>Card Number *</label>
                  <input
                    {...paymentForm.register('cardNumber')}
                    type="text"
                    inputMode="numeric"
                    className={inputCls}
                    placeholder="0000 0000 0000 0000"
                  />
                  <FieldError message={paymentForm.formState.errors.cardNumber?.message} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mb-8">
                  <div>
                    <label className={labelCls}>Expiry Date *</label>
                    <input {...paymentForm.register('expiry')} type="text" className={inputCls} placeholder="MM/YY" />
                    <FieldError message={paymentForm.formState.errors.expiry?.message} />
                  </div>
                  <div>
                    <label className={labelCls}>CVC *</label>
                    <input
                      {...paymentForm.register('cvc')}
                      type="password"
                      inputMode="numeric"
                      className={inputCls}
                      placeholder="•••"
                    />
                    <FieldError message={paymentForm.formState.errors.cvc?.message} />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="px-6 py-3 border border-[#E6F1FB] text-[#5F5E5A] font-medium hover:bg-[#F1EFE8] transition-colors">
                    Back
                  </button>
                  <button type="submit" className="btn-primary-bio flex-1 flex items-center justify-center gap-2">
                    Review Order <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 3 — Review */}
            {step === 3 && (
              <div className="bg-white border border-[#E6F1FB] p-8">
                <h2 className="text-xl font-bold text-[#042C53] mb-6">Review Your Order</h2>

                <div className="space-y-4 mb-8">
                  {items.map((item) => (
                    <div key={item.productId} className="flex justify-between items-center py-3 border-b border-[#E6F1FB]">
                      <div>
                        <span className="font-medium text-[#042C53]">{item.name}</span>
                        <span className="text-sm text-[#5F5E5A] ml-2">x{item.quantity}</span>
                      </div>
                      <span className="font-bold text-[#042C53]">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#F1EFE8] p-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#378ADD] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-[#042C53]">Research Use Only Agreement</p>
                      <p className="text-xs text-[#5F5E5A] mt-1">
                        By placing this order, you confirm that all products will be used exclusively for lawful laboratory research purposes. You are 21+ years of age and understand these products are not for human consumption.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)} className="px-6 py-3 border border-[#E6F1FB] text-[#5F5E5A] font-medium hover:bg-[#F1EFE8] transition-colors">
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => { clearCart(); setPlaced(true); }}
                    className="btn-primary-bio flex-1 flex items-center justify-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    Place Order — ${grandTotal.toFixed(2)}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-[#E6F1FB] p-6 sticky top-24">
              <h2 className="text-lg font-bold text-[#042C53] mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.productId} className="flex justify-between text-sm">
                    <span className="text-[#5F5E5A]">{item.name} x{item.quantity}</span>
                    <span className="font-medium text-[#042C53]">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#E6F1FB] pt-4 space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#5F5E5A]">Subtotal</span>
                  <span className="font-medium text-[#042C53]">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#5F5E5A]">Shipping</span>
                  <span className="font-medium text-[#042C53]">
                    {shipping === 0 ? <span className="text-green-600">FREE</span> : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#5F5E5A]">Tax</span>
                  <span className="font-medium text-[#042C53]">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-[#E6F1FB] pt-4">
                <div className="flex justify-between">
                  <span className="font-bold text-[#042C53]">Total</span>
                  <span className="text-xl font-bold text-[#042C53]">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#5F5E5A]">
                  <Lock className="w-3 h-3 text-[#378ADD]" />
                  Secure SSL encryption
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5F5E5A]">
                  <Truck className="w-3 h-3 text-[#378ADD]" />
                  Free shipping over $250
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5F5E5A]">
                  <Snowflake className="w-3 h-3 text-[#378ADD]" />
                  Cold-chain delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
