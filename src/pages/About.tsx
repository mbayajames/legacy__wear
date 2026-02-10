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
     description: 'We live and breathe style. Every piece we curate reflects our deep love for fashion.',
   },
   {
     icon: Star,
     title: 'Quality First',
     description: 'We never compromise on quality. Each item meets our strict standards of excellence.',
   },
   {
     icon: Users,
     title: 'Customer Focus',
     description: 'Your satisfaction drives us. We go above and beyond to exceed your expectations.',
   },
   {
     icon: Award,
     title: 'Authentic Style',
     description: 'We celebrate individuality. Our collections help you express your unique personality.',
   },
 ];
 
 const About = () => {
   return (
     <div className="min-h-screen pt-20">
       {/* Hero Section */}
       <section className="relative py-24 md:py-32 overflow-hidden">
         <div className="absolute inset-0">
           <img
             src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
             alt="Fashion store"
             className="w-full h-full object-cover opacity-30"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
         </div>
 
         <div className="container mx-auto px-4 relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-3xl mx-auto text-center"
           >
             <h1 className="text-4xl md:text-6xl font-bold mb-6">
               Our <span className="text-gradient-pink">Story</span>
             </h1>
             <p className="text-xl text-muted-foreground">
               Legacy Wear was born from a passion to bring premium, elegant fashion 
               to everyone. We believe that style is a form of self-expression, and 
               everyone deserves to feel confident and beautiful.
             </p>
           </motion.div>
         </div>
       </section>
 
       {/* Stats Section */}
       <section className="py-16 bg-card border-y border-border">
         <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {stats.map((stat, index) => (
               <motion.div
                 key={stat.label}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="text-center"
               >
                 <div className="text-4xl md:text-5xl font-bold text-gradient-pink mb-2">
                   {stat.value}
                 </div>
                 <div className="text-muted-foreground">{stat.label}</div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Mission & Vision */}
       <section className="section-padding">
         <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
               <img
                 src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80"
                 alt="Fashion"
                 className="rounded-2xl shadow-2xl"
               />
             </motion.div>
 
             <div className="space-y-8">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                     <Target className="w-6 h-6 text-primary" />
                   </div>
                   <h2 className="text-2xl font-bold">Our Mission</h2>
                 </div>
                 <p className="text-muted-foreground">
                   To empower individuals through fashion by providing high-quality, 
                   stylish, and affordable clothing and accessories that inspire 
                   confidence and self-expression.
                 </p>
               </motion.div>
 
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
               >
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                     <Eye className="w-6 h-6 text-primary" />
                   </div>
                   <h2 className="text-2xl font-bold">Our Vision</h2>
                 </div>
                 <p className="text-muted-foreground">
                   To become the leading fashion destination in Kenya, known for 
                   exceptional quality, innovative styles, and outstanding customer 
                   experience.
                 </p>
               </motion.div>
             </div>
           </div>
         </div>
       </section>
 
       {/* Values Section */}
       <section className="section-padding bg-card">
         <div className="container mx-auto px-4">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-12"
           >
             <h2 className="text-3xl md:text-4xl font-bold mb-4">
               Our <span className="text-gradient-pink">Values</span>
             </h2>
             <p className="text-muted-foreground max-w-lg mx-auto">
               The principles that guide everything we do
             </p>
           </motion.div>
 
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {values.map((value, index) => (
               <motion.div
                 key={value.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="bg-background rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors"
               >
                 <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                   <value.icon className="w-7 h-7 text-primary" />
                 </div>
                 <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                 <p className="text-muted-foreground">{value.description}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Team/Brand Image */}
       <section className="section-padding">
         <div className="container mx-auto px-4">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative rounded-3xl overflow-hidden"
           >
             <img
               src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80"
               alt="Fashion collection"
               className="w-full h-[400px] md:h-[500px] object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent flex items-center">
               <div className="p-8 md:p-16 max-w-lg">
                 <h2 className="text-3xl md:text-4xl font-bold mb-4">
                   Join the <span className="text-gradient-pink">Legacy</span>
                 </h2>
                 <p className="text-muted-foreground">
                   Be part of a community that celebrates style, quality, and confidence. 
                   Every purchase tells a story of elegance and sophistication.
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