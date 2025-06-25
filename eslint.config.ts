import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'

import compat from './bin/eslint/compat'
import { globals as iconsGlobals } from './bin/icons'

export default defineConfigWithVueTs(
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**', 'public/**', 'src/assets/**', 'node_modules']),
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  ...compat.extends('@icij/eslint-config-icij'),
  {
    ...pluginVitest.configs.recommended,
    files: ['tests/*']
  },
  {
    files: ['**/*.{ts,mts,tsx,vue}'],
    languageOptions: {
      globals: {
        ...Object.fromEntries(Object.keys(iconsGlobals).map((key) => [key, 'readonly']))
      }
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^(Ph[A-Z])|(_)' }],
      'vue/no-v-model-argument': 'off',
      'vue/no-v-for-template-key': 'off',
      'vue/no-custom-modifiers-on-v-model': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/valid-v-slot': 'off',
      'import/extensions': 'off'
    }
  }
)
