 import { motion } from 'framer-motion';
 import { 
   Truck, 
   RotateCcw, 
   Gift, 
   Crown, 
   Palette, 
   HeadphonesIcon,
   CreditCard,
   Package,
   Clock,
   Shield
 } from 'lucide-react';
 
 const services = [
   {
     icon: Truck,
     title: 'Express Delivery',
     description: 'Fast and reliable delivery across Kenya. Same-day delivery available in Nairobi.',
     features: ['Same-day delivery in Nairobi', 'Nationwide shipping', 'Real-time tracking'],
   },
   {
     icon: RotateCcw,
     title: 'Easy Returns',
     description: '7-day hassle-free return policy. No questions asked if you\'re not satisfied.',
     features: ['7-day return window', 'Free return shipping', 'Full refund guarantee'],
   },
   {
     icon: Gift,
     title: 'Gift Wrapping',
     description: 'Premium gift wrapping service for that special someone. Make your gifts memorable.',
     features: ['Luxury packaging', 'Personal message cards', 'Gift receipts'],
   },
   {
     icon: Crown,
     title: 'VIP Membership',
     description: 'Join our exclusive membership program for early access and special discounts.',
     features: ['Early access to sales', 'Exclusive discounts', 'Birthday rewards'],
   },
   {
     icon: Palette,
     title: 'Personal Styling',
     description: 'Get personalized fashion advice from our expert stylists. Look your best always.',
     features: ['One-on-one consultations', 'Outfit recommendations', 'Wardrobe planning'],
   },
   {
     icon: HeadphonesIcon,
     title: '24/7 Support',
     description: 'Our dedicated support team is always here to help with any questions or concerns.',
     features: ['Live chat support', 'Phone support', 'Email assistance'],
   },
 ];
 
 const paymentMethods = [
   { name: 'M-Pesa', description: 'Instant mobile payments' },
   { name: 'Visa', description: 'Credit & debit cards' },
   { name: 'Mastercard', description: 'Worldwide accepted' },
   { name: 'Bank Transfer', description: 'Direct bank payments' },
 ];
 
 const deliveryInfo = [
   { icon: Clock, title: 'Processing Time', value: '1-2 days' },
   { icon: Truck, title: 'Nairobi Delivery', value: 'Same day' },
   { icon: Package, title: 'Countrywide', value: '3-5 days' },
   { icon: Shield, title: 'Insurance', value: 'Included' },
 ];
 
 const Services = () => {
   return (
     <div className="min-h-screen pt-20">
       {/* Hero Section */}
       <section className="py-24 md:py-32 bg-gradient-to-b from-card to-background">
         <div className="container mx-auto px-4">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-3xl mx-auto text-center"
           >
             <h1 className="text-4xl md:text-6xl font-bold mb-6">
               Our <span className="text-gradient-pink">Services</span>
             </h1>
             <p className="text-xl text-muted-foreground">
               We go beyond just selling products. Experience premium services 
               designed to make your shopping journey exceptional.
             </p>
           </motion.div>
         </div>
       </section>
 
       {/* Services Grid */}
       <section className="section-padding">
         <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {services.map((service, index) => (
               <motion.div
                 key={service.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group"
               >
                 <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                   <service.icon className="w-7 h-7 text-primary" />
                 </div>
                 <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                 <p className="text-muted-foreground mb-4">{service.description}</p>
                 <ul className="space-y-2">
                   {service.features.map((feature) => (
                     <li key={feature} className="flex items-center gap-2 text-sm">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                       <span className="text-muted-foreground">{feature}</span>
                     </li>
                   ))}
                 </ul>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Payment Methods */}
       <section className="section-padding bg-card">
         <div className="container mx-auto px-4">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-12"
           >
             <h2 className="text-3xl md:text-4xl font-bold mb-4">
               Payment <span className="text-gradient-pink">Options</span>
             </h2>
             <p className="text-muted-foreground max-w-lg mx-auto">
               We accept multiple payment methods for your convenience
             </p>
           </motion.div>
 
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {paymentMethods.map((method, index) => (
               <motion.div
                 key={method.name}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="bg-background rounded-xl p-6 text-center border border-border"
               >
                 <CreditCard className="w-10 h-10 text-primary mx-auto mb-4" />
                 <h4 className="font-semibold mb-1">{method.name}</h4>
                 <p className="text-sm text-muted-foreground">{method.description}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Delivery Information */}
       <section className="section-padding">
         <div className="container mx-auto px-4">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-12"
           >
             <h2 className="text-3xl md:text-4xl font-bold mb-4">
               Delivery <span className="text-gradient-pink">Information</span>
             </h2>
             <p className="text-muted-foreground max-w-lg mx-auto">
               Fast, reliable shipping to your doorstep
             </p>
           </motion.div>
 
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {deliveryInfo.map((info, index) => (
               <motion.div
                 key={info.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="text-center"
               >
                 <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                   <info.icon className="w-8 h-8 text-primary" />
                 </div>
                 <div className="text-2xl font-bold text-gradient-pink mb-1">{info.value}</div>
                 <div className="text-muted-foreground">{info.title}</div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Size Guide */}
       <section className="section-padding bg-card">
         <div className="container mx-auto px-4">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto"
           >
             <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">
                 Size <span className="text-gradient-pink">Guide</span>
               </h2>
               <p className="text-muted-foreground">
                 Find your perfect fit with our comprehensive size charts
               </p>
             </div>
 
             <div className="overflow-x-auto">
               <table className="w-full bg-background rounded-xl border border-border">
                 <thead>
                   <tr className="border-b border-border">
                     <th className="p-4 text-left font-semibold">Size</th>
                     <th className="p-4 text-center font-semibold">Bust (cm)</th>
                     <th className="p-4 text-center font-semibold">Waist (cm)</th>
                     <th className="p-4 text-center font-semibold">Hips (cm)</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr className="border-b border-border">
                     <td className="p-4 font-medium">XS</td>
                     <td className="p-4 text-center text-muted-foreground">78-82</td>
                     <td className="p-4 text-center text-muted-foreground">60-64</td>
                     <td className="p-4 text-center text-muted-foreground">84-88</td>
                   </tr>
                   <tr className="border-b border-border">
                     <td className="p-4 font-medium">S</td>
                     <td className="p-4 text-center text-muted-foreground">82-86</td>
                     <td className="p-4 text-center text-muted-foreground">64-68</td>
                     <td className="p-4 text-center text-muted-foreground">88-92</td>
                   </tr>
                   <tr className="border-b border-border">
                     <td className="p-4 font-medium">M</td>
                     <td className="p-4 text-center text-muted-foreground">86-90</td>
                     <td className="p-4 text-center text-muted-foreground">68-72</td>
                     <td className="p-4 text-center text-muted-foreground">92-96</td>
                   </tr>
                   <tr className="border-b border-border">
                     <td className="p-4 font-medium">L</td>
                     <td className="p-4 text-center text-muted-foreground">90-94</td>
                     <td className="p-4 text-center text-muted-foreground">72-76</td>
                     <td className="p-4 text-center text-muted-foreground">96-100</td>
                   </tr>
                   <tr>
                     <td className="p-4 font-medium">XL</td>
                     <td className="p-4 text-center text-muted-foreground">94-98</td>
                     <td className="p-4 text-center text-muted-foreground">76-80</td>
                     <td className="p-4 text-center text-muted-foreground">100-104</td>
                   </tr>
                 </tbody>
               </table>
             </div>
           </motion.div>
         </div>
       </section>
     </div>
   );
 };
 
 export default Services;