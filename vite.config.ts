import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
/**
 * unplugin-vue-components
 */
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { ViconsResolver } from './ViconsResolver'
import UnoCSS from 'unocss/vite'



import { viteMockServe } from "vite-plugin-mock";


import path from 'path'


export default defineConfig((config) => {
  const { command, mode } = config
  const env = loadEnv(mode, process.cwd())

  return {
    base: './',
    plugins: [
      vue(),
      viteMockServe({
        // 只在开发阶段开启 mock 服务,mock和后端服务器接口能共存，可以通过配置来区分
        localEnabled: command === 'serve',
      }),
      Components({
        dts: true,  // ts 环境下要启用
        dirs: ['src/components'],
        resolvers: [NaiveUiResolver(), ViconsResolver()]
      }),
      UnoCSS(),

    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       javascriptEnabled: true,
    //       additionalData: '@import "./src/styles/variable.scss";',
    //     },
    //   },
    // },
    server: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:9988'
        }
      }
    }
  }
})

