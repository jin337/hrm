import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

import { resolve } from 'path'
import compression from 'vite-plugin-compression'

import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  server: {
    open: true,
    port: 3004,
    host: '0.0.0.0',
  },
  preview: {
    open: true,
    port: 3004,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      src: resolve('src'),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    compression({ threshold: 10240 }),
    federation({
      name: 'projectApp',
      filename: 'remoteEntry.js',
      exposes: {
        './org': './src/pages/org.jsx',
        './member': './src/pages/member.jsx',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.3.1',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.3.1',
        },
        'react-router': {
          singleton: true,
          requiredVersion: '^7.4.1',
        },
        'react-redux': {
          singleton: true,
          requiredVersion: '^9.2.0',
        },
        '@reduxjs/toolkit': {
          singleton: true,
          requiredVersion: '^2.6.1',
        },
        axios: {
          singleton: true,
          requiredVersion: '^1.8.4',
        },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/chunks/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks: {
          'chunk-vendor': ['react', 'react-dom', 'react-router', 'react-redux', '@reduxjs/toolkit', 'axios'],
          'chunk-other': ['@arco-design/web-react'],
        },
      },
    },
  },
})
