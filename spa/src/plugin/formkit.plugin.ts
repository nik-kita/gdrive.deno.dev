import { defaultConfig, plugin } from '@formkit/vue'

export const formkitPlugin = {
  plugin,
  config: {
    ...defaultConfig(),
  }
}