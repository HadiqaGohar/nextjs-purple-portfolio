// next.config.mjs
export default {
    output: 'export', // Ensure this is what you want for static export
    images: {
        domains: ['static.vecteezy.com'], // Add your image domains here
        unoptimized: true, // Use this to disable image optimization if needed
    },
};
