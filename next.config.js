/** @type {import('next').NextConfig} */

// Detect deployment environment
const isGitHubPages = process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true';
const isVercel = process.env.VERCEL === '1';
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Only use static export for GitHub Pages, let Vercel handle normally
  ...(isGitHubPages ? { output: 'export', distDir: 'out' } : {}),
  
  // Configure base path for GitHub Pages
  basePath: isGitHubPages ? process.env.GITHUB_REPOSITORY_NAME ? `/${process.env.GITHUB_REPOSITORY_NAME}` : '' : '',
  assetPrefix: isGitHubPages ? process.env.GITHUB_REPOSITORY_NAME ? `/${process.env.GITHUB_REPOSITORY_NAME}` : '' : '',
  
  // Optimize for production
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Image optimization settings
  images: {
    unoptimized: true,
    // Enable for production domains using new format
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gavithra-portfolio.vercel.app',
      },
    ],
  },
  
  // Enable experimental features
  experimental: {
    // typedRoutes: true, // Disabled to avoid href type issues in CI/CD
    // optimizeCss: true, // Disabled due to critters dependency issue
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig