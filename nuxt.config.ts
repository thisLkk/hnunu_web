// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ["@nuxt/eslint"],
  eslint: {
    // options here
  },
  css: ["~/assets/scss/reset.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;'
        }
      }
    }
  },
  devServer: {
    loadingTemplate: () => `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
        </head>
        <body>
          <div style="font-size: 70px;text-align: center;margin-top:50%;color: #02bbbd;">
            hnunu 欢迎你
          </div>
        </body>
      </html>`
  }
})
