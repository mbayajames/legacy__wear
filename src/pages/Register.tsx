import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate registration
    setTimeout(() => {
      toast({
        title: "Account created!",
        description: "Welcome to Legacy Wear",
      });
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Form Section - comes first on mobile */}
      <div className="flex-1 flex items-center justify-center p-5 sm:p-8 md:p-12 lg:p-16 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md lg:max-w-lg space-y-8"
        >
          <div>
            <Link to="/" className="inline-block mb-6 sm:mb-8">
              <span className="text-3xl sm:text-4xl font-bold tracking-tight">
                <span className="text-foreground">Legacy</span>
                <span className="text-gradient-pink">Wear</span>
              </span>
            </Link>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              Create Account
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Join Legacy Wear and discover your style
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 sm:h-12 pl-11 pr-4 bg-card border border-border rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-primary/50
                           text-base placeholder:text-muted-foreground/70"
                  required
                  aria-required="true"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 sm:h-12 pl-11 pr-4 bg-card border border-border rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-primary/50
                           text-base placeholder:text-muted-foreground/70"
                  required
                  aria-required="true"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full h-11 sm:h-12 pl-11 pr-12 bg-card border border-border rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-primary/50
                           text-base placeholder:text-muted-foreground/70"
                  required
                  minLength={8}
                  aria-required="true"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full h-11 sm:h-12 pl-11 pr-4 bg-card border border-border rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-primary/50
                           text-base placeholder:text-muted-foreground/70"
                  required
                  minLength={8}
                  aria-required="true"
                />
              </div>
            </div>

            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 rounded border-border mt-0.5 accent-primary"
                required
                aria-required="true"
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground leading-tight">
                I agree to the{' '}
                <Link to="/terms" className="text-primary hover:underline font-medium">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-primary hover:underline font-medium">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              variant="hero" // assuming this is your primary/gradient variant
              size="xl"
              className="w-full gap-2 h-11 sm:h-12 text-base sm:text-lg font-medium"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          <div className="text-center text-sm pt-4">
            <p className="text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Hero Image Section - hidden on mobile, becomes background/overlay on md+ */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=85&auto=format&fit=crop"
          alt="Fashion showcase"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background/60 via-background/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="text-center text-white max-w-lg">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-5 drop-shadow-xl">
              Style That Speaks
            </h2>
            <p className="text-lg lg:text-xl drop-shadow-lg opacity-90">
              Discover the latest trends and elevate your wardrobe with Legacy Wear
            </p>
          </div>
        </div>
      </div>

      {/* Optional subtle mobile background hint */}
      <div className="lg:hidden fixed inset-0 -z-10 opacity-10 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=60&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover blur-sm"
        />
      </div>
    </div>
  );
};

export default Register;