import "@/lib/styles/global.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "@/lib/providers/providers";
import { siteConfig } from "@/config/site";
import { spaceGrotesk, playpenSansThai } from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen text-foreground bg-app-background font-sans antialiased",
          spaceGrotesk.variable,
          playpenSansThai.variable,
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
            storageKey: "theme",
          }}
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
