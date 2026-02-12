import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, User, Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '../../context/CartContext';
import { cn } from '@/lib/utils';
import logoImg from '@/assets/PHOTO-2026-02-10-02-39-52.jpg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Shoes', path: '/shoes' },
  { name: 'Clothes', path: '/clothes' },
  { name: 'Bags', path: '/bags' },
  { name: 'Accessories', path: '/accessories' },
  { name: 'Contact', path: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const prevLocation = useRef(location.pathname);

  // Better scroll handling + throttle
  useEffect(() => {
    const ticking = { current: false };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      // Defer state updates to avoid synchronous setState in effect
      const timer = setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
      }, 0);
      prevLocation.current = location.pathname;
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/85 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-4 sm:py-5'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo - responsive sizing */}
            <Link to="/" className="flex items-center gap-2.5 min-w-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={logoImg}
                  alt="Legacy Wear"
                  className="h-9 sm:h-10 md:h-11 lg:h-12 w-auto object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation - better spacing */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'nav-link text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary',
                      location.pathname === link.path && 'text-primary font-bold'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Right Actions - better spacing & visibility */}
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex hover:text-primary"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex hover:text-primary"
              >
                <Heart className="h-5 w-5" />
              </Button>

              <Link to="/login">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <User className="h-5 w-5" />
                </Button>
              </Link>

              <Link to="/cart" className="relative">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <ShoppingBag className="h-5 w-5" />
                  {totalItems > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </Button>
              </Link>

              {/* Mobile Menu Toggle + Search on mobile */}
              <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="sm:hidden"
                >
                  <Search className="h-5 w-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - improved sidebar + better animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-xs bg-background shadow-2xl"
            >
              <div className="flex flex-col h-full p-6 pt-20">
                <div className="space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.2 }}
                    >
                      <Link
                        to={link.path}
                        className={cn(
                          'flex items-center py-3.5 px-4 text-lg font-medium rounded-lg transition-colors',
                          location.pathname === link.path
                            ? 'bg-primary/10 text-primary'
                            : 'hover:bg-muted'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Optional extra mobile actions */}
                <div className="mt-auto pt-8 border-t">
                  <div className="flex flex-col gap-4">
                    <Link
                      to="/wishlist"
                      className="flex items-center gap-3 py-3 px-4 text-lg font-medium hover:bg-muted rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Heart className="h-5 w-5" /> Wishlist
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center gap-3 py-3 px-4 text-lg font-medium hover:bg-muted rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <User className="h-5 w-5" /> Account
                    </Link>
                  </div>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay - improved for mobile */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 sm:px-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/90 backdrop-blur-md"
              onClick={() => setIsSearchOpen(false)}
            />

            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-xl sm:max-w-2xl"
            >
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products, categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-14 sm:h-16 pl-14 pr-14 bg-card border border-border rounded-xl text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content jump under fixed header */}
      <div className={cn('h-16 sm:h-20', isScrolled && 'h-14 sm:h-16')} />
    </>
  );
};