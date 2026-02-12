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
  className?: string;
}

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low → High' },
  { value: 'price-high', label: 'Price: High → Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

export const ShopPage = ({
  category,
  title,
  description,
  bannerImage,
  className,
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
          ...sorted.filter((p) => p.isNew),
          ...sorted.filter((p) => !p.isNew),
        ];
      default:
        return sorted;
    }
  }, [products, sortBy]);

  return (
    <div className={`pt-16 md:pt-20 ${className || ''}`}>
      {/* Hero Banner – better mobile scaling */}
      <section className="relative h-[220px] xs:h-[260px] sm:h-[300px] md:h-[380px] lg:h-[420px] overflow-hidden">
        <img
          src={bannerImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-transparent/30" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-3 md:mb-4">
              <span className="text-gradient-pink">{title}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Toolbar – sticky, better spacing on mobile */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border md:top-20">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 text-sm sm:gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>

              <span className="text-sm text-muted-foreground hidden xs:inline-block">
                {sortedProducts.length} products
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              {/* Grid Toggle – hide on very small screens or show simplified */}
              <div className="hidden sm:flex items-center gap-1 bg-card rounded-lg p-1">
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
                  disabled={sortedProducts.length < 8} // optional: disable if too few items
                >
                  <Filter className="w-4 h-4" /> {/* consider better icon */}
                </Button>
              </div>

              {/* Sort Dropdown */}
              <label className="sr-only" htmlFor="sort-select">Sort products</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort products by"
                title="Sort products by"
                className="h-9 px-3 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary min-w-[140px] sm:min-w-[160px]"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Filters Panel – better mobile wrapping */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="pt-4 border-t border-border mt-3 md:mt-4"
            >
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Price Range
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      className="w-full h-9 px-3 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="w-full h-9 px-3 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5" htmlFor="rating-filter">
                    Rating
                  </label>
                  <select
                    id="rating-filter"
                    aria-label="Filter by rating"
                    title="Filter by rating"
                    className="w-full h-9 px-3 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>All Ratings</option>
                    <option>4 Stars & Up</option>
                    <option>4.5 Stars & Up</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5" htmlFor="availability-filter">
                    Availability
                  </label>
                  <select
                    id="availability-filter"
                    aria-label="Filter by availability"
                    title="Filter by availability"
                    className="w-full h-9 px-3 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
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

      {/* Products Grid – responsive columns */}
      <section className="py-6 md:py-10 lg:py-12">
        <div className="container mx-auto px-4">
          <div
            className={`
              grid gap-4 
              grid-cols-2 
              xs:grid-cols-2 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-${gridCols}
              ${gridCols === 4 ? 'xl:grid-cols-4' : ''}
            `}
          >
            {sortedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-16 md:py-24">
              <p className="text-lg text-muted-foreground">No products found.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
