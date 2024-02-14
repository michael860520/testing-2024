export const isProductionURL = ()=>{
  return process.env.NODE_ENV === 'production' ? 'https://pcs-nuxt3-v2.vercel.app/' : ''
}
