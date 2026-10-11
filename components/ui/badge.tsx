import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold font-display transition-colors",
  {
    variants: {
      variant: {
        blue: "bg-electric-blue/10 text-electric-blue border border-electric-blue/20",
        saffron: "bg-saffron/10 text-saffron border border-saffron/20",
        emerald: "bg-emerald/10 text-emerald border border-emerald/20",
        muted: "bg-muted text-muted-foreground border border-border",
      },
    },
    defaultVariants: { variant: "blue" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
