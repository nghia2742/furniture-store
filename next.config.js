/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'daisyui.com',
          },
          {
            protocol: 'https',
            hostname: 'flowbite.s3.amazonaws.com',
          },
          {
            protocol: 'https',
            hostname: 'i.imgur.com',
          },
          {
            protocol: 'https',
            hostname: 'apifurniture-1-o7035645.deta.app',
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
          },
          
        ],
      },
}

module.exports = nextConfig
