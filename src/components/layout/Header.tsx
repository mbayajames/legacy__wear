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
    // Track when mobile menu should close (deferred state update)
    const shouldCloseMobileMenu = useRef(false);

    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    // Handle scroll detection
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    // Close mobile menu when location changes - deferred to avoid sync state updates
    useEffect(() => {
      if (shouldCloseMobileMenu.current) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMobileMenuOpen(false);
        shouldCloseMobileMenu.current = false;
      }
    }, [location]);
  
    return (
      <>
        <header
          className={cn(
            'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
            isScrolled
              ? 'glass py-3'
              : 'bg-transparent py-5'
          )}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
               <Link to="/" className="flex items-center gap-2">
                 <motion.div
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                 >
                   <img src={logoImg} alt="Legacy Wear" className="h-10 md:h-12 w-auto" />
                 </motion.div>
               </Link>
  
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        'nav-link text-sm font-medium uppercase tracking-wider',
                        location.pathname === link.path && 'text-primary active'
                      )}
                      onClick={() => { shouldCloseMobileMenu.current = true; }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
  
              {/* Right Actions */}
              <div className="flex items-center gap-2 md:gap-4">
                {/* Search */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="hover:text-primary"
                >
                  <Search className="w-5 h-5" />
                </Button>
  
                {/* Wishlist */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden md:flex hover:text-primary"
                >
                  <Heart className="w-5 h-5" />
                </Button>
  
                {/* User */}
                <Link to="/login">
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <User className="w-5 h-5" />
                  </Button>
                </Link>
  
                {/* Cart */}
                <Link to="/cart" className="relative">
                  <Button variant="ghost" size="icon" className="hover:text-primary">
                    <ShoppingBag className="w-5 h-5" />
                    {totalItems > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium"
                      >
                        {totalItems}
                      </motion.span>
                    )}
                  </Button>
                </Link>
  
                {/* Mobile Menu Toggle */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>
            </div>
          </div>
        </header>
  
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 z-40 lg:hidden"
            >
              <div
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.nav
                className="absolute right-0 top-0 bottom-0 w-80 bg-card border-l border-border p-8 pt-24"
              >
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={cn(
                          'block text-lg font-medium py-2 transition-colors hover:text-primary',
                          location.pathname === link.path && 'text-primary'
                        )}
                        onClick={() => { shouldCloseMobileMenu.current = true; }}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
  
        {/* Search Modal */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-start justify-center pt-32 px-4"
            >
              <div
                className="absolute inset-0 bg-background/90 backdrop-blur-md"
                onClick={() => setIsSearchOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="relative w-full max-w-2xl"
              >
                 <form onSubmit={handleSearch} className="relative">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
                   <input
                     type="text"
                     placeholder="Search for products..."
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full h-16 pl-14 pr-14 bg-card border border-border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                     autoFocus
                   />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                 </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };
