export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Rick & Morty Comparador",
  description:
    "Compará personajes de Rick and Morty, buscá por nombre y descubrí en qué episodios aparecen juntos. App construida con Next.js y la API de Rick and Morty.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
  ],
};
