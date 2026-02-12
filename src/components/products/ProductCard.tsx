import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../../context/CartContext';
import type { Product } from '@/data/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const colorClassMap: Record<string, string> = {
  black: 'color-black',
  white: 'color-white',
  pink: 'color-pink',
  'rose gold': 'color-rose-gold',
  brown: 'color-brown',
  tan: 'color-tan',
  navy: 'color-navy',
  silver: 'color-silver',
  tortoise: 'color-tortoise',
  charcoal: 'color-charcoal',
  burgundy: 'color-burgundy',
  emerald: 'color-emerald',
  blush: 'color-blush',
  'hot pink': 'color-hot-pink',
};

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      category: product.category,
    });
  };

  const formatPrice = (price: number) => `KSh ${price.toLocaleString()}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-card shadow-sm transition-shadow hover:shadow-md">
        {/* Image container */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted/40">
          <motion.img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out"
            animate={{ scale: isHovered ? 1.06 : 1 }}
            transition={{ duration: 0.7 }}
          />

          {/* Gradient overlay — stronger on mobile for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 sm:opacity-40" />

          {/* Badges */}
          <div className="absolute left-2 top-2 z-10 flex flex-col gap-1.5 sm:left-3 sm:top-3 sm:gap-2">
            {product.isNew && (
              <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold text-primary-foreground sm:px-3 sm:text-xs">
                NEW
              </span>
            )}
            {product.isSale && product.originalPrice && (
              <span className="rounded-full bg-destructive px-2.5 py-1 text-[10px] font-semibold text-destructive-foreground sm:px-3 sm:text-xs">
                SALE
              </span>
            )}
          </div>

          {/* Quick actions - smaller icons on mobile */}
          <motion.div
            className="absolute right-2 top-2 z-10 flex flex-col gap-1.5 sm:right-3 sm:top-3 sm:gap-2"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 15 }}
            transition={{ duration: 0.25 }}
          >
            <Button
              size="icon"
              variant="secondary"
              className={cn(
                'h-8 w-8 rounded-full shadow-sm sm:h-9 sm:w-9',
                isLiked && 'bg-primary text-primary-foreground hover:bg-primary/90'
              )}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={cn('h-4 w-4', isLiked && 'fill-current')} />
            </Button>

            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full shadow-sm sm:h-9 sm:w-9"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Add to Cart - full width, slightly smaller text on mobile */}
          <motion.div
            className="absolute bottom-2 left-2 right-2 z-10 sm:bottom-3 sm:left-3 sm:right-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 30 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="glow"
              className="w-full gap-1.5 text-sm sm:gap-2 sm:text-base"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </Button>
          </motion.div>
        </div>

        {/* Product info */}
        <div className="flex flex-1 flex-col p-3 sm:p-4">
          <h3
            className={cn(
              'line-clamp-2 font-medium transition-colors group-hover:text-primary',
              'text-sm leading-tight sm:text-base sm:leading-normal'
            )}
          >
            {product.name}
          </h3>

          <div className="mt-1.5 flex items-center gap-1 sm:mt-2">
            <Star className="h-3.5 w-3.5 fill-gold text-gold sm:h-4 sm:w-4" />
            <span className="text-xs text-muted-foreground sm:text-sm">
              {product.rating} ({product.reviews})
            </span>
          </div>

          <div className="mt-1.5 flex items-center gap-2 sm:mt-2">
            <span className="text-base font-bold text-gradient-pink sm:text-lg">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through sm:text-sm">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Color swatches - smaller on mobile */}
          {product.colors && product.colors.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center gap-1.5 sm:mt-3 sm:gap-2">
              {product.colors.slice(0, 5).map((color) => {
                const key = color.toLowerCase();
                return (
                  <div
                    key={color}
                    className={cn(
                      'h-5 w-5 rounded-full border border-border shadow-sm sm:h-6 sm:w-6',
                      colorClassMap[key] || 'bg-gray-400'
                    )}
                    title={color}
                  />
                );
              })}
              {product.colors.length > 5 && (
                <span className="text-xs text-muted-foreground">+{product.colors.length - 5}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};