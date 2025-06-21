/**
 * API Plugin
 * Usable:
 * useNuxtApp().$api
 * or
 * const { $api } = useNuxtApp()
 */
export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()
  const apiEndpoint = runtimeConfig.public.apiEndpoint

  const api = $fetch.create({
    baseURL: apiEndpoint || 'http://localhost:3000',
    async onResponseError({ response }) {
      if (response.status === 401) {
        // TODO: Handle unauthorized here
        console.error('Unauthorized')
      }
    },
  })

  return {
    provide: {
      api,
    },
  }
})
