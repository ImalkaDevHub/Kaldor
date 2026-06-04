import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
  className,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/5",
    ghost: "bg-transparent text-text-secondary hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
