/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import pinia from '../store'

// Types
import type { App } from 'vue'

export function registerPlugins(app: App) {
  app
    .use(pinia)
}
