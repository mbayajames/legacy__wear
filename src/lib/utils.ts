import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const colorMap: Record<string, string> = {
  black: '#000000',
  white: '#ffffff',
  pink: 'hsl(330, 85%, 60%)',
  'rose gold': '#b76e79',
  brown: '#8B4513',
  tan: '#D2B48C',
  navy: '#000080',
  silver: '#C0C0C0',
  tortoise: '#5C4033',
  charcoal: '#36454F',
  burgundy: '#800020',
  emerald: '#50C878',
  blush: '#DE5D83',
  'hot pink': '#FF69B4',
};

export function getColorValue(colorName: string): string {
  return colorMap[colorName.toLowerCase()] || '#888888';
}
