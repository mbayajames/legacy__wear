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
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Form (takes full width on mobile, half on desktop) */}
      <div className="flex-1 flex items-center justify-center p-5 sm:p-8 lg:p-12 bg-background min-h-screen lg:min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md lg:max-w-lg space-y-8"
        >
          <div>
            <Link to="/" className="inline-block mb-6 sm:mb-8">
              <img
                src={logoImg}
                alt="Legacy Wear"
                className="h-10 sm:h-12 w-auto"
              />
            </Link>

            <h1 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Sign in to your account to continue shopping
            </p>
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            className="w-full h-11 sm:h-12 flex items-center justify-center gap-3 bg-card border border-border rounded-lg hover:bg-accent transition-colors font-medium text-sm sm:text-base shadow-sm"
            onClick={() => {
              toast({
                title: "Google Sign In",
                description: "Connect Lovable Cloud to enable Google authentication.",
              });
            }}
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="relative flex items-center gap-4 my-4 sm:my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
              or sign in with email
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1.5 sm:mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 sm:h-12 pl-11 sm:pl-12 pr-4 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow text-base"
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5 sm:mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full h-11 sm:h-12 pl-11 sm:pl-12 pr-11 sm:pr-12 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow text-base"
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none focus:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm text-muted-foreground">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              variant="hero"
              size="xl"
              className="w-full gap-2 text-base sm:text-lg h-11 sm:h-12"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          <div className="text-center text-sm sm:text-base">
            <p className="text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/register" className="text-primary font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Hero Image (hidden on mobile, shown on lg+) */}
      <div className="hidden lg:block lg:flex-1 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80&auto=format&fit=crop"
          alt="Fashion showcase"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background/60 via-background/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center p-6 xl:p-12">
          <div className="text-center text-white max-w-lg">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-xl">
              Style That Speaks
            </h2>
            <p className="text-base sm:text-lg lg:text-xl drop-shadow-lg opacity-90">
              Discover the latest trends and elevate your wardrobe with Legacy Wear
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;