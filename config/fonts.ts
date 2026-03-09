import { Space_Grotesk } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

/**
 * Playpen Sans se carga via <link> en layout (Google Fonts).
 * Next.js no tiene métricas para esta fuente y mostraba warning con next/font.
 */
export const playpenSansThai = {
  variable: "--font-playpen-sans-thai",
  className: "font-playpen-sans-thai",
} as const;
