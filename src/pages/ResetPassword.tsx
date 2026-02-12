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
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md sm:max-w-lg md:max-w-md space-y-8"
      >
        <div className="text-center sm:text-left">
          <Link to="/" className="inline-block mb-6 sm:mb-8">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight">
              <span className="text-foreground">Legacy</span>
              <span className="text-gradient-pink">Wear</span>
            </span>
          </Link>
        </div>

        {!isSuccess ? (
          <>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                Reset Password
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                Please enter your new password below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 mt-6 sm:mt-8">
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1.5 sm:mb-2">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground pointer-events-none" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full h-11 sm:h-12 pl-10 sm:pl-12 pr-10 sm:pr-12 bg-card border border-border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="••••••••"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none p-1"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 sm:w-5 h-4 sm:h-5" />
                    ) : (
                      <Eye className="w-4 sm:w-5 h-4 sm:h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium mb-1.5 sm:mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground pointer-events-none" />
                  <input
                    id="confirm-password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full h-11 sm:h-12 pl-10 sm:pl-12 pr-4 bg-card border border-border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full gap-2 text-base sm:text-lg h-11 sm:h-12 mt-2"
                disabled={isLoading}
              >
                {isLoading ? 'Resetting...' : 'Reset Password'}
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
              </Button>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center py-12 sm:py-16"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-success" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">Password Reset!</h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Your password has been successfully reset.<br className="hidden sm:inline" /> Redirecting to login...
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ResetPassword;