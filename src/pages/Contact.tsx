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
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="text-gradient-pink">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-8 -mt-8">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">{info.title}</h3>
              <p className="text-primary font-medium">{info.value}</p>
              <p className="text-sm text-muted-foreground">{info.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="input"
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="input"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="input"
              />

              <textarea
                rows={5}
                placeholder="Your message..."
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="textarea"
              />

              <Button variant="glow" size="lg" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Map + Social */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
            <div className="h-[300px] rounded-2xl overflow-hidden border border-border">
              <iframe
                title="Legacy Wear Location Map"
                src="https://www.google.com/maps?q=Westlands,Nairobi&output=embed"
                className="w-full h-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  title="Instagram"
                  className="social-btn"
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  title="Facebook"
                  className="social-btn"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  title="Twitter"
                  className="social-btn"
                >
                  <Twitter />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-pink-glow/20 rounded-2xl p-6 border border-primary/30 flex items-center gap-4">
              <MessageCircle className="w-7 h-7 text-primary" />
              <div>
                <h3 className="font-bold">Need Immediate Help?</h3>
                <p className="text-muted-foreground">
                  Start a live chat with our team
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-background p-6 rounded-xl border border-border"
            >
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
