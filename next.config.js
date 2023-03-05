/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.licdn.com',
				port: '',
				pathname: '/dms/image/**',
			},
			{
				protocol: 'https',
				hostname: 'upload.wikimedia.org',
				port: '',
				pathname: '/wikipedia/commons/**/**/**',
			},
		],
	},
};

module.exports = nextConfig
