import { useState } from "react";
import { PLACEHOLDER_IMAGE } from "@/data/constants";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
};

export function PlaceholderImage({
  src,
  alt,
  className,
  imgClassName,
  loading = "lazy",
}: PlaceholderImageProps) {
  const [failed, setFailed] = useState(false);
  const resolved = !src || failed ? PLACEHOLDER_IMAGE : src;

  return (
    <div className={cn("overflow-hidden bg-cream", className)}>
      <img
        src={resolved}
        alt={alt}
        loading={loading}
        onError={() => setFailed(true)}
        className={cn("size-full object-cover", imgClassName)}
      />
    </div>
  );
}
