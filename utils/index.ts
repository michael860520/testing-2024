import { env } from 'node:process'

export function isProductionURL() {
  return env.NODE_ENV === 'production' ? 'https://pcs-nuxt3-v2.vercel.app/' : ''
}
