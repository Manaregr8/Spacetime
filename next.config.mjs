/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack (Next.js 16 default) handles WASM natively.
  // Empty config here signals we acknowledge Turbopack is in use.
  turbopack: {},
  async redirects() {
    return [
      {
        source: "/gk2",
        destination: "/",
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
      layers: true,
    };
    return config;
  },
};

export default nextConfig;
