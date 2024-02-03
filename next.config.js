/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: '736486047-files.gitbook.io',
            port: '',
            pathname: '/~/**',
        }, ],
    },
}

module.exports = nextConfig