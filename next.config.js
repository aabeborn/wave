/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		reactCompiler: true
	},
	images: {
		domains: ['i.scdn.co', 'localhost']
	}
};

export default nextConfig;
