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
          'transition-colors hover:text-foreground',
          isActive && activeClassName,
          className
        )
      }
      {...props}
    >
      {children}
    </RouterNavLink>
  );
}
