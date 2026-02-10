 import { useState } from 'react';
 import { Link } from 'react-router-dom';
 import { motion } from 'framer-motion';
 import { Mail, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 
 const ForgotPassword = () => {
   const [email, setEmail] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsLoading(true);
 
     // Simulate API call
     setTimeout(() => {
       setIsLoading(false);
       setIsSubmitted(true);
     }, 1500);
   };
 
   return (
     <div className="min-h-screen flex items-center justify-center p-8">
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         className="w-full max-w-md"
       >
         <Link to="/" className="inline-block mb-8">
           <span className="text-3xl font-bold">
             <span className="text-foreground">Legacy</span>
             <span className="text-gradient-pink">Wear</span>
           </span>
         </Link>
 
         {!isSubmitted ? (
           <>
             <h1 className="text-3xl font-bold mb-2">Forgot Password?</h1>
             <p className="text-muted-foreground mb-8">
               No worries! Enter your email and we'll send you a reset link.
             </p>
 
             <form onSubmit={handleSubmit} className="space-y-6">
               <div>
                 <label className="block text-sm font-medium mb-2">Email</label>
                 <div className="relative">
                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                   <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className="w-full h-12 pl-12 pr-4 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                     placeholder="your@email.com"
                     required
                   />
                 </div>
               </div>
 
               <Button
                 type="submit"
                 variant="hero"
                 size="xl"
                 className="w-full gap-2"
                 disabled={isLoading}
               >
                 {isLoading ? 'Sending...' : 'Send Reset Link'}
                 <ArrowRight className="w-5 h-5" />
               </Button>
             </form>
           </>
         ) : (
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="text-center"
           >
             <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
               <CheckCircle className="w-10 h-10 text-success" />
             </div>
             <h1 className="text-3xl font-bold mb-2">Check Your Email</h1>
             <p className="text-muted-foreground mb-8">
               We've sent a password reset link to <span className="text-primary font-medium">{email}</span>
             </p>
             <p className="text-sm text-muted-foreground mb-6">
               Didn't receive the email?{' '}
               <button
                 onClick={() => setIsSubmitted(false)}
                 className="text-primary hover:underline"
               >
                 Click to resend
               </button>
             </p>
           </motion.div>
         )}
 
         <div className="mt-8">
           <Link
             to="/login"
             className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
           >
             <ArrowLeft className="w-4 h-4" />
             Back to Login
           </Link>
         </div>
       </motion.div>
     </div>
   );
 };
 
 export default ForgotPassword;