import { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SearchX, ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lower = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.description.toLowerCase().includes(lower) ||
        p.category.toLowerCase().includes(lower)
    );
  }, [query]);

  return (
    <div className="min-h-screen pt-16 sm:pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Back button - more touch-friendly on mobile */}
        <Link to="/">
          <Button
            variant="ghost"
            size="sm"
            className="mb-6 sm:mb-8 gap-1.5 text-base sm:text-sm font-medium -ml-3 sm:-ml-0"
          >
            <ArrowLeft className="w-5 h-5 sm:w-4 sm:h-4" />
            Back
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Search results for "
            <span className="text-primary">{query}</span>
            "
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 md:mb-10">
            {results.length} {results.length === 1 ? 'product' : 'products'} found
          </p>
        </motion.div>

        {results.length > 0 ? (
          <div
            className={`
              grid gap-4 
              grid-cols-2             /* mobile – 2 columns */
              xs:grid-cols-2          /* very small phones stay 2 */
              sm:grid-cols-2          /* small tablets */
              md:grid-cols-3          /* medium tablets / small laptops */
              lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 /* desktop → wide screens */
            `}
          >
            {results.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                // Optional: pass smaller padding/variant to ProductCard on mobile if needed
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-20 md:py-24">
            <SearchX className="w-20 h-20 sm:w-24 sm:h-24 text-muted-foreground/70 mx-auto mb-6" />
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">
              No products found
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-md mx-auto">
              Try searching with different keywords or browse our full catalog
            </p>
            <Link to="/">
              <Button size="lg" className="text-base sm:text-lg px-8">
                Browse All Products
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;