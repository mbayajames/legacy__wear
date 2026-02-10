import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/products/ProductCard';
import { getNewArrivals, getFeaturedProducts } from '@/data/products';

const Index = () => {
  const newArrivals = getNewArrivals();
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Legacy Wear
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Discover the latest trends in fashion with our curated collection of premium footwear, clothing, and accessories.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Link to="/shop" className="text-primary hover:underline">
              View All
            </Link>
          </div>

          {newArrivals.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newArrivals.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No new arrivals at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked selections from our latest collection, featuring the hottest trends and timeless classics.
            </p>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No featured products available.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground">
              Explore our wide range of products
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Shoes', path: '/shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80' },
              { name: 'Clothes', path: '/clothes', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80' },
              { name: 'Bags', path: '/bags', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80' },
              { name: 'Accessories', path: '/accessories', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80' },
            ].map((category) => (
              <Link
                key={category.name}
                to={category.path}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in Style</h2>
          <p className="mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter to receive exclusive offers, latest trends, and style inspiration directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-primary bg-background"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-background text-primary font-semibold rounded-lg hover:bg-background/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
