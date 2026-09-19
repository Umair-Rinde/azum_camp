import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-md border border-input bg-warm-white px-3 py-2 text-sm placeholder:text-muted focus-visible:border-forest",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
