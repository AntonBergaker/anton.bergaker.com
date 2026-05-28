import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    distDir: 'dist',
    trailingSlash: true,

    redirects: async () => [
        { source: "/decimaltime", destination: "/decimal-time", permanent: true },
        { source: "/minisweeper", destination: "/projects/minisweeper", permanent: true },
        { source: "/pentapop", destination: "/projects/pentapop", permanent: true },
        { source: "/thestorygoeson", destination: "/projects/the-story-goes-on", permanent: true },
        { source: "/vrc_tower_defense", destination: "/projects/super-tower-defense", permanent: true },
    ],

  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public",
    nextImageExportOptimizer_exportFolderPath: "dist",
    nextImageExportOptimizer_quality: "90",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
};

export default nextConfig;
