import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+254 700 000 000',
    description: 'Mon-Sat, 9am-6pm',
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@legacywear.co.ke',
    description: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Nairobi, Kenya',
    description: 'Westlands, ABC Place',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Sat: 9AM - 6PM',
    description: 'Sunday: Closed',
  },
];

const faqs = [
  {
    question: 'How long does delivery take?',
    answer:
      'Delivery within Nairobi takes 1-2 days. For other locations in Kenya, expect 3-5 business days.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'We offer a 7-day return policy. Items must be unworn, unwashed, and with original tags attached.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Currently, we only ship within Kenya. International shipping coming soon!',
  },
  {
    question: 'How can I track my order?',
    answer:
      "Once your order ships, you'll receive an SMS and email with tracking information.",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20 pb-12 md:pb-16">
      {/* Hero */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 md:mb-6 leading-tight">
              Get in <span className="text-gradient-pink">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards - more flexible on mobile */}
      <section className="py-10 md:py-12 -mt-6 md:-mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-card rounded-xl p-5 sm:p-6 border border-border text-center shadow-sm"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">{info.title}</h3>
                <p className="text-primary font-medium text-sm sm:text-base mt-1">{info.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input w-full"
                  />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input w-full"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="input w-full"
                />

                <textarea
                  rows={5}
                  placeholder="Your message..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="textarea w-full min-h-[120px] sm:min-h-[140px]"
                />

                <Button variant="glow" size="lg" className="w-full gap-2 text-base sm:text-lg py-6 sm:py-7">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Map + Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="h-[280px] sm:h-[320px] lg:h-[380px] rounded-2xl overflow-hidden border border-border shadow-sm">
                <iframe
                  title="Legacy Wear Location Map"
                  src="https://www.google.com/maps?q=Westlands,Nairobi&output=embed"
                  className="w-full h-full border-0 grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="bg-card rounded-2xl p-5 sm:p-6 border border-border">
                <h3 className="font-bold text-lg sm:text-xl mb-4">Follow Us</h3>
                <div className="flex gap-4 sm:gap-6">
                  <a href="#" aria-label="Instagram" title="Instagram" className="social-btn p-3 sm:p-4">
                    <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
                  </a>
                  <a href="#" aria-label="Facebook" title="Facebook" className="social-btn p-3 sm:p-4">
                    <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
                  </a>
                  <a href="#" aria-label="Twitter" title="Twitter" className="social-btn p-3 sm:p-4">
                    <Twitter className="w-6 h-6 sm:w-7 sm:h-7" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-pink-glow/20 rounded-2xl p-5 sm:p-6 border border-primary/30 flex items-center gap-4">
                <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-base sm:text-lg">Need Immediate Help?</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Start a live chat with our team
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">Frequently Asked Questions</h2>
          <div className="space-y-5 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-5 sm:p-6 rounded-xl border border-border shadow-sm"
              >
                <h3 className="font-semibold text-base sm:text-lg mb-2">{faq.question}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;