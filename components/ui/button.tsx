import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold font-display transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default:
          "bg-electric-blue text-white hover:bg-[#155ACD] shadow-md shadow-electric-blue/25 focus-visible:ring-electric-blue",
        saffron:
          "bg-saffron text-white hover:bg-[#D96F08] shadow-md shadow-saffron/25 focus-visible:ring-saffron",
        whatsapp:
          "bg-wa-green text-white hover:bg-[#1EAF56] shadow-md shadow-wa-green/25 focus-visible:ring-wa-green",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-muted",
        ghost:
          "bg-transparent text-foreground hover:bg-muted",
        muted:
          "bg-muted text-muted-foreground hover:bg-muted/80",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-11 px-5 text-sm",
        lg: "h-13 px-7 text-base",
        xl: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
