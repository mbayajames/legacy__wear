import { type NavLinkProps, NavLink as RouterNavLink } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface NavLinkCustomProps extends NavLinkProps {
  className?: string;
  activeClassName?: string;
}

export function NavLink({
  className,
  activeClassName,
  children,
  ...props
}: NavLinkCustomProps) {
  return (
    <RouterNavLink
      className={({ isActive }: { isActive: boolean }) =>
        cn(
          // Base styles (mobile-first)
          'inline-flex items-center justify-center',
          'transition-colors duration-200',
          'hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          
          // Responsive padding – generous touch target on mobile
          'min-h-[44px] min-w-[44px]',           // accessibility / touch target
          'px-3 py-2 sm:px-4 sm:py-2.5',         // bigger on ≥640px
          'text-sm sm:text-base',                // slightly larger text on bigger screens
          
          // Optional: rounded corners look better on mobile
          'rounded-md',

          isActive && cn(
            'text-foreground font-medium',
            activeClassName
          ),
          className
        )
      }
      {...props}
    >
      {children}
    </RouterNavLink>
  );
}