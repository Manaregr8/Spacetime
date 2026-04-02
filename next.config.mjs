/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack (Next.js 16 default) handles WASM natively.
  // Empty config here signals we acknowledge Turbopack is in use.
  turbopack: {},
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
