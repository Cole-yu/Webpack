import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(({ command, mode, ssrBuild }) => {
  console.log('command', command)
  console.log('mode', mode)
  console.log('ssrBuild', ssrBuild)

  if (mode === 'development') {
    return {
      root: resolve(__dirname, ''), // process.cwd()
      base: './',
      server: {
        host: '0.0.0.0',
        port: 8080
      },
      resolve:{
        alias:{
          '@': './src',
        },
        extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
      },
      // dev 独有配置
      plugins: [vue(), vueJsx()],
    }
  } else {
    // command === 'build'
    return {
      root: process.cwd(), // resolve(__dirname, './index.html')
      base: './',
      resolve:{
        alias:{
          '@': './src',
        },
        extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
      },
      build:{
        outDir: 'dist',
        cssCodeSplit: true,
      },
      plugins: [vue(), vueJsx()],
      // build 独有配置
    }
  }
})