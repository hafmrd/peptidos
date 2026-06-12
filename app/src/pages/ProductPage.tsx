import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import {
  ArrowLeft, Beaker, CheckCircle2, Shield, Snowflake,
  ShoppingCart, Plus, Minus,
  Package, Truck, Award
} from 'lucide-react';
import { getProductById, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { badgeConfigLg } from '../lib/badgeConfig';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(id || '');
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} — BIOHACKS PHARMACEUTICAL`;
    } else {
      document.title = 'Product Not Found — BIOHACKS PHARMACEUTICAL';
    }
    return () => { document.title = 'BIOHACKS PHARMACEUTICAL'; };
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F1EFE8] pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#042C53] mb-4">Product Not Found</h1>
          <p className="text-[#5F5E5A] mb-6">The product you are looking for does not exist.</p>
          <Link to="/catalog" className="btn-primary-bio">Back to Catalog</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      specs: product.specs,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-[#F1EFE8] pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E6F1FB]">
        <div className="max-w-7xl mx-auto section-padding py-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-[#5F5E5A] hover:text-[#042C53] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Catalog
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Info */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {product.badge && (
                <span className={`${badgeConfigLg[product.badge].bg} text-white text-xs font-bold tracking-wider px-3 py-1 flex items-center gap-1`}>
                  {badgeConfigLg[product.badge].icon}
                  {badgeConfigLg[product.badge].label}
                </span>
              )}
              <span className="text-xs text-[#5F5E5A] tracking-wider uppercase bg-[#F1EFE8] px-3 py-1">
                {product.categoryLabel}
              </span>
              {discount > 0 && (
                <span className="text-xs text-white font-bold tracking-wider bg-red-600 px-3 py-1">
                  SAVE {discount}%
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#042C53] mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-[#5F5E5A] mb-6">
              {product.description}
            </p>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-3xl font-bold text-[#042C53]">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-[#5F5E5A] line-through">${product.originalPrice}</span>
              )}
              <span className="text-sm text-[#5F5E5A]">/ {product.specs}</span>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center border border-[#E6F1FB] bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                  className="p-3 hover:bg-[#F1EFE8] transition-colors"
                >
                  <Minus className="w-4 h-4 text-[#5F5E5A]" />
                </button>
                <span className="w-12 text-center font-bold text-[#042C53]">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                  className="p-3 hover:bg-[#F1EFE8] transition-colors"
                >
                  <Plus className="w-4 h-4 text-[#5F5E5A]" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 min-w-[200px] flex items-center justify-center gap-2 px-8 py-4 font-semibold tracking-wide transition-all duration-300 ${
                  added
                    ? 'bg-green-600 text-white'
                    : 'bg-[#378ADD] text-white hover:bg-[#185FA5] shadow-lg shadow-blue-500/25'
                }`}
              >
                {added ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart — ${(product.price * quantity).toFixed(2)}
                  </>
                )}
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {[
                { icon: <Shield className="w-4 h-4" />, text: '>99% Purity' },
                { icon: <Snowflake className="w-4 h-4" />, text: 'Cold Chain' },
                { icon: <Truck className="w-4 h-4" />, text: 'Free Shipping $250+' },
                { icon: <Award className="w-4 h-4" />, text: 'CoA Included' },
                { icon: <Package className="w-4 h-4" />, text: 'Discreet Packaging' },
                { icon: <Beaker className="w-4 h-4" />, text: 'HPLC Verified' },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#5F5E5A] bg-white p-3 border border-[#E6F1FB]">
                  <span className="text-[#378ADD]">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white p-6 border border-[#E6F1FB] mb-8">
              <h3 className="text-lg font-bold text-[#042C53] mb-4">Product Description</h3>
              <p className="text-sm text-[#5F5E5A] leading-relaxed">{product.details}</p>
            </div>
          </div>

          {/* Technical Specs */}
          <div>
            <div className="bg-white border border-[#E6F1FB] p-6 mb-6">
              <h3 className="text-lg font-bold text-[#042C53] mb-4 flex items-center gap-2">
                <Beaker className="w-5 h-5 text-[#378ADD]" />
                Technical Specifications
              </h3>
              <div className="space-y-4">
                {product.cas && (
                  <div className="flex justify-between py-3 border-b border-[#E6F1FB]">
                    <span className="text-sm text-[#5F5E5A]">CAS Number</span>
                    <span className="text-sm font-medium text-[#042C53]">{product.cas}</span>
                  </div>
                )}
                {product.molecularWeight && (
                  <div className="flex justify-between py-3 border-b border-[#E6F1FB]">
                    <span className="text-sm text-[#5F5E5A]">Molecular Weight</span>
                    <span className="text-sm font-medium text-[#042C53]">{product.molecularWeight}</span>
                  </div>
                )}
                <div className="flex justify-between py-3 border-b border-[#E6F1FB]">
                  <span className="text-sm text-[#5F5E5A]">Purity</span>
                  <span className="text-sm font-medium text-[#042C53]">{product.purity}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#E6F1FB]">
                  <span className="text-sm text-[#5F5E5A]">Form</span>
                  <span className="text-sm font-medium text-[#042C53]">{product.form}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#E6F1FB]">
                  <span className="text-sm text-[#5F5E5A]">Specifications</span>
                  <span className="text-sm font-medium text-[#042C53]">{product.specs}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-sm text-[#5F5E5A]">Storage</span>
                  <span className="text-sm font-medium text-[#042C53]">{product.storage}</span>
                </div>
              </div>
            </div>

            {/* RUO Notice */}
            <div className="bg-[#042C53] p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-[#378ADD]" />
                <span className="font-semibold tracking-wide">Research Use Only</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                This product is sold strictly for laboratory research purposes only.
                Not for human consumption, veterinary use, or any application outside
                controlled research environments. Certificate of Analysis provided with every order.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#042C53] mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} compact />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
