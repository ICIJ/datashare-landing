import globals from 'globals'
import icijeslint from '@icij/eslint-config'

import { globals as iconsGlobals } from './bin/icons.js'

export default [
  {
    ignores: ['public']
  },

  // ICIJ ESLint shared config (includes Vue, TypeScript, Stylistic and Vitest)
  ...icijeslint.configs.all,

  // Node scripts for common tasks and config files
  {
    files: ['bin/**/*.{cjs,mjs,js}', '*.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      }
    }
  },

  // Vitest are written for the browser and must include browser globals
  {
    files: [
      'src/**/*.{js,vue}',
      'tests/**/*.js',
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
      }
    }
  },

  // Specific rules for the project
  {
    languageOptions: {
      globals: {
        ...iconsGlobals,
        // Vite uses process.env for environment variables
        process: true
      }
    },
    rules: {
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    }
  }
]
