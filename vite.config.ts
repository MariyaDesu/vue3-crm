import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
/**
 * unplugin-vue-components
 */
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { ViconsResolver } from './ViconsResolver'
import UnoCSS from 'unocss/vite'



import { viteMockServe } from "vite-plugin-mock";


import { resolve } from 'path'

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,  // ts 环境下要启用
      dirs: ['src/components'],
      resolvers: [NaiveUiResolver(), ViconsResolver()]
    }),
    UnoCSS(),
    viteMockServe({
      mockPath: './mock',
      enable: true,
      watchFiles: true,
      logger: true, //是否在控制台显示请求日志
    })

  ],
  resolve: {
    alias: {
      '@': pathResolve('src')
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9988'
      }
    }
  }
})
