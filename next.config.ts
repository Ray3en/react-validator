import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
        config.resolve.fallback = { fs: false }; // Отключение fs в клиентской сборке
    }

    return config;
},
};

export default nextConfig;
