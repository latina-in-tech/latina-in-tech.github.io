/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      '/',
      '/admins/team',
      '/events/:eventId',
      '/feedback/new',
      '/newsletter',
      '/community'
    ].map(r => ({
      source: r,
      destination: '/it' + r,
      permanent: true
    }));
  }
};

module.exports = nextConfig;
