import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import pluginImport from 'eslint-plugin-import'
import stylistic from '@stylistic/eslint-plugin'

import { globals as iconsGlobals } from './bin/icons'

export default defineConfigWithVueTs(
  {
    files: ['**/*.{ts,mts,tsx,vue}'],
    languageOptions: {
      globals: {
        ...Object.fromEntries(Object.keys(iconsGlobals).map((key) => [key, 'readonly']))
      }
    },
    plugins: {
      '@stylistic': stylistic,
      import: pluginImport
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^(Ph[A-Z])|(_)' }],

      'import/order': [
        'warn',
        {
          groups: [
            ['builtin', 'external'],
            ['internal', 'parent', 'sibling', 'index']
          ],
          'newlines-between': 'always'
        }
      ],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/comma-dangle': ['error', 'only-multiline'],
      '@stylistic/curly-newline': ['error', 'always'],
      '@stylistic/space-in-parens': ['error', 'never'],
      'vue/max-attributes-per-line': ['error', {
        'singleline': {
          'max': 3
        },
        'multiline': {
          'max': 1
        }
      }]
    }
  },
  globalIgnores([
    '**/dist/**',
    '**/dist-ssr/**',
    '**/coverage/**',
    'public/**',
    'src/assets/**',
    'node_modules'
  ]),
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  {
    ...pluginVitest.configs.recommended,
    files: ['tests/*']
  },
  {
    rules:{
      'vue/no-v-html': 'off',
      'vue/require-default-prop':'off',
      '@typescript-eslint/no-explicit-any': 'off',
    }
  }
)
