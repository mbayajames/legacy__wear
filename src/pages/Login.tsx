 import { useState } from 'react';
 import { Link, useNavigate } from 'react-router-dom';
 import { motion } from 'framer-motion';
 import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
 import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import logoImg from '../assets/PHOTO-2026-02-10-02-39-52.jpg';

 const Login = () => {
   const navigate = useNavigate();
   const { toast } = useToast();
   const [showPassword, setShowPassword] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [formData, setFormData] = useState({
     email: '',
     password: '',
   });
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsLoading(true);
 
     // Simulate login
     setTimeout(() => {
       toast({
         title: "Welcome back!",
         description: "You have successfully logged in.",
       });
       setIsLoading(false);
       navigate('/');
     }, 1500);
   };
 
   return (
     <div className="min-h-screen flex">
       {/* Left Side - Form */}
       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
         <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="w-full max-w-md"
         >
            <Link to="/" className="inline-block mb-8">
              <img src={logoImg} alt="Legacy Wear" className="h-12 w-auto" />
            </Link>
 
           <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
           <p className="text-muted-foreground mb-8">
             Sign in to your account to continue shopping
           </p>
 
            {/* Google Sign In */}
            <button
              type="button"
              className="w-full h-12 flex items-center justify-center gap-3 bg-card border border-border rounded-lg hover:bg-accent transition-colors font-medium"
              onClick={() => {
                toast({
                  title: "Google Sign In",
                  description: "Connect Lovable Cloud to enable Google authentication.",
                });
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <div className="relative flex items-center gap-4 my-2">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground uppercase">or sign in with email</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 pl-12 pr-4 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full h-12 pl-12 pr-12 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="••••••••"
                    required
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

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 rounded border-border" />
                  <span className="text-sm text-muted-foreground">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full gap-2"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
 
           <div className="mt-8 text-center">
             <p className="text-muted-foreground">
               Don't have an account?{' '}
               <Link to="/register" className="text-primary font-medium hover:underline">
                 Sign up
               </Link>
             </p>
           </div>
         </motion.div>
       </div>
 
       {/* Right Side - Image */}
       <div className="hidden lg:block lg:w-1/2 relative">
         <img
           src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80"
           alt="Fashion"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20" />
         <div className="absolute inset-0 flex items-center justify-center">
           <div className="text-center text-white p-8">
             <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
               Style That Speaks
             </h2>
             <p className="text-lg drop-shadow-md max-w-md">
               Discover the latest trends and elevate your wardrobe with Legacy Wear
             </p>
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default Login;