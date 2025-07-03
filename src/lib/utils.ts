import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge
 * This is a utility function commonly used in shadcn components
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
