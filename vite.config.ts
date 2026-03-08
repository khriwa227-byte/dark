import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import obfuscator from 'rollup-plugin-obfuscator';

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
              if (
                req.url &&
                !req.url.startsWith('/@') &&
                !req.url.startsWith('/node_modules') &&
                !req.url.includes('.') &&
                req.url !== '/'
              ) {
                req.url = '/index.html';
              }
              next();
            });
          },
        },
      ],
      build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
          },
          plugins: [
            obfuscator({
              options: {
                compact: true,
                controlFlowFlattening: false,
                deadCodeInjection: false,
                identifierNamesGenerator: 'mangled',
                renameGlobals: false,
                stringArray: true,
                stringArrayEncoding: ['base64'],
                stringArrayThreshold: 0.75,
                splitStrings: true,
                splitStringsChunkLength: 5,
              },
            }),
          ],
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
