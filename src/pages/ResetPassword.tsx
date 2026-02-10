 import { useState } from 'react';
 import { Link, useNavigate } from 'react-router-dom';
 import { motion } from 'framer-motion';
 import { Lock, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 import { useToast } from '@/hooks/use-toast';
 
 const ResetPassword = () => {
   const navigate = useNavigate();
   const { toast } = useToast();
   const [showPassword, setShowPassword] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [isSuccess, setIsSuccess] = useState(false);
   const [formData, setFormData] = useState({
     password: '',
     confirmPassword: '',
   });
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
 
     if (formData.password !== formData.confirmPassword) {
       toast({
         title: "Passwords don't match",
         description: "Please make sure your passwords match.",
         variant: "destructive",
       });
       return;
     }
 
     setIsLoading(true);
 
     // Simulate API call
     setTimeout(() => {
       setIsLoading(false);
       setIsSuccess(true);
       setTimeout(() => {
         navigate('/login');
       }, 2000);
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
 
         {!isSuccess ? (
           <>
             <h1 className="text-3xl font-bold mb-2">Reset Password</h1>
             <p className="text-muted-foreground mb-8">
               Enter your new password below.
             </p>
 
             <form onSubmit={handleSubmit} className="space-y-6">
               <div>
                 <label className="block text-sm font-medium mb-2">New Password</label>
                 <div className="relative">
                   <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                   <input
                     type={showPassword ? 'text' : 'password'}
                     value={formData.password}
                     onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                     className="w-full h-12 pl-12 pr-12 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                     placeholder="••••••••"
                     required
                     minLength={8}
                   />
                   <button
                     type="button"
                     onClick={() => setShowPassword(!showPassword)}
                     className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                   >
                     {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                   </button>
                 </div>
               </div>
 
               <div>
                 <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                 <div className="relative">
                   <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                   <input
                     type={showPassword ? 'text' : 'password'}
                     value={formData.confirmPassword}
                     onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                     className="w-full h-12 pl-12 pr-4 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                     placeholder="••••••••"
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
                 {isLoading ? 'Resetting...' : 'Reset Password'}
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
             <h1 className="text-3xl font-bold mb-2">Password Reset!</h1>
             <p className="text-muted-foreground">
               Your password has been successfully reset. Redirecting to login...
             </p>
           </motion.div>
         )}
       </motion.div>
     </div>
   );
 };
 
 export default ResetPassword;