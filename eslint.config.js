// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu(
    {
      type: 'app',

      stylistic: {
        indent: 2,
        quotes: 'single',
      },

      typescript: true,
      vue: {
        overrides: {
          'vue/block-order': ['error', {
            order: ['script', 'template', 'style'],
          }],
        },
      },
      jsonc: false,
      yaml: false,
      ignores: [
        '**/fixtures',
      ],
    },

    {
      files: ['**/*.ts'],
      rules: {},
    },

    {
      rules: {},
    },
  ),
)
