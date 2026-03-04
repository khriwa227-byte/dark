import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'spa-html-rewrites',
          configureServer(server) {
            server.middlewares.use((req, _res, next) => {
              if (req.url === '/sportklaender' || req.url === '/sportklaender/') {
                req.url = '/sportklaender.html';
              }
              next();
            });
          },
        },
      ],
      build: {
        rollupOptions: {
          input: {
            main:          path.resolve(__dirname, 'index.html'),
            sportklaender: path.resolve(__dirname, 'sportklaender.html'),
          },
        },
      },
      define: {
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
