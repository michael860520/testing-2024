export function isProductionURL() {
  return import.meta.env.MODE === 'production' ? 'https://pcs-nuxt3-v2.vercel.app/' : ''
}
