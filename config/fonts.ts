import { Space_Grotesk } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const playpenSansThai = {
  variable: "--font-playpen-sans-thai",
  className: "font-playpen-sans-thai",
} as const;
