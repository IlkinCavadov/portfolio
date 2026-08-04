import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils/cn';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
  children: ReactNode;
}

const baseClasses = 'inline-flex h-11 items-center gap-2.5 rounded-lg px-5 text-sm transition-colors duration-150';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-btn1-bg font-semibold tracking-[-0.01em] text-btn1-tx hover:bg-btn1-bg-hover',
  secondary:
    'border border-line-2 bg-btn2-bg font-medium text-tx-strong hover:border-line-strong hover:bg-btn2-bg-hover hover:text-tx-hover',
};

export const Button = ({ variant = 'secondary', icon, children, className, ...anchorProps }: ButtonProps) => (
  <a className={cn(baseClasses, variantClasses[variant], className)} {...anchorProps}>
    {children}
    {icon}
  </a>
);
