import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isPlaceholder(value: string | undefined | null) {
  if (!value) return true;
  return value.trim() === "" || /^\[[^\]]+\]$/.test(value.trim());
}

export function displayValue(value: string | undefined | null, fallback = "To be announced"): string {
  if (isPlaceholder(value) || !value) return fallback;
  return value;
}
