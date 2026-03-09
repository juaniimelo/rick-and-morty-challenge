/** @type {import('next').NextConfig} */
const nextConfig = {
  // Solo generamos modo standalone cuando lo pidamos explícitamente
  // (por ejemplo, dentro del contenedor Docker)
  ...(process.env.NEXT_OUTPUT_STANDALONE === "true"
    ? { output: "standalone" }
    : {}),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        pathname: "/api/character/avatar/**",
      },
    ],
  },
};

export default nextConfig;
