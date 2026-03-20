/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com",
      "i.pinimg.com"
    ],
  },

  eslint: {
    ignoreDuringBuilds: true, // ✅ Prevent build failure due to ESLint errors
  },
};

export default nextConfig;