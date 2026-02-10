import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter, Grid3X3, LayoutGrid, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/products/ProductCard';
import type { Product } from '@/data/products';
import { getProductsByCategory } from '@/data/products';

interface ShopPageProps {
  category: Product['category'];
  title: string;
  description: string;
  bannerImage: string;
}

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

export const ShopPage = ({
  category,
  title,
  description,
  bannerImage,
}: ShopPageProps) => {
  const [sortBy, setSortBy] = useState('featured');
  const [gridCols, setGridCols] = useState<2 | 3 | 4>(3);
  const [showFilters, setShowFilters] = useState(false);

  const products = getProductsByCategory(category);

  const sortedProducts = useMemo(() => {
    const sorted = [...products];

    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return [
          ...sorted.filter(p => p.isNew),
          ...sorted.filter(p => !p.isNew),
        ];
      default:
        return sorted;
    }
  }, [products, sortBy]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={bannerImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient-pink">{title}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto px-4">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Toolbar */}
      <section className="sticky top-[72px] z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>
              <span className="text-sm text-muted-foreground hidden sm:block">
                {sortedProducts.length} products
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Grid Toggle */}
              <div className="hidden md:flex items-center gap-1 bg-card rounded-lg p-1">
                <Button
                  variant={gridCols === 2 ? 'secondary' : 'ghost'}
                  size="icon"
                  className="w-8 h-8"
                  onClick={() => setGridCols(2)}
                >
                  <LayoutGrid className="w-4 h-4" />
                </Button>
                <Button
                  variant={gridCols === 3 ? 'secondary' : 'ghost'}
                  size="icon"
                  className="w-8 h-8"
                  onClick={() => setGridCols(3)}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={gridCols === 4 ? 'secondary' : 'ghost'}
                  size="icon"
                  className="w-8 h-8"
                  onClick={() => setGridCols(4)}
                >
                  <Filter className="w-4 h-4" />
                </Button>
              </div>

              {/* Sort */}
              <select
                aria-label="Sort products"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-9 px-3 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="pt-4 border-t border-border mt-4"
            >
              <div className="flex flex-wrap gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Price Range
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-24 h-9 px-3 bg-card border border-border rounded-lg text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-24 h-9 px-3 bg-card border border-border rounded-lg text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Rating
                  </label>
                  <select
                    aria-label="Filter by rating"
                    className="h-9 px-3 bg-card border border-border rounded-lg text-sm"
                  >
                    <option>All Ratings</option>
                    <option>4+ Stars</option>
                    <option>4.5+ Stars</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Availability
                  </label>
                  <select
                    aria-label="Filter by availability"
                    className="h-9 px-3 bg-card border border-border rounded-lg text-sm"
                  >
                    <option>All</option>
                    <option>In Stock</option>
                    <option>On Sale</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div
            className={`grid gap-4 md:gap-6 ${
              gridCols === 2
                ? 'grid-cols-2'
                : gridCols === 3
                ? 'grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            }`}
          >
            {sortedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No products found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
