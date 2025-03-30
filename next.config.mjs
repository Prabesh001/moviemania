/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", 
        hostname: "image.tmdb.org",
        pathname: "/t/p/**", 
      },
      {
        protocol: "https", 
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;
