/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      // API_URL: 'http://localhost:1337/api',
        API_URL: 'https://lemonpush.cf/cms/api',
        // DOMAIN_BACKEND: 'http://localhost:1337',
        DOMAIN_BACKEND: 'https://lemonpush.cf/cms',
        STRIPE_PUBLISHABLE_KEY:process.env.STRIPE_PUBLISHABLE_KEY,
        STRIPE_SECRECT_KEY:process.env.STRIPE_SECRECT_KEY
    },
    images: {
        domains: ['lemonpush.cf'],
        // domains: ['localhost'],
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
          test: /\.(zip)$/, // Replace "your-file-extension" with the actual file extension you're working with
        //   use: 'your-loader', // Replace "your-loader" with the appropriate loader module
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/docx/',
            },
          },
        });
    
        // Add other webpack configurations or loaders if needed
    
        return config;
      },
}

module.exports = nextConfig
