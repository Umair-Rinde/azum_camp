import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";
import type { ImageAsset } from "@/data/types";

type LightboxProps = {
  images: ImageAsset[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const current = index === null ? null : images[index];

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (event.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onNavigate]);

  return (
    <Dialog open={index !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[92vh] overflow-auto">
        <DialogTitle>{current?.caption ?? "Archive image"}</DialogTitle>
        <DialogDescription>{current?.alt}</DialogDescription>
        {current ? (
          <PlaceholderImage src={current.src} alt={current.alt} className="max-h-[70vh] rounded-md" imgClassName="object-contain" />
        ) : null}
        {images.length > 1 ? (
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => index !== null && onNavigate((index - 1 + images.length) % images.length)}
            >
              <ChevronLeft /> Previous
            </Button>
            <Button
              variant="outline"
              onClick={() => index !== null && onNavigate((index + 1) % images.length)}
            >
              Next <ChevronRight />
            </Button>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
