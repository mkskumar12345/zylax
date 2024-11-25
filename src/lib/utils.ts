import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getApiTokenHeader(token: string | undefined) {
  return {
    "x-access-token": token || "",
  };
}
