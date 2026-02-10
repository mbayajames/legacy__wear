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
    });
  };

  const formatPrice = (price: number) => `KSh ${price.toLocaleString()}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-card">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                NEW
              </span>
            )}
            {product.isSale && product.originalPrice && (
              <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded-full">
                SALE
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <motion.div
            className="absolute top-3 right-3 flex flex-col gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              size="icon"
              variant="secondary"
              className={cn(
                'w-9 h-9 rounded-full',
                isLiked && 'bg-primary text-primary-foreground'
              )}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={cn('w-4 h-4', isLiked && 'fill-current')} />
            </Button>

            <Button size="icon" variant="secondary" className="w-9 h-9 rounded-full">
              <Eye className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Add to Cart */}
          <motion.div
            className="absolute bottom-3 left-3 right-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <Button variant="glow" className="w-full gap-2" onClick={handleAddToCart}>
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </Button>
          </motion.div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>

          <div className="flex items-center gap-1 mt-2">
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews})
            </span>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-lg font-bold text-gradient-pink">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Colors */}
          {product.colors && (
            <div className="flex items-center gap-1 mt-3">
              {product.colors.slice(0, 4).map((color) => {
                const key = color.toLowerCase();
                return (
                  <div
                    key={color}
                    className={cn(
                      'w-4 h-4 rounded-full border border-border',
                      colorClassMap[key] || 'color-default'
                    )}
                    title={color}
                  />
                );
              })}
              {product.colors.length > 4 && (
                <span className="text-xs text-muted-foreground">
                  +{product.colors.length - 4}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
