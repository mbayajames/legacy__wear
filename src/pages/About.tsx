import { motion } from 'framer-motion';
import { Heart, Star, Users, Award, Target, Eye } from 'lucide-react';

const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '500+', label: 'Products' },
  { value: '4.9', label: 'Average Rating' },
  { value: '5+', label: 'Years Experience' },
];

const values = [
  {
    icon: Heart,
    title: 'Passion for Fashion',
    description:
      'We live and breathe style. Every piece we curate reflects our deep love for fashion.',
  },
  {
    icon: Star,
    title: 'Quality First',
    description:
      'We never compromise on quality. Each item meets our strict standards of excellence.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description:
      'Your satisfaction drives us. We go above and beyond to exceed your expectations.',
  },
  {
    icon: Award,
    title: 'Authentic Style',
    description:
      'We celebrate individuality. Our collections help you express your unique personality.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
            alt="Fashion store interior"
            className="h-full w-full object-cover brightness-[0.7] sm:brightness-[0.85]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/70" />
        </div>

        <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 sm:mb-6 leading-tight">
              Our <span className="text-gradient-pink">Story</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Legacy Wear was born from a passion to bring premium, elegant fashion to everyone. We
              believe that style is a form of self-expression, and everyone deserves to feel
              confident and beautiful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-card border-y border-border">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-pink mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1"
            >
              <div className="aspect-[4/3] sm:aspect-[3/2] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80"
                  alt="Fashion model"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <div className="space-y-10 md:space-y-12 order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  To empower individuals through fashion by providing high-quality, stylish, and
                  affordable clothing and accessories that inspire confidence and self-expression.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  To become the leading fashion destination in Kenya, known for exceptional quality,
                  innovative styles, and outstanding customer experience.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-card">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Our <span className="text-gradient-pink">Values</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="bg-background rounded-2xl p-5 sm:p-6 border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Brand Image */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80"
              alt="Fashion collection showcase"
              className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent flex items-center">
              <div className="p-6 sm:p-10 md:p-12 lg:p-16 max-w-md sm:max-w-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                  Join the <span className="text-gradient-pink">Legacy</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  Be part of a community that celebrates style, quality, and confidence. Every
                  purchase tells a story of elegance and sophistication.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;