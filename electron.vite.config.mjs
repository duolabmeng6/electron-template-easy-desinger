import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'

import {fileURLToPath, URL} from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { TDesignResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    publicDir: "public",

    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@': fileURLToPath(new URL('src/renderer/src', import.meta.url))

      }
    },
    optimizeDeps: {
      include: [
        'src/renderer/src/win/design.json',
        'src/renderer/src/win/__load_data.js',
        'src/renderer/src/win/__aux_code.js',
        'src/renderer/src/win/event.js',
      ]
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        imports: ['vue'],
        resolvers: [
          ElementPlusResolver(),

          // Auto import icon components
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon',
          }),
          TDesignResolver({
            library: 'vue-next'
          })
        ],
      }),
      Components({
        resolvers: [
          // Auto register icon components
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep'],
          }),
          // Auto register Element Plus components
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
          TDesignResolver({
            library: 'vue-next'
          })
        ],
      }),

    ],

  }
})
