import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../context/CartContext';

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  const formatPrice = (price: number) => `KSh ${price.toLocaleString()}`;

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 pb-12 flex flex-col items-center justify-center px-4">
        <ShoppingBag className="w-20 h-20 text-muted-foreground mb-6" />
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-center">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link to="/">
          <Button size="lg">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12 sm:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Cart Items - takes full width on mobile, 2/3 on lg+ */}
          <div className="lg:w-3/4 space-y-4 sm:space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 sm:p-5 bg-card rounded-xl border border-border shadow-sm"
              >
                {/* Product Image */}
                <div className="w-full sm:w-28 h-40 sm:h-28 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ShoppingBag className="w-10 h-10 sm:w-8 sm:h-8 text-muted-foreground" />
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-lg sm:text-base line-clamp-2">{item.name}</h3>
                  <p className="text-xl sm:text-lg font-bold text-gradient-pink mt-1.5">
                    {formatPrice(item.price)}
                  </p>

                  <div className="flex items-center justify-between mt-4 sm:mt-3">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 sm:gap-1.5 bg-muted/40 rounded-full px-1.5 py-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 sm:h-8 sm:w-8 rounded-full"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-5 h-5 sm:w-4 sm:h-4" />
                      </Button>
                      <span className="w-10 text-center font-semibold text-base sm:text-sm">
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 sm:h-8 sm:w-8 rounded-full"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-5 h-5 sm:w-4 sm:h-4" />
                      </Button>
                    </div>

                    {/* Remove Button - bigger touch target on mobile */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive hover:bg-destructive/10 h-10 w-10 sm:h-8 sm:w-8"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="w-6 h-6 sm:w-5 sm:h-5" />
                    </Button>
                  </div>
                </div>

                {/* Item Subtotal - hidden on very small screens, shown otherwise */}
                <div className="hidden sm:block text-right min-w-[100px] pt-1">
                  <p className="text-xs sm:text-sm text-muted-foreground">Subtotal</p>
                  <p className="text-base sm:text-lg font-bold mt-0.5">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>

                {/* Mobile subtotal (shown only on < sm) */}
                <div className="sm:hidden text-right mt-2">
                  <p className="text-sm font-medium">
                    Subtotal: <span className="font-bold">{formatPrice(item.price * item.quantity)}</span>
                  </p>
                </div>
              </div>
            ))}

            <div className="mt-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/4 mt-8 lg:mt-0">
            <div className="bg-card rounded-xl border border-border p-5 sm:p-6 lg:sticky lg:top-28">
              <h2 className="text-xl sm:text-2xl font-bold mb-5">Order Summary</h2>

              <div className="space-y-4 sm:space-y-3 mb-6 sm:mb-8">
                <div className="flex justify-between text-muted-foreground text-sm sm:text-base">
                  <span>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground text-sm sm:text-base">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between items-center text-lg sm:text-xl font-bold">
                  <span>Total</span>
                  <span className="text-gradient-pink">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <Button variant="glow" className="w-full py-6 sm:py-5 text-base sm:text-lg" size="lg">
                Proceed to Checkout
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};