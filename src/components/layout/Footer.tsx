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
         <div className="container mx-auto px-4 py-12">
           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
             <div>
               <h3 className="text-2xl font-bold mb-2">
                 Join the <span className="text-gradient-pink">Legacy</span>
               </h3>
               <p className="text-muted-foreground">
                 Subscribe for exclusive offers and style updates
               </p>
             </div>
             <div className="flex w-full md:w-auto gap-2">
               <input
                 type="email"
                 placeholder="Enter your email"
                 className="flex-1 md:w-80 h-12 px-4 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
               />
               <Button variant="glow" size="lg" className="gap-2">
                 <Send className="w-4 h-4" />
                 Subscribe
               </Button>
             </div>
           </div>
         </div>
       </div>
 
       {/* Main Footer */}
       <div className="container mx-auto px-4 py-16">
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
           {/* Brand */}
           <div className="col-span-2 md:col-span-3 lg:col-span-2">
             <Link to="/" className="inline-block mb-6">
               <span className="text-3xl font-bold">
                 <span className="text-foreground">Legacy</span>
                 <span className="text-gradient-pink">Wear</span>
               </span>
             </Link>
             <p className="text-muted-foreground mb-6 max-w-sm">
               Elevate your style with our curated collection of premium fashion. 
               Where elegance meets modern sophistication.
             </p>
             <div className="flex gap-3">
               {socialLinks.map((social) => (
                 <motion.a
                   key={social.label}
                   href={social.href}
                   whileHover={{ scale: 1.1, y: -2 }}
                   whileTap={{ scale: 0.95 }}
                   className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                   aria-label={social.label}
                 >
                   <social.icon className="w-5 h-5" />
                 </motion.a>
               ))}
             </div>
           </div>
 
           {/* Shop Links */}
           <div>
             <h4 className="font-semibold mb-4 text-foreground">Shop</h4>
             <ul className="space-y-3">
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
 
           {/* Company Links */}
           <div>
             <h4 className="font-semibold mb-4 text-foreground">Company</h4>
             <ul className="space-y-3">
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
 
           {/* Support Links */}
           <div>
             <h4 className="font-semibold mb-4 text-foreground">Support</h4>
             <ul className="space-y-3">
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
           <div>
             <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
             <ul className="space-y-3">
               <li className="flex items-center gap-2 text-muted-foreground">
                 <Phone className="w-4 h-4 text-primary" />
                 <span>+254 700 000 000</span>
               </li>
               <li className="flex items-center gap-2 text-muted-foreground">
                 <Mail className="w-4 h-4 text-primary" />
                 <span>info@legacywear.co.ke</span>
               </li>
               <li className="flex items-start gap-2 text-muted-foreground">
                 <MapPin className="w-4 h-4 text-primary mt-1" />
                 <span>Nairobi, Kenya</span>
               </li>
             </ul>
           </div>
         </div>
       </div>
 
       {/* Payment Methods & Copyright */}
       <div className="border-t border-border">
         <div className="container mx-auto px-4 py-6">
           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
             <p className="text-muted-foreground text-sm">
               © 2024 Legacy Wear. All rights reserved.
             </p>
             <div className="flex items-center gap-4">
               <span className="text-muted-foreground text-sm">We Accept:</span>
               <div className="flex items-center gap-2">
                 <div className="w-12 h-8 bg-secondary rounded flex items-center justify-center">
                   <Smartphone className="w-5 h-5 text-success" />
                 </div>
                 <span className="text-xs text-muted-foreground">M-Pesa</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-12 h-8 bg-secondary rounded flex items-center justify-center">
                   <CreditCard className="w-5 h-5 text-primary" />
                 </div>
                 <span className="text-xs text-muted-foreground">Cards</span>
               </div>
             </div>
           </div>
         </div>
       </div>
     </footer>
   );
 };