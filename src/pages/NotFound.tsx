import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg text-center">
        {/* Optional fun/illustrative element – scales nicely */}
        <div className="mb-6 text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-black leading-none tracking-tight text-primary/40">
          404
        </div>

        {/* You can replace this with an SVG illustration if you prefer */}
        {/* <img src="/404-illustration.svg" alt="" className="mx-auto mb-8 h-40 w-auto sm:h-48 md:h-56" /> */}

        <h1 className="mb-3 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Page not found
        </h1>

        <p className="mb-8 text-lg text-muted-foreground sm:text-xl md:text-2xl">
          Sorry, we couldn’t find the page you’re looking for.
          <br className="hidden sm:inline" />
          The link may be broken or the page has been removed.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:px-8 sm:py-4 sm:text-lg"
        >
          ← Back to Home
        </a>
      </div>

      {/* Optional helpful footer / extra links – appears nicely on larger screens */}
      <footer className="mt-12 text-sm text-muted-foreground sm:mt-16">
        <p>Need help? <a href="/contact" className="underline hover:text-foreground">Contact support</a></p>
      </footer>
    </div>
  );
};

export default NotFound;