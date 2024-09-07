// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
)
