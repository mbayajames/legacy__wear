import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, RotateCcw, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/products/ProductCard';
import { getFeaturedProducts } from '@/data/products';

const categories = [
  {
    name: 'Shoes',
    path: '/shoes',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80',
    count: '50+ Styles',
  },
  {
    name: 'Clothes',
    path: '/clothes',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
    count: '100+ Pieces',
  },
  {
    name: 'Bags',
    path: '/bags',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80',
    count: '30+ Designs',
  },
  {
    name: 'Accessories',
    path: '/accessories',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80',
    count: '80+ Items',
  },
];

const features = [
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Free shipping on orders above KSh 10,000',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: 'M-Pesa, Cards & Bank transfers accepted',
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    description: '7-day hassle-free return policy',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'The quality is exceptional! Legacy Wear has become my go-to for all fashion needs.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    name: 'James K.',
    text: 'Fast delivery and amazing customer service. Highly recommend!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Grace W.',
    text: 'Found my perfect evening dress here. The pink collection is stunning!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
];

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section – improved spacing & text scaling */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 hero-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>

        {/* Animated blob – smaller on mobile */}
        <motion.div
          className="absolute -top-10 -right-10 sm:top-1/4 sm:right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20 pb-12 sm:pb-0">
          <div className="max-w-xl lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Sparkles className="w-4 h-4" />
                New Collection 2024
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6"
            >
              Elevate Your
              <br className="sm:hidden" />
              <span className="text-gradient-pink">Style Legacy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-lg"
            >
              Discover premium fashion that defines elegance. From stunning heels to statement accessories, find your perfect look.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4"
            >
              <Link to="/shoes" className="w-full xs:w-auto">
                <Button variant="hero" size="lg" className="w-full xs:w-auto gap-2">
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about" className="w-full xs:w-auto">
                <Button variant="outline-light" size="lg" className="w-full xs:w-auto">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator – hide on very small screens if needed */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden xs:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Bar – tighter on mobile */}
      <section className="py-10 sm:py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 sm:gap-4 text-center sm:text-left"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-base sm:text-lg">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories – better spacing & aspect ratio */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Shop by <span className="text-gradient-pink">Category</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md sm:max-w-lg mx-auto">
              Explore our curated collections designed to elevate your wardrobe
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={category.path} className="group block">
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 sm:group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h3 className="text-base sm:text-xl font-bold text-foreground mb-0.5 sm:mb-1">{category.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{category.count}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products – same grid logic */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-12"
          >
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                Featured <span className="text-gradient-pink">Collection</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">Handpicked pieces for your style</p>
            </div>
            <Link to="/shoes">
              <Button variant="outline-light" className="gap-2 text-sm sm:text-base">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Sale Banner – better mobile readability */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-background to-pink-glow/20" />
        <motion.div
          className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 w-64 h-64 sm:w-80 sm:h-80 bg-primary/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-xl sm:max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold text-base sm:text-lg">Limited Time Offer</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
                Pink Friday <span className="text-gradient-pink">Sale</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
                Get up to 30% off on selected items. Don't miss out!
              </p>
              <Link to="/clothes" className="inline-block">
                <Button variant="hero" size="xl" className="gap-2 text-base sm:text-lg px-6 sm:px-8">
                  Shop the Sale
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials – stack better on mobile */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              What Our <span className="text-gradient-pink">Customers Say</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">Join thousands of satisfied fashion lovers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-border text-center sm:text-left"
              >
                <div className="flex justify-center sm:justify-start gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">"{testimonial.text}"</p>
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <span className="font-medium text-foreground text-sm sm:text-base">{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – simpler & centered */}
      <section className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Ready to <span className="text-gradient-pink">Upgrade</span> Your Style?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              Join the Legacy Wear family and discover fashion that speaks to you.
            </p>
            <Link to="/shoes">
              <Button variant="hero" size="xl" className="gap-2 px-6 sm:px-8">
                Start Shopping
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;