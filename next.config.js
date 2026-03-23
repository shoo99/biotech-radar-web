/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API_URL: 'http://220.122.161.122:8001',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://220.122.161.122:8001/api/:path*'
      }
    ]
  },
  // 이미지 최적화 설정
  images: {
    domains: ['sysofti.com'],
  },
}