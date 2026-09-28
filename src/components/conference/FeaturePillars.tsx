import { FlaskConical, Globe2, Layers } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { Highlight } from "@/data/types";

const icons = [Globe2, FlaskConical, Layers];
const ease = [0.22, 1, 0.36, 1] as const;

export function FeaturePillars({ items }: { items: Highlight[] }) {
  const reduceMotion = useReducedMotion();

  const stagger: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  const item: Variants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.6, ease },
    },
  };

  return (
    <motion.div
      className="grid gap-8 md:grid-cols-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger}
    >
      {items.slice(0, 3).map((pillar, index) => {
        const Icon = icons[index % icons.length];
        return (
          <motion.div key={pillar.title} variants={item} className="text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-deep-forest/10 text-deep-forest">
              <Icon className="size-7" strokeWidth={1.5} />
            </div>
            <h3 className="mt-5 text-2xl leading-tight">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{pillar.description}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
