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
    <div className="min-h-screen flex items-center justify-center bg-background px-5 py-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl space-y-8"
      >
        {/* Logo / Brand */}
        <div className="flex justify-center sm:justify-start">
          <Link to="/" className="inline-block">
            <span className="text-3xl sm:text-4xl font-bold tracking-tight">
              <span className="text-foreground">Legacy</span>
              <span className="text-gradient-pink">Wear</span>
            </span>
          </Link>
        </div>

        {!isSubmitted ? (
          <>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Forgot Password?
              </h1>
              <p className="mt-3 text-base sm:text-lg text-muted-foreground">
                No worries! Enter your email and we'll send you a reset link.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full h-12 pl-11 pr-4 rounded-lg border border-input bg-background text-base placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-colors"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="hero" // assuming this is your primary/gradient variant
                size="xl"
                className="w-full justify-center gap-2 text-base sm:text-lg py-6 sm:py-7"
                disabled={isLoading || !email.trim()}
              >
                {isLoading ? 'Sending...' : 'Send Reset Link'}
                {!isLoading && <ArrowRight className="h-5 w-5" />}
              </Button>
            </form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center space-y-6 py-4"
          >
            <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-success" />
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Check Your Email
              </h1>
              <p className="mt-3 text-base sm:text-lg text-muted-foreground">
                We've sent a password reset link to{' '}
                <span className="text-primary font-medium break-all">{email}</span>
              </p>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground">
              Didn't receive the email?{' '}
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setEmail('');
                }}
                className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary/30 rounded"
              >
                Click to resend
              </button>
            </p>
          </motion.div>
        )}

        <div className="text-center sm:text-left pt-4 sm:pt-6">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;