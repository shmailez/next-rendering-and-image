/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        // pathname: '/150/**',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
