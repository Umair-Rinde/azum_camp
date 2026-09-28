import { motion, useReducedMotion } from "framer-motion";
import type { ImageAsset } from "@/data/types";
import { cn } from "@/lib/utils";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Staggered two-column collage: frames hug each photo’s natural size,
 * with lift + zoom hover.
 */
export function HeroImageStrip({ images }: { images: ImageAsset[] }) {
  const reduceMotion = useReducedMotion();
  const tiles = images.slice(0, 4);
  const left = [tiles[0], tiles[2]].filter(Boolean);
  const right = [tiles[1], tiles[3]].filter(Boolean);

  return (
    <motion.div
      className="mx-auto w-full max-w-md lg:ml-6 lg:max-w-none lg:translate-x-4 xl:translate-x-6"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.1,
            delayChildren: reduceMotion ? 0 : 0.15,
          },
        },
      }}
    >
      <div className="grid grid-cols-2 items-start gap-3 sm:gap-4">
        <div className="flex flex-col gap-3 sm:gap-4">
          {left.map((image, index) => (
            <HeroTile
              key={`${image.src}-left-${index}`}
              image={image}
              reduceMotion={!!reduceMotion}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:mt-12 sm:gap-4 lg:mt-14">
          {right.map((image, index) => (
            <HeroTile
              key={`${image.src}-right-${index}`}
              image={image}
              reduceMotion={!!reduceMotion}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function HeroTile({
  image,
  reduceMotion,
  loading,
}: {
  image: ImageAsset;
  reduceMotion: boolean;
  loading: "lazy" | "eager";
}) {
  return (
    <motion.div
      className="group relative w-full will-change-transform"
      variants={{
        hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: reduceMotion ? 0 : 0.65, ease },
        },
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -10,
              scale: 1.03,
              transition: { type: "spring", stiffness: 340, damping: 24 },
            }
      }
    >
      <PlaceholderImage
        src={image.src}
        alt={image.alt}
        className={cn(
          "h-auto w-full rounded-2xl border border-white/15 bg-transparent",
          "shadow-[0_12px_32px_rgba(0,0,0,0.35)]",
          "transition-[box-shadow,border-color] duration-500",
          "group-hover:border-gold-soft/50",
          "group-hover:shadow-[0_22px_44px_-10px_rgba(0,0,0,0.55),0_0_0_1px_rgba(212,188,122,0.35)]",
        )}
        imgClassName="h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
        loading={loading}
      />
    </motion.div>
  );
}
