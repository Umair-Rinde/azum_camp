import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-deep-forest text-warm-white hover:bg-forest",
        gold: "bg-gold font-cta text-[#0f2e22] hover:bg-gold/90",
        outline:
          "border border-deep-forest/25 bg-transparent text-deep-forest hover:bg-cream",
        ghost: "text-deep-forest hover:bg-cream",
        link: "text-deep-forest underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-9 px-3",
        lg: "h-12 px-7 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button };
