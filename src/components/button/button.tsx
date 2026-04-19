"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        // MD3 Variants
        filled: "bg-primary text-primary-foreground shadow-sm hover:shadow-md hover:brightness-110",
        accent: "bg-accent text-accent-foreground shadow-sm hover:shadow-md hover:brightness-110",
        elevated: "bg-surface text-primary shadow-level-1 hover:shadow-level-2 hover:bg-primary/5",
        tonal: "bg-secondary text-secondary-foreground hover:shadow-sm hover:bg-secondary/80",
        outline: "border border-border bg-transparent text-primary hover:bg-primary/5",
        ghost: "text-primary hover:bg-primary/10",
      },
      size: {
        // MD3 sizes
        default: "h-10 px-6", // Standard 40px
        sm: "h-8 px-4 text-xs",
        lg: "h-14 px-8 text-base", // Large 56px
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  link?: string;
  asChild?: boolean;
}

export default function Button({
  className,
  variant,
  size,
  link,
  children,
  ...props
}: ButtonProps) {
  const styles = cn(buttonVariants({ variant, size, className }));

  if (link) {
    return (
      <Link href={link} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
