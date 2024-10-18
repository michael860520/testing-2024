import { config } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { vi } from 'vitest'

config.global.plugins = [createPinia()]

vi.mock('#imports', () => ({
  useNuxtApp: () => ({
    $pinia: createPinia(),
  }),
}))
