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
    <div className="min-h-screen pt-16 sm:pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Our <span className="text-gradient-pink">Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              We go beyond just selling products. Experience premium services 
              designed to make your shopping journey exceptional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card rounded-2xl p-5 sm:p-6 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 lg:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Payment <span className="text-gradient-pink">Options</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
              We accept multiple payment methods for your convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="bg-background rounded-xl p-5 sm:p-6 text-center border border-border hover:shadow-sm transition-shadow"
              >
                <CreditCard className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3 sm:mb-4" />
                <h4 className="font-semibold text-base sm:text-lg mb-1">{method.name}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 lg:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Delivery <span className="text-gradient-pink">Information</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
              Fast, reliable shipping to your doorstep
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {deliveryInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <info.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gradient-pink mb-1">
                  {info.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">{info.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Guide */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Size <span className="text-gradient-pink">Guide</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Find your perfect fit with our comprehensive size charts
              </p>
            </div>

            <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0">
              <table className="w-full min-w-[480px] bg-background rounded-xl border border-border">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-3 sm:p-4 text-left font-semibold text-sm sm:text-base">Size</th>
                    <th className="p-3 sm:p-4 text-center font-semibold text-sm sm:text-base">Bust (cm)</th>
                    <th className="p-3 sm:p-4 text-center font-semibold text-sm sm:text-base">Waist (cm)</th>
                    <th className="p-3 sm:p-4 text-center font-semibold text-sm sm:text-base">Hips (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: 'XS', bust: '78-82', waist: '60-64', hips: '84-88' },
                    { size: 'S',  bust: '82-86', waist: '64-68', hips: '88-92' },
                    { size: 'M',  bust: '86-90', waist: '68-72', hips: '92-96' },
                    { size: 'L',  bust: '90-94', waist: '72-76', hips: '96-100' },
                    { size: 'XL', bust: '94-98', waist: '76-80', hips: '100-104' },
                  ].map((row) => (
                    <tr key={row.size} className="border-b border-border last:border-b-0">
                      <td className="p-3 sm:p-4 font-medium text-sm sm:text-base">{row.size}</td>
                      <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-muted-foreground">{row.bust}</td>
                      <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-muted-foreground">{row.waist}</td>
                      <td className="p-3 sm:p-4 text-center text-xs sm:text-sm text-muted-foreground">{row.hips}</td>
                    </tr>
                  ))}
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