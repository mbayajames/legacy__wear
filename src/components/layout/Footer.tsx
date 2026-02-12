import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Smartphone,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';

import logoImg from '@/assets/PHOTO-2026-02-10-02-39-52.jpg';

const footerLinks = {
  shop: [
    { name: 'Shoes', path: '/shoes' },
    { name: 'Clothes', path: '/clothes' },
    { name: 'Bags', path: '/bags' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'New Arrivals', path: '/shoes' },
    { name: 'Sale', path: '/clothes' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/about' },
  ],
  support: [
    { name: 'FAQ', path: '/contact' },
    { name: 'Shipping', path: '/services' },
    { name: 'Returns', path: '/services' },
    { name: 'Size Guide', path: '/services' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/contact' },
    { name: 'Terms & Conditions', path: '/contact' },
    { name: 'Refund Policy', path: '/services' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'Youtube' },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-8 sm:py-10 lg:py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 lg:gap-8">
            <div className="w-full md:w-auto">
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={logoImg} 
                  alt="Legacy Wear" 
                  className="h-9 sm:h-10 w-auto"
                />
                <h3 className="text-xl sm:text-2xl font-bold">
                  Join the <span className="text-gradient-pink">Legacy</span>
                </h3>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                Subscribe for exclusive offers and style updates
              </p>
            </div>

            <div className="flex w-full md:w-auto min-w-0 gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 min-w-0 h-11 sm:h-12 px-4 text-sm sm:text-base bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button 
                variant="glow" 
                size="lg" 
                className="gap-2 whitespace-nowrap px-5 sm:px-6"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand + Social */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 sm:mb-6">
              <img 
                src={logoImg} 
                alt="Legacy Wear" 
                className="h-12 sm:h-14 w-auto"
              />
              <div>
                <div className="text-xl sm:text-2xl font-bold leading-tight">
                  <span className="text-foreground">Legacy</span>
                  <span className="text-gradient-pink">Wear</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Premium Fashion & Style
                </p>
              </div>
            </Link>

            <p className="text-muted-foreground mb-6 max-w-md text-sm sm:text-base">
              Elevate your style with our curated collection of premium fashion. 
              Where elegance meets modern sophistication.
            </p>

            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-base sm:text-lg">Shop</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-base sm:text-lg">Company</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support + Legal (merged or separate – here keeping separate) */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-base sm:text-lg">Support</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm sm:text-base">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1 xl:col-auto">
            <h4 className="font-semibold mb-4 text-foreground text-base sm:text-lg">Contact</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2.5 text-muted-foreground break-all">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span>info@legacywear.co.ke</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-sm">
            <div className="flex items-center gap-3">
              <img 
                src={logoImg} 
                alt="Legacy Wear" 
                className="h-7 sm:h-8 w-auto opacity-80"
              />
              <p className="text-muted-foreground">
                © 2026 Legacy Wear. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-5 sm:gap-6">
              <span className="text-muted-foreground">We Accept:</span>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-7 sm:w-12 sm:h-8 bg-secondary rounded flex items-center justify-center">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">M-Pesa</span>

                <div className="w-10 h-7 sm:w-12 sm:h-8 bg-secondary rounded flex items-center justify-center">
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">Cards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};